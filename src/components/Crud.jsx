import React, { useState } from "react";

function Crud() {
    const defaultList = [
        { name: "ItemOne" },
        { name: "ItemTwo" },
        { name: "ItemThree" },
    ];

    const [list, updateList] = useState(defaultList);
    const [task, setTask] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setTask(e.target.value);
    }
    function onSubmitTask(e) {
        e.preventDefault();
        updateList(list.concat({ name: task }));
        setTask("");
    }

    const handleRemoveItem = (e) => {
        const name = e.target.getAttribute("name");
        updateList(list.filter((item) => item.name !== name));
    };

    const removeItem = (index) => {
        updateList([
            ...list.slice(0, index),
            ...list.slice(index + 1, list.length),
        ]);
    };

    return (
        <div>
            <form onSubmit={onSubmitTask}>
                <div>
                    <label htmlFor="taskInput">Enter Task: </label>
                    <input
                        onChange={handleChange}
                        value={task}
                        type="text"
                        id="taskInput"
                    />
                    <button type="submit">Add Task</button>
                </div>
            </form>

            <div style={{ marginTop: "20px" }}>
                {list.map((item, index) => {
                    return (
                        <div>
                            <span>{item.name}</span>
                            <button
                                name={item.name}
                                onClick={() => removeItem(index)}
                            >
                                X
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Crud;
