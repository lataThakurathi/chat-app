import { MdClose } from "react-icons/md";

const SearchInfo = (props) => {
    const { searchString, searchedItems, itemName, clearSearchString } = props;

    return searchString != "" ? (
        <div className="search-info">
            <div>
                <p className="search-info-text">
                    {searchedItems.length === 0
                        ? `No ${itemName} matches the search criteria: `
                        : "Showing search result for: "}
                </p>
                <p className="search-info-query">{searchString}</p>
            </div>
            <button className="close-button" onClick={clearSearchString}>
                <MdClose />
            </button>
        </div>
    ) : null;
};

export default SearchInfo;
