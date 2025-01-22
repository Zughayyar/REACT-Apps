const BoxColorForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedColor = e.target.color.value;
        props.onAddBox(selectedColor);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Color</label>
                <select name="color">
                    {props.colors.map((color) => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default BoxColorForm;