const AddItemBar = (props) => {
    const { onAddFormSubmit, inputValue, onInputChange, children } = props;

    return (
        <form onSubmit={onAddFormSubmit} className="input-form input-form-send">
            <input
                type="text"
                className="input-box"
                placeholder="Enter new list here"
                value={inputValue}
                onChange={onInputChange}
            />
            {children}
        </form>
    );
};

export default AddItemBar;
