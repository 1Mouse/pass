import styles from './editInterviewInfo.module.scss'
import { useState, KeyboardEventHandler } from 'react';
import CreatableSelect from 'react-select/creatable';
import tagsOptions from '@/lib/constants/tagsOptions';
import { API_URL } from '@/lib/utils/urls';
import axios, { AxiosError } from 'axios';
import IInterview from '@/lib/types/Interviews/IInterview';
import { fireSuccess, fireError } from '@/lib/utils/toasts'
import useAuthStore from '@/lib/zustand/stores/useAuthStore';

const components = {
    DropdownIndicator: null,
};

interface Option {
    readonly label: string;
    readonly value: string;
}

const createOption = (label: string) => ({
    label,
    value: label,
});

type Props = {
    interview: IInterview
    setToggleEdit: React.Dispatch<React.SetStateAction<boolean>>
    toggleEdit: boolean
    updateInterviews: (interview: IInterview) => void
}

const EditInterviewInfo = ({ interview, setToggleEdit, toggleEdit, updateInterviews }: Props) => {
    const accessToken = useAuthStore((state) => state.accessToken);
    const [title, setTitle] = useState<string>(interview.info?.title ? interview.info!.title : '');
    const [summary, setSummary] = useState<string>(interview.info?.summary ? interview.info!.summary : '');
    const [tags, setTags] = useState<readonly Option[]>(interview.info?.tags ? interview.info!.tags.map(tag => ({ value: tag, label: tag })) : []);
    const [inputTag, setInputTag] = useState<string>('');

    const [loading, setLoading] = useState<boolean>(false);

    const handleKeyDown: KeyboardEventHandler = (event) => {
        if (!inputTag) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setTags((prev) => [...prev, createOption(inputTag)]);
                setInputTag('');
                event.preventDefault();
        }
    };

    const handleSubmit = async () => {
        const formattedTags = tags.map((tag) => tag.value)
        try {
            setLoading(true);
            const response = await axios.put(
                `${API_URL}/interviews/${interview._id}`, {
                "title": title,
                "summary": summary,
                "tags": formattedTags,
                "youtubeUrl": ""
            },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log('editedInterveiwInfo', JSON.stringify(response?.data));
            updateInterviews(response?.data);
            setToggleEdit(!toggleEdit)
            fireSuccess('Interview Info got updated Successfully.')
            setLoading(false);

        } catch (err) {
            setLoading(false);
            const e = err as AxiosError;
            console.log(e);
            if (e.response?.data)
                //@ts-ignore
                fireError(e.response.data.message)
            else
                fireError('Something wrong happened.')
        }
    }

    return (
        <>
            <div>
                <h2 className={styles.heading}>Change Username:</h2>
                <label
                    className={styles.label}
                    htmlFor="title">title*</label>
                <input
                    id="title"
                    className={styles.input}
                    type="text"
                    value={title}
                    placeholder="Enter title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label
                    className={styles.label}
                    htmlFor="summary">summary*</label>
                <textarea
                    id="summary"
                    className={styles.input}
                    value={summary}
                    placeholder="Enter summary..."
                    onChange={(e) => setSummary(e.target.value)}
                    required
                />
                <label
                    className={styles.label}
                    htmlFor="tags">tags*</label>
                {/* <CreatableSelect 
                    isMulti
                    isClearable
                    isDisabled={loading} 
                    options={tagsOptions} />   */}
                <CreatableSelect
                    components={components}
                    inputValue={inputTag}
                    isClearable
                    isMulti
                    menuIsOpen={false}
                    onChange={(newValue) => setTags(newValue)}
                    onInputChange={(newValue) => setInputTag(newValue)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type something and press enter..."
                    value={tags}
                />
                <button
                    className={styles.save}
                    onClick={handleSubmit}
                    disabled={loading || !title || !summary || tags.length === 0}
                >
                    {loading ? 'loading...' : 'Add Info'}
                </button>
            </div>

        </>
    )
}

export default EditInterviewInfo