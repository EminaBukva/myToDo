function CreateListItem(item)
{
 return(<ListItem 
 value={item.value}
 key={item.key}
 />);
}

function ListItem (props)
{
   const value=props.value;
  
    return(
          <li>{value}</li>
      );
}
export default ListItem;
export {CreateListItem};
