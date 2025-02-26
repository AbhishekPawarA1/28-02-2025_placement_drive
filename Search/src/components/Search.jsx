import { useEffect, useState } from "react";
import axios from "axios"
import "../css/Search.css"
export function Search() {
    let api = "https://jsonplaceholder.typicode.com/comments";
    let [data, setData] = useState([])
    let [input, setInput] = useState("")
    let [select,setSelect]=useState("default")
    async function fetchApi() {
        let res = await axios.get(api)
        setData(res.data)
        console.log(res.data)
    }
    function handleInput(event) {
        setInput(event.target.value)
        console.log(event.target.value)
    }
    function handleSelect(event) {
        setSelect(event.target.value)
    }
    function handleSearch() {
        if (select == "default") {
            setData([...data])
        }
        else if (select == "asc") {
            let ascsort=data.sort((a,b) => {
                return  a.name-b.name
            })
            setData(ascsort)
        }
        else {
            let ascsort = data.sort((a, b) => {
              return b.name - a.name;
            });
            setData(ascsort);
        }
        let filterdata = data.filter((ele) => {
           return ele.name.toLowerCase().includes(input.toLowerCase())
        })
        setData(filterdata)
    }

    

    useEffect(() => {
        fetchApi()
    },[])
    return (
        <>
            <input type="text" placeholder="Enter Name" value={input} onChange={handleInput} />
            <select value={select} onChange={handleSelect}>
                <option value="default">Default</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <button onClick={handleSearch}>Search User</button>
        <div className="parent">
        {
            data.map((ele,id) => {
                return (
                    <div className="child" key={id}>
                    <p>
                        Name: <b>{ele.name}</b>
                    </p>
                    <p>
                        Email: <b>{ele.email}</b>
                    </p>
                    <p>
                        Body: <b>{ele.body}</b>
                    </p>
                    </div>
                );
            })
        }
        </div>
        </>
    )
}