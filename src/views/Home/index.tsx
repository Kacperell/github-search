import React from "react";
import { useSearchContext } from '../../contexts/SearchContext';
const Home: React.FC = () => {
    const { searchText } = useSearchContext();
    return (
        <>
            <h1>Home</h1>
            <p>Search: {searchText}</p>
        </>
    )
}

export default Home
