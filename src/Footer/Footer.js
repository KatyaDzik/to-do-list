import './Footer.css';
import {useState} from "react";

const Footer=({progress_tasks, completed_tasks, onChange}) =>
{
    const [tskProg, setListTsk]=useState(progress_tasks);
    const [tskComp, setListCompletedTsk]=useState(completed_tasks);
    const handleTask = (updatetasks, deltsk)=>{
        onChange(updatetasks, deltsk);
    }


    const  deltsk = [
        ...completed_tasks
    ];

    const updateTasks=[
        ...progress_tasks
    ];




    function AddNewTask()
    {
        let inpTsk = prompt ('What is your main focus for today?','Don\'t die')
        if(inpTsk != null && inpTsk != ""){
        updateTasks.push({task:inpTsk});
        setListTsk(updateTasks);
        handleTask(updateTasks,deltsk);}
    }


    function DeleteTasks(){
        deltsk.splice(0,deltsk.length-0);
        setListCompletedTsk(deltsk);
        handleTask(updateTasks,deltsk);
    }

    return (
        <div className="Footer">
            <input type="button" className='DeleteBtn' onClick={(e) => DeleteTasks()} value='delete completed tasks'/>
            <input type="button" className='AddBtn' onClick={(e) => AddNewTask()} value='+'/>
        </div>
    );
}

export default Footer;
