import React, { useEffect } from 'react'
import { useSearchContext } from '../../contexts/SearchContext';
import useDebounce from "../../hooks/useDebounce";



const Home: React.FC = () => {


    const { searchText } = useSearchContext();
    const debouncedSearch = useDebounce(searchText, 500);



    useEffect(() => {
        console.log("HOME debouncedSearch");
        if (!searchText) return;




    }, [debouncedSearch])

    useEffect(() => {

    }, [])

    return (
        <>
            <p>{searchText}</p>

        </>
    )
}

export default Home
