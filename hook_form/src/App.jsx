import styles from './components/styles/mainStyles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserForm from "./components/UserForm.jsx";


const App = () => {
    return (
        <div className={styles.appContainer}>
            <UserForm/>
        </div>
    )
}

export default App
