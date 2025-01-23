import {useParams} from "react-router-dom";


const ColorWord = () => {
    const {color, word, backgroundColor} = useParams()
    return (
        <div>
            <h1
                style={{
                    color: color,
                    backgroundColor: backgroundColor,
                    padding: "10px",
                    borderRadius: "5px",
                }}
            >
                The word is: {word}
            </h1>
        </div>
    )
}
export default ColorWord