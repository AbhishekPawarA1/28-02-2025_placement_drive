import { useState } from "react"
import "../css/Todo.css"

export function Todo() {
    let [data, setData] = useState([])
    let [input, setInput] = useState("")
    let [select,setSelect]=useState("default")
    
    function handleInput(event) {
        setInput(event.target.value)
       console.log(event.target.value)
    }
    function handleSelect(event) {
      setSelect(event.target.value);
    }

    function handleAdd() {
        setData([...data, { task: input, status: select }])
        setInput("")
    }

    function handleTask(id) {
        let deleteddata = data.filter((_,index) => {
            return index !==id
        })
        setData(deleteddata)
    }
    return (
        <>
            <h1>Todo</h1>
            <input type="text" placeholder="Enter task" value={input} onChange={handleInput}/>
            <select onChange={handleSelect}>
                <option value="default">Default</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
            </select>
            <button onClick={handleAdd}>Add task</button>

            <div className="parent">
                {
                    data.map((ele,id) => {
                        return (
                          <div key={id} className="child">
                                <h1>Task: {ele.task}</h1>
                                <h2>Status: {ele.status}</h2>
                                <button onClick={()=>handleTask(id)}>Delete task</button>
                          </div>
                        );
                    })
                }
            </div>
        </>
    )
}