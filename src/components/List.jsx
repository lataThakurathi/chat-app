import { FaRegTrashAlt } from "react-icons/fa";

const List = (props) => {
    const { list, activeListId, activateList, removeList } = props;

    return (
        <li
            className={
                list.id === activeListId ? "list-item active" : "list-item"
            }
            onClick={() => {
                activateList(list.id);
            }}>
            {list.name}
            <FaRegTrashAlt
                onClick={() => {
                    removeList(list.id);
                }}
                className="trash-icon"
            />
        </li>
    );
};

export default List;
