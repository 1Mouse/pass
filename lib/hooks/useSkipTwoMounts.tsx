import { useLayoutEffect, useRef } from 'react';
// not working
const useSkipTwoMounts = () => {
    const firstUpdate = useRef(true);
    const secondUpdate = useRef(true);

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
        }
        if (secondUpdate.current) {
            secondUpdate.current = false;
    }
}, []);
}

export default useSkipTwoMounts;