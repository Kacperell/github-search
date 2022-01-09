import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useSearchContext } from '../contexts/SearchContext';


const Header: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { searchText, setSearchText } = useSearchContext();
    const changeSearchText = (text: string) => {
        setSearchText(text);
        if (location.pathname !== '/') {
            navigate('/');
        }
    }
    return (
        <header>
            <div className='container'>
                <input type="text" value={
                    searchText ? searchText : ''
                }
                    onChange={(e) => changeSearchText(e.target.value)}
                />
            </div>
        </header>
    );
}
export default Header;