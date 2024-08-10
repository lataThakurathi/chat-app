import { useContext, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { ListsTasksContext } from "../App";
import { ACTIONS } from "../store/reducer/reducer";
import AddItemBar from "./AddItemBar";
import Container from "./Container";
import SearchBar from "./SearchBar";
import SearchInfo from "./SearchInfo";
import SectionFoot from "./SectionFoot";
import SectionHead from "./SectionHead";
import SectionMain from "./SectionMain";
import SectionTitle from "./SectionTitle";
import Task from "./Task";

const Tasks = (props) => {
    const [newTaskText, setNewTaskText] = useState("");
    const [tasksSearchString, setTasksSearchString] = useState("");
    const [searchTasksInputValue, setTasksSearchInputValue] = useState("");

    const { activeListId } = props;
    const { state, dispatch } = useContext(ListsTasksContext);

    const handleTaskSearchInputChange = (e) => {
        setTasksSearchInputValue(e.target.value);
        setTasksSearchString(e.target.value);
    };

    const handleNewTaskInputChange = (e) => {
        setNewTaskText(e.target.value);
    };
    const searchTasks = (e) => {
        e.preventDefault();
        setTasksSearchInputValue("");
    };

    const clearTasksSearchString = () => {
        setTasksSearchString("");
        setTasksSearchInputValue("");
    };
    const addTask = (e) => {
        e.preventDefault();
        if (newTaskText === "") return;
        dispatch(ACTIONS.ADD_TASK, newTaskText);
        setNewTaskText("");
    };
    const toggleTaskCompletion = (taskId) => {
        // setTasks((oldTasks) =>
        //     oldTasks.map((task) =>
        //         task.id === taskId
        //             ? { ...task, completed: !task.completed }
        //             : task
        //     )
        // );
    };

    const removeTask = (taskId) => {
        dispatch(ACTIONS.REMOVE_TASK, taskId);
    };

    const activeTasks = state.tasks.filter(
        (task) => task.listId === activeListId
    );

    const searchedActiveTasks = activeTasks.filter((task) =>
        task.text.toLowerCase().includes(tasksSearchString.toLowerCase())
    );

    return (
        <main className="main">
            <Container>
                <SectionHead>
                    <SectionTitle>
                        {state.lists.find((list) => list.id === activeListId)
                            ?.name || "Tasks"}
                    </SectionTitle>
                    <SearchBar
                        onSearchFormSubmit={searchTasks}
                        searchInputValue={searchTasksInputValue}
                        handleSearchInputChange={handleTaskSearchInputChange}
                    />
                </SectionHead>
                <SectionMain>
                    <SearchInfo
                        searchString={tasksSearchString}
                        searchedItems={searchedActiveTasks}
                        itemName={"task"}
                        clearSearchString={clearTasksSearchString}
                    />
                    <ul className="task-list">
                        {searchedActiveTasks.map((task) => (
                            <Task
                                key={task.id}
                                task={task}
                                toggleTaskCompletion={toggleTaskCompletion}
                                removeTask={removeTask}
                            />
                        ))}
                    </ul>
                </SectionMain>
                <SectionFoot>
                    <AddItemBar
                        onAddFormSubmit={addTask}
                        inputValue={newTaskText}
                        onInputChange={handleNewTaskInputChange}>
                        <button
                            type="submit"
                            className="btn btn-submit btn-send">
                            <IoSendSharp className="send-icon" />
                        </button>
                    </AddItemBar>
                </SectionFoot>
            </Container>
        </main>
    );
};

export default Tasks;
