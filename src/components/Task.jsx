import { FaRegTrashAlt } from "react-icons/fa";

const Task = (props) => {
    const { task, toggleTaskCompletion, removeTask } = props;

    return (
        <li key={task.id} className="task-item">
            <input
                type="checkbox"
                id={task.id}
                className="task-item-checkbox"
                checked={task.completed}
                onChange={() => {
                    toggleTaskCompletion(task.id);
                }}
            />
            <label htmlFor={task.id} className="task-item-text">
                {task.text}
            </label>

            <FaRegTrashAlt
                onClick={() => {
                    removeTask(task.id);
                }}
                className="trash-icon"
            />
        </li>
    );
};

export default Task;
