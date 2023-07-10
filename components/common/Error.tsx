
import styles  from './error.module.scss';
import Router from 'next/router'

type Props={
    errMsg:string
}

const Error = ({errMsg='something went wrong'}:Props) => {
    return (
        <div className={styles.parent}>
            <div className={styles.box}>
                <h1 className={styles.msg}>{errMsg}</h1>
                <div className={styles.tryAgainParent}>
                    <button className={styles.tryAgain} onClick={()=>{
                        Router.reload()
                    }}>Try Again</button>
                </div>
            </div>
        </div>
    );
}

export default Error;