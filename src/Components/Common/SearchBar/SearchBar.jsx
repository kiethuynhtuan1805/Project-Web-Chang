import Search from 'antd/es/input/Search';
import './SearchBar.scss';

export default function SearchBar() {
    const onSearch = (value) => {
        console.log(value);
    }

    return (
        <Search placeholder="Tìm kiếm sản phẩm" onSearch={onSearch} enterButton className='SearchBar' size='large' />
    )
};