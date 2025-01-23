import {useParams} from "react-router-dom";


const Word = () => {
    const {word} = useParams()
    const isNumber = !isNaN(+word);

    return (
        <div>
            {isNumber ? (
                <h1>The number is: {word}</h1>
            ) : (
                <h1>The word is: {word}</h1>
            )}
        </div>
    )
}

export default Word