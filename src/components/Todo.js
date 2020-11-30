import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from '@material-ui/icons/Edit';
import { Button, TextField } from "@material-ui/core";
import React,{useState} from "react";

function Todo({ todo, toggleComplete, removeTodo, editTodo }) {
  const [enableEdit, setEnableEdit] = useState(false);
  const [newTask,setTask] = useState({task:""})

  function handleEditClick(){
    setEnableEdit(true);
  }

  function handleTaskEdit(e){
    setTask({task:e.target.value}) 
    
  }
  
  function submit(){
    editTodo(todo.id,newTask.task)
    setEnableEdit(false);
  }

  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <>
    {enableEdit ? (
      <>
      <TextField
        label="Task"
        type="text"
        name="task"
        onChange={handleTaskEdit}
      />
      <Button onClick={submit}>Do</Button>

      </>
    ):(
      <>
      <ListItem style={{ display: "flex" }}>
      <Checkbox checked={todo.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo.completed ? "line-through" : null
        }}
      >
        {todo.task}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
      <IconButton onClick={handleEditClick}>
        <EditIcon />
      </IconButton>
    </ListItem>
      </>
    )}
    </>
  );
}

export default Todo;
