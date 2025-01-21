import styles from './styles/mainStyles.module.css'
import {Form,Button, Card} from "react-bootstrap";
import {useState} from "react";

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        }
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }
    return (
        <div className={styles.formContainer}>
            <Form onSubmit={createUser}>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" onChange={e => setFirstName(e.target.value)} value={firstName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" onChange={e => setLastName(e.target.value)} value={lastName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Email Address" onChange={e => setEmail(e.target.value)} value={email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} value={password} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Confirm Password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br/>
            <br/>
            <div className={styles.cardContainer}>
                <Card style={{ width: '30rem' }} >
                    <Card.Body>
                        <Card.Title>Your Form Data</Card.Title>
                        <Card.Text>First Name:  {firstName}</Card.Text>
                        <Card.Text>Last Name: {lastName}</Card.Text>
                        <Card.Text>Email: {email}</Card.Text>
                        <Card.Text>Password: {password}</Card.Text>
                        <Card.Text>Confirm Password: {confirmPassword}</Card.Text>

                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default UserForm