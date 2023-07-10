import styles from './editInterviewInfo.module.scss'
import { useState, KeyboardEventHandler } from 'react';
import CreatableSelect from 'react-select/creatable';
import tagsOptions from '@/lib/constants/tagsOptions';
import { API_URL } from '@/lib/utils/urls';
import axios, { AxiosError } from 'axios';
import IInterview from '@/lib/types/Interviews/IInterview';
import { fireSuccess, fireError } from '@/lib/utils/toasts'
import useAuthStore from '@/lib/zustand/stores/useAuthStore';
import Line from '@/components/common/Line';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const components = {
    ...animatedComponents,
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
    const [accessToken, AuthedId] = useAuthStore((state) => [state.accessToken, state.user._id]);
    const [title, setTitle] = useState<string>(interview.info?.title ? interview.info!.title : '');
    const [summary, setSummary] = useState<string>(interview.info?.summary ? interview.info!.summary : '');
    const [tags, setTags] = useState<readonly Option[]>(interview.info?.tags ? interview.info!.tags.map(tag => ({ value: tag, label: tag })) : []);
    const [inputTag, setInputTag] = useState<string>('');
    const [rating, setRating] = useState<number>(getInitialRating());
    const [feedback, setFeedback] = useState<string>(getInitialFeedback());

    const [loading, setLoading] = useState<boolean>(false);

    function getInitialRating() {
        if (interview.info === undefined) return 5;
        if (interview.info.reviews === undefined) return 5;

        if (interview.info.reviews.length === 0) return 5;
        else if (interview.info.reviews.length > 0 && interview.info.reviews[0].from === AuthedId) return interview.info.reviews[0].rating;
        else if (interview.info.reviews.length > 1 && interview.info.reviews[1].from == AuthedId) return interview.info.reviews[1].rating;

        return 5;
    }

    function getInitialFeedback() {
        if(interview.info===undefined) return '';
        if(interview.info.reviews===undefined) return '';

        if (interview.info.reviews.length === 0) return '';
        else if (interview.info.reviews.length > 0 && interview.info.reviews[0].from === AuthedId) return interview.info.reviews[0].feedback;
        else if (interview.info.reviews.length > 1 && interview.info.reviews[1].from == AuthedId) return interview.info.reviews[1].feedback;

        return '';
    }

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

    function getTo() {
        if (interview.interviewee._id !== AuthedId) return interview.interviewee._id;
        else return interview.interviewer._id;
    }

    const handleSubmit = () => {
        const formattedTags = tags.map((tag) => tag.value)
        console.log('rating',rating)
        setLoading(true);
        axios.put(
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
        ).then((response) => {
            console.log('editedInterveiwInfo', JSON.stringify(response?.data));
            return axios.put(`${API_URL}/interviews/${interview._id}/reviews`, {
                "from": AuthedId,
                "to": getTo(),
                "rating": rating,
                "feedback": feedback
            },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            )
        }
        ).then((response) => {
            console.log('editedOne',JSON.stringify(response.data))
            updateInterviews(response?.data);
            setToggleEdit(!toggleEdit)
            fireSuccess('Interview Info got updated Successfully.')
            setLoading(false);
        }).catch((err) => {
            setLoading(false);
            const e = err as AxiosError;
            console.log(e);
            if (e.response?.data)
                //@ts-ignore
                fireError(e.response.data.message)
            else
                fireError('Something wrong happened.')
        });
    }

    return (
        <>
            <div>
                <Line/>
                <h2 className={styles.heading}>Edit interview data and review:</h2>
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
                    className={`${styles.input} ${styles.textArea}`}
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
                <label
                    className={styles.label}
                    style={{marginTop:'1.5rem'}}
                    htmlFor="rating">rating*</label>
                <input
                    id="rating"
                    className={styles.input}
                    type="number"

                    value={rating}
                    placeholder="Enter a number between 1 to 5"

                    onChange={(e) => setRating(+e.target.value)}
                    required
                />

                <label
                    className={styles.label}
                    htmlFor="feedback">feedback*</label>
                <textarea
                    id="feedback"
                    className={`${styles.input} ${styles.textArea}`}
                    value={feedback}
                    placeholder="Enter feedback..."
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                />

                <button
                    className={styles.save}
                    onClick={handleSubmit}
                    disabled={loading || !title || !summary || tags.length === 0 || !rating || !feedback}
                >
                    {loading ? 'loading...' : 'Save'}
                </button>
            </div>

        </>
    )
}

export default EditInterviewInfo