import styles from './styles/mainStyles.module.css'
import {Form,Button, Card} from "react-bootstrap";
import {useState} from "react";

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Validations
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("First Name is required");
        }
        else if (e.target.value.length < 2 ) {
            setFirstNameError("First Name must be at least 2 characters long");
        }
        else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Last Name is required");
        }
        else if (e.target.value.length < 2 ) {
            setLastNameError("Last Name must be at least 2 characters long");
        }
        else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Email is required");
        }
        else if (e.target.value.length < 2 ) {
            setEmailError("Email must be at least 2 characters long");
        }
        else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1) {
            setPasswordError("Password is required");
        }
        else if (e.target.value.length < 8 ) {
            setPasswordError("Password must be at least 8 characters long");
        }
        else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        const value = e.target.value;
        setConfirmPassword(value);
        if (password !== value) {
            setConfirmPasswordError("Password must match");
        } else {
            setConfirmPasswordError("");
        }
    };

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
                    <Form.Control type="text" placeholder="Enter First Name" onChange={handleFirstName} value={firstName} />
                    {firstNameError ? <p>{firstNameError}</p> : ''}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" onChange={handleLastName} value={lastName} />
                    {lastNameError ? <p>{lastNameError}</p> : ''}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Email Address" onChange={handleEmail} value={email} />
                    {emailError ? <p>{emailError}</p> : ''}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={handlePassword} value={password} />
                    {passwordError ? <p>{passwordError}</p> : ''}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Confirm Password" onChange={handleConfirmPassword} value={confirmPassword} />
                    {confirmPasswordError ? <p>{confirmPasswordError}</p> : ''}
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