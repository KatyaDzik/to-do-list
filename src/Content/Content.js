import "./Content.css"
import {useState} from "react";


const Content=({progress_tasks, completed_tasks})=> {
    return (
        <div className='Content'>
            <div className='body'>
                {(progress_tasks || []).map((item, index) => (
                    <div className='itemTsk' key={index}>
                        <span className='ElipseIn'/>
                        <span className='taskTitle'>{item.task}</span>
                    </div>
                ))}

                {(completed_tasks || []).map((item, index) => (
                    <div className='itemTsk cmplTask' key={index}>
                        <span className='ElipseIn'>✓</span>
                        <span className='taskTitle'>{item.task}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Content;
