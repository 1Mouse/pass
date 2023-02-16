import styles from './select.module.scss';

const Select = () => {
    return (
        <>
            <select
                title='Select role:'
                id="role"
                name="role"
            >
                <option value="interviewee">Interviewee</option>
                <option value="interviewer">Interviewer</option>
            </select>
        </>
    )
}

export default Select