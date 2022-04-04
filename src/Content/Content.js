import "./Content.css"

let tasks_in_progress=[];
let tasks_completed=[];

function Content(props) {
    tasks_in_progress=props.task_in_progress;
    tasks_completed=props.completed_tasks;
    return (
        <div className='Content'>
            <div className='body'>
                {(tasks_in_progress || []).map((item, index) => (
                    <div className='itemTsk' key={index}>
                        <span className='ElipseIn'/>
                        <span className='taskTitle'>{item.task}</span>
                    </div>
                ))}

                {(tasks_completed || []).map((item, index) => (
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
