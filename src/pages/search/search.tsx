import { useState } from "react";
import List from "../../components/list/list";
import SearchInput from "../../components/search-input/search-input";


function Search() {
    const [url, setUrl] = useState<string>('https://api.themoviedb.org/3/movie/popular?');
    const [searchText, setSearchText] = useState<string | undefined>(undefined);

    const handleSearch = (value) => {
        setSearchText(value)
        setUrl(value ? `https://api.themoviedb.org/3/search/movie?query=${value}` : 'https://api.themoviedb.org/3/movie/popular?');
    }

    return (
        <>
            <SearchInput onSearch={handleSearch} />
            <div className="mt-8">
                <List url={url}></List>
            </div>
        </>
    )
}

export default Search