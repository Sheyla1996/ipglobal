import React, { useState } from 'react';

function SearchInput({ onSearch }) {
  const [valueSearch, setValueSearch] = useState('');

  const handleChange = (event) => {
        const searchText = event.target.value;
        setValueSearch(searchText);
        onSearch(searchText);
  };

  return (
    <input
        className="w-full rounded-md border border-slate-600 bg-transparent	p-4 border-gray-300/80 shadow-lg"
        type="text"
        placeholder="Search..."
        value={valueSearch}
        onChange={handleChange}
    />
  );
}

export default SearchInput;