import {Button, Form, ListGroup} from "react-bootstrap";
import {useState} from "react";


const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addNewTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, { text: newTask, status: "incomplete" }]);
        setNewTask("");
    }

    const removeTask = index => {
        setTasks(tasks.filter(
            (_, i) => i !== index
        ))
    }

    const toggleTaskCompletion = (index) => {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, status: task.status === "incomplete" ? "complete" : "incomplete" } : task
        ));
    };

    return (
        <div>
            <Form onSubmit={addNewTask}>
                <Form.Group className="mb-3" controlId="formAddNewTask">
                    <Form.Label>Add new Task</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Add a task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Add
                </Button>
            </Form>

            <ListGroup>
                {tasks.map((task, index) => (
                    <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                        <span
                            style={{ textDecoration: task.status === "complete" ? "line-through" : "none", cursor: "pointer" }}
                            onClick={() => toggleTaskCompletion(index)}
                        >
                            {task.text}
                        </span>
                        <Button variant="danger" size="sm" onClick={() => removeTask(index)}>
                            Delete
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}
export default ToDoList;
