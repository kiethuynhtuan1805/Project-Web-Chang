import './SearchBar.scss';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';

export default function SearchBar() {
    // const onSearch = (value) => {
    //     console.log(value);
    // }

    useEffect(() => {
        document.querySelector('.search-icon').addEventListener('click', function () {
            document.querySelector('.SearchBar').classList.toggle('active');
        });
    }, []);

    return (
        <div className='SearchBar'>
            <div className='search-bar'>
                <input type="text" className='search-input' />
                <Icon icon="fa:close" className='close-icon' width={14} height={14} />
            </div>
            <div className='search-icon'>
                <Icon icon="mingcute:search-3-line" width={22} height={22} />
            </div>
        </div>
    )
};