import React from "react";
import './SearchInput.scss';

const SearchInput = ({filterName, setFilterName}) => {
    return (
        <input type="text" placeholder="Search starship by name..." value={filterName}
               className="filter-input"
               onChange={(e) => {setFilterName(e.target.value)}}/>
    );
}

export default React.memo(SearchInput);