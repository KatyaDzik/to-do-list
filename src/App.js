import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Content from "./Content/Content";


let tasks_in_progress = [
    {task:"Build To modern new app"},
    {task:"Old app"},
    {task:"Build To modern new app"},
    {task:"Old app"},
    {task:"Build To modern new app"},
    {task:"Old app"}];
let tasks_completed=[{task:"completed task ;)"},
    {task:"Build To modern new app"},
    {task:"Old app"},
    {task:"Build To modern new app"},
    {task:"Old app"},
    {task:"Build To modern new app"},
    {task:"Old app"},
    {task:"Build To modern new app"},
    {task:"Old app"},
    {task:"Build To modern new app"},
    {task:"Old app"},
    {task:"Build To modern new app"},
    {task:"Old app"}];


function App() {
  return (
    <div className="App">
        <div className='Wrapper'>
            <Header count_tasks={5}/>
            <Content task_in_progress={tasks_in_progress} completed_tasks={tasks_completed}/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
