import styles from "./styles/styles.module.css";

const BoxColorDisplay = (props) => {
    return (
        <div className={styles.boxContainer}>
            {props.boxes.map((color, index) => (
                <div
                    key={index}
                    style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: color,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default BoxColorDisplay;