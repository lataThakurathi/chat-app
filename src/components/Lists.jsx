import { useContext, useState } from "react";
import { HiPlus } from "react-icons/hi";
import { ListsTasksContext } from "../App";
import { ACTIONS } from "../store/reducer/reducer";
import AddItemBar from "./AddItemBar";
import Container from "./Container";
import List from "./List";
import SearchBar from "./SearchBar";
import SearchInfo from "./SearchInfo";
import SectionFoot from "./SectionFoot";
import SectionHead from "./SectionHead";
import SectionMain from "./SectionMain";
import SectionTitle from "./SectionTitle";

const Lists = (props) => {
    const { activeListId, setActiveListId } = props;
    const { state, dispatch } = useContext(ListsTasksContext);

    const [listsSearchInputValue, setListsSearchInputValue] = useState("");
    const [listsSearchString, setListsSearchString] = useState("");
    const [newListName, setNewListName] = useState("");
    const handleNewListInputChange = (e) => {
        setNewListName(e.target.value);
    };
    const clearListsSearchString = () => {
        setListsSearchString("");
        setListsSearchInputValue("");
    };

    const addList = (e) => {
        e.preventDefault();
        if (newListName === "") return;

        dispatch({ type: ACTIONS.ADD_LIST, payload: newListName });

        setNewListName("");
    };

    const activateList = (listId) => {
        setActiveListId(listId);
    };
    const removeList = (listId) => {
        dispatch({ type: ACTIONS.REMOVE_LIST, payload: listId });
    };
    const searchLists = (e) => {
        e.preventDefault();
        setListsSearchInputValue("");
    };

    const handleListSearchInputChange = (e) => {
        setListsSearchInputValue(e.target.value);
        setListsSearchString(e.target.value);
    };
    const searchedLists = state.lists.filter((list) =>
        list.name.toLowerCase().includes(listsSearchString.toLowerCase())
    );
    return (
        <aside className="sidebar">
            <Container>
                <SectionHead>
                    <SectionTitle>Lists</SectionTitle>
                    <SearchBar
                        onSearchFormSubmit={searchLists}
                        searchInputValue={listsSearchInputValue}
                        handleSearchInputChange={handleListSearchInputChange}
                    />
                </SectionHead>
                <SectionMain>
                    <SearchInfo
                        searchString={listsSearchString}
                        searchedItems={searchedLists}
                        itemName={"list"}
                        clearSearchString={clearListsSearchString}
                    />
                    <ul className="list-list">
                        {searchedLists.map((list) => (
                            <List
                                key={list.id}
                                list={list}
                                activateList={activateList}
                                activeListId={activeListId}
                                removeList={removeList}
                            />
                        ))}
                    </ul>
                </SectionMain>
                <SectionFoot>
                    <AddItemBar
                        onAddFormSubmit={addList}
                        inputValue={newListName}
                        onInputChange={handleNewListInputChange}>
                        <button
                            type="submit"
                            className="btn btn-submit btn-add">
                            <HiPlus className="add-icon" />
                        </button>
                    </AddItemBar>
                </SectionFoot>
            </Container>
        </aside>
    );
};

export default Lists;
