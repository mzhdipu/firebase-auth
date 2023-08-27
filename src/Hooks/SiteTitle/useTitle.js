import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Project Name`;
    }, [title])
};

export default useTitle;