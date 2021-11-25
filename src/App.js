import tasks from "./tasks";
import './App.css';

function App() {


    const addTask = (toDo, isItDone) =>{
        let obj = {
            id : tasks.length,
            todo : toDo,
            done : isItDone
        }
        tasks.push(obj)
        for (let i = 1 ; i < tasks.length; i++){
            tasks[i].id = i
        }
    }

    const check = (item) =>{
        item.done = true
    }

    const eraseAll = () =>{
        tasks.forEach(item => tasks.pop())
    }

    const reOrder = (id, newPosition) =>{
        if (newPosition >= tasks.length) {
            let k = newPosition - tasks.length + 1
            while (k--) {
                tasks.push(undefined)
            }
        }
        tasks.splice(newPosition, 0, tasks.splice(id, 1)[0])
    }


    let Td = (props) =>
      <div className={"todo-item"} key={props.task.id}>
          <input onClick={check} type="checkbox"/>
          <p>{props.task.todo}</p>
          <br className={"breakLine"}/>
      </div>

    let allTasks = tasks.map(item => <Td key = {item.id} task = {item}/>)

    return (
    <div className="App">
        <div className={"container"}>
            {allTasks}
        </div>
        <div className={"options"}>
            <button className={"add"} onClick={addTask}><ion-icon name="add-circle-outline" size ="large"/></button>
            <button className={"delete"} onClick={eraseAll}><p>Delete all</p></button>
        </div>

    </div>
  );
}

export default App;
