import "./Content.css"
import {useState} from "react";


const Content=({progress_tasks, completed_tasks, onChange})=> {
    const [tskProg, setListTsk]=useState(progress_tasks);
    const [tskComp, setListCompletedTsk]=useState(completed_tasks);
    const handleCheckBoxTask = (progress, completed)=>{
        onChange(progress, completed);
    }

    const prog=[
        ...progress_tasks
    ];

    const  cmpl = [
        ...completed_tasks
    ];

    function doneTask(item){
        cmpl.push({task:prog[item].task});
        prog.splice(item,1);
        handleCheckBoxTask(prog,cmpl);
    }

    function undoneTask(item){
        prog.push({task:cmpl[item].task});
        cmpl.splice(item,1);
        handleCheckBoxTask(prog,cmpl);
    }

    return (
        <div className='Content'>
            <div className='body'>
                {(progress_tasks || []).map((item, index) => (
                    <div className='itemTsk' key={index}>
                        <span className='ElipseIn' onClick={(e) => doneTask(index, e)}/>
                        <span className='taskTitle' onClick={(e) => doneTask(index, e)}>{item.task}</span>
                    </div>
                ))}

                {(completed_tasks || []).map((item, index) => (
                    <div className='itemTsk cmplTask' key={index}>
                        <span className='ElipseIn' onClick={(e) => undoneTask(index, e)}>✓</span>
                        <span className='taskTitle' onClick={(e) => undoneTask(index, e)}>{item.task}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Content;
