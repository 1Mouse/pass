
import { useState } from "react";
import styles from "./editUserName.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import axios, { AxiosError } from "axios";
import { API_URL } from "@/lib/utils/urls";
import useUserStore from '@/lib/zustand/stores/useUserStore'

function EditSocials({ accessToken }: { accessToken: string }) {
    const [socials, setSocials] = useUserStore(state => [state.socials, state.setSocials]);
    const [linkedIn, setLinkedIn] = useState(socials?.linkedin ? socials.linkedin : "");
    const [github, setGithub] = useState(socials?.github ? socials.github : "");
    const [twitter, setTwitter] = useState(socials?.twitter ? socials.twitter : "");

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSave = async () => {
        console.log(linkedIn)
        console.log(github)
        console.log(twitter)
        try {
            setLoading(true)
            const response = await axios.put(`${API_URL}/users/socials/`, {
                'socials': {
                    "linkedin": linkedIn,
                    "github": github,
                    "twitter": twitter
                }
            },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    }
                }
            );
            console.log(JSON.stringify(response?.data));
            setSocials(response?.data?.info.socials);
            setLoading(false);
            setErrorMessage('');
            setSuccess(true);
        } catch (err) {
            setLoading(false);
            setSuccess(false);
            const error = err as AxiosError;
            console.log(error)
            if (error?.response) {
                //@ts-ignore
                setErrorMessage(error.response?.data?.message);
            }
            else {
                setErrorMessage('Something went wrong');
            }
        }

    };


    return (
        <>
            <div>
                <h2 className={styles.heading}>Edit social links:</h2>
                <div
                    className={styles.inputContainer}
                    style={{ marginBottom: '1rem' }}
                >
                    <label className={styles.label} htmlFor="linkedIn">LinkedIn</label>
                    <input
                        className={styles.input}
                        id="linkedIn"
                        type="text"
                        placeholder="Enter link here"
                        name="linkedIn"
                        value={linkedIn}
                        onChange={(e) => setLinkedIn(e.target.value)}
                    />
                </div>

                <div
                    className={styles.inputContainer}
                    style={{ marginBottom: '1rem' }}
                >
                    <label className={styles.label}
                        htmlFor="github">Github</label>

                    <input
                        className={styles.input}
                        id="github"
                        type="text"
                        placeholder="Enter link here"
                        name="github"
                        value={github}
                        onChange={(e) => setGithub(e.target.value)}
                    />
                </div>

                <div
                    className={styles.inputContainer}
                    style={{ marginBottom: '1rem' }}
                >
                    <label className={styles.label}
                        htmlFor="twitter">Twitter</label>

                    <input
                        className={styles.input}
                        id="twitter"
                        type="text"
                        placeholder="Enter link here"
                        name="twitter"
                        value={twitter}
                        onChange={(e) => setTwitter(e.target.value)}
                    />
                </div>
                {errorMessage &&
                    <p className={styles.instructions}>
                        <FontAwesomeIcon icon={faInfoCircle} className={styles.pwdIcon} />
                        {errorMessage}
                    </p>
                }
                {success &&
                    <p className={styles.success}>
                        <FontAwesomeIcon icon={faCheck} className={styles.pwdIcon} />
                        Success
                    </p>
                }
                <button
                    className={styles.save} onClick={handleSave}
                    disabled={loading}
                >
                    {loading ? 'loading...' : 'Save'}
                </button>
            </div>

        </>
    );
}

export default EditSocials;
