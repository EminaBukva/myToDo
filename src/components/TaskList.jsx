import tasks1 from "../tasks.js"
import ListItem from "./ListItem.jsx";
import { CreateListItem } from "./ListItem.jsx";


function TaskList ()
{
    return(<div>
        <ul>
           {tasks1.map(CreateListItem)}     
        </ul>
      </div>);
      }

export default TaskList;