import { FaSearch } from 'react-icons/fa';


const Search = ({ textSearch }) => {
    return (
        <div className='search'>
            <FaSearch />
            <input type="text" placeholder='Search...'
                onChange={(e) => textSearch(e.target.value)}
            />
        </div>

    );
}

export default Search;