import styles from './bookModal.module.scss';
import {useEffect} from 'react';

export default function BookModal() {
    useEffect(()=>{
        // const dialog = document.querySelector("dialog");
        // dialog!.showModal();
    },[])
    return (
        <dialog open>
            <form method="dialog">
                <input type="text" />
                <button type="submit">Submit</button>
            </form>
        </dialog>
    )
} 