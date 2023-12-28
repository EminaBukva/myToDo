import { useState } from "react";
import { CreateListItem } from "./ListItem.jsx";


 function Input ()
 {
  const [taskText, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleSubmit(event)
  {
    //event.preventDefault();
    console.log("Submit");
    console.log(taskText);
    setItems(prevItems => {
      return [...prevItems, {value:taskText}];
    });
    setText("");
  }

  function handleChange(e)
  {
    console.log("Change");
    const value=e.target.value;
    setText(value);
    console.log(taskText);
  }

 return(<div className="form">
  
        <input 
        onChange = {handleChange}
        type="text"
        value={taskText}
        />
          <button onClick={handleSubmit}>
            <span>Add</span>
          </button>
        <div>
        <ul>
           {items.map(CreateListItem)}     
        </ul>
      </div>
      
      </div>);
 }

 export default Input;

