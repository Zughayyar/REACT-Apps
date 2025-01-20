import styles from './components/styles/App.module.css'
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Main from "./components/Main.jsx";
import Subcontent from "./components/Subcontent.jsx";
import Advertisement from "./components/Advertisement.jsx";

const App = () => {
    return (
        <div className={styles.appStyle}>
            <Header/>
            <Navigation/>
            <Main>
                <Subcontent/>
                <Subcontent/>
                <Subcontent/>
                <Advertisement/>
            </Main>
        </div>
    )
}
export default App