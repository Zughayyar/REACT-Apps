import styles from './styles/App.module.css'

const Main = (props) => {
    return (
        <div className={styles.mainStyle}>
            {props.children}
        </div>
    )
}

export default Main