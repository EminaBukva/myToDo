import { useState } from "react";
import  ListItem  from "./ListItem.jsx";


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

   function deleteItem(id) {
     console.log("delete Item" +id);
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
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
           {items.map( (item,index) => {
              return(<ListItem 
                      value={item.value}
                      key={index}
                      id={index}
                      strikethorugh={item.strikethorugh}
                      onEminaClick={deleteItem}
                      ></ListItem>);
           }
            )}     
        </ul>
      </div>
      
      </div>);
 }

 export default Input;

