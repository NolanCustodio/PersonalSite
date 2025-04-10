
import { ScrollTo, scrollIntoView } from "../../Navigation";

const partitions = [
    'PersonalInfo',
    'Portfolio',
    'Synchat',
    'NewsBox'
]

const NextButton = (props) => {
    let rtnComponent;


    if (props.projectIndex + 1 > partitions.length){
        rtnComponent = <div></div>
    }else{
        const nextProject = partitions[props.projectIndex + 2]
        rtnComponent = <button 
            className="next-button"
            onClick={() => {
                scrollIntoView(nextProject);
            }}
        >   
            V
        </button>
    }

    

    return (rtnComponent)
}

export default NextButton;