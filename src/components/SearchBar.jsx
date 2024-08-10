import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = (props) => {
    const { onSearchFormSubmit, searchInputValue, handleSearchInputChange } =
        props;

    return (
        <form className="input-form" onSubmit={onSearchFormSubmit}>
            <input
                type="text"
                className="input-box"
                placeholder="Search lists"
                value={searchInputValue}
                onChange={handleSearchInputChange}
            />
            <button type="submit" className="btn btn-submit">
                <HiMagnifyingGlass className="magnifying-glass-icon" />
            </button>
        </form>
    );
};

export default SearchBar;
