import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";
import {useState} from "react";


let tasks_in_progress = [
    {task:"Build To modern new app"},
    {task:"Old app"}];
let tasks_completed=[{task:"completed task ;)"}];

function App() {

   const [progress_task, setListTsk]=useState(tasks_in_progress);
   const [completed_task, setCompTsk]=useState(tasks_completed);
   const handleTask = (progress_tsk, completed_tsk)=>{
        setListTsk(progress_tsk);
        console.log('progress_tsk');
        console.log(progress_tsk);
        setCompTsk(completed_tsk);
        console.log('completed_tsk');
        console.log(completed_tsk);
    }

    const handleCheckBoxTask = (progress_tsk, completed_tsk)=> {
        setListTsk(progress_tsk);
        setCompTsk(completed_tsk);
    }

  return (
    <div className="App">
        <div className='Wrapper'>
            <Header count_tasks={progress_task.length}/>
            <Content onChange={handleCheckBoxTask} progress_tasks={progress_task} completed_tasks={completed_task}/>
            <Footer onChange={handleTask} completed_tasks={completed_task} progress_tasks={progress_task}/>
        </div>
    </div>
  );
}

export default App;
