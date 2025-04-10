
import { ScrollTo, scrollIntoView } from "../../Navigation";

const partitions = [
    'PersonalInfo',
    'Portfolio',
    'Synchat',
    'NewsBox'
]

const NextButton = (props) => {

    return (
        <button className='next-button'
            onClick={() => {
                ScrollTo(props.windowPosition);
            }}
        >
            V
        </button>
    )
}

export default NextButton;