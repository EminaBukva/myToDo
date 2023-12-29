import {useState} from "react";


function ListItem (props)
{
  const [td, setTd] = useState("");
      
   const value=props.value;
    return(

          <li 
          onClick={
            ()=> {
          props.onEminaClick(props.id);
            }
            }
          style={{textDecoration: td}}>{value}</li>
      );
}
export default ListItem;

