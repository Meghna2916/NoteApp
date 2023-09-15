import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote =(props)=>{
const[expand, setExpand]=useState(false);
const [note,setNote]=useState({
    title:"",
    content:"",
});

const inputEvent =(event)=>{

    const{name, value}= event.target;

    setNote((prevData)=>{
        return{
            ...prevData,
            [name]: value,
        }
    });
    console.log(note);
};

const addEvent =()=>{
props.passNote(note);
setNote({
    title:"",
    content:"",
}); 
}

const expandIt =()=>{
setExpand(true);
}

const backIt =()=>{
    setExpand(false);
    }


    return(
        <>
        <div className='main_note' onDoubleClick={backIt}>
            <form>
                {expand?
                <input type='text' name='title' value={note.title} onChange={inputEvent} placeholder="Title" />
                :null}

                <textarea rows='' column='' name='content' value={note.content} onChange={inputEvent} placeholder="Write a note..."
                onClick={expandIt}>

                </textarea>

               { expand?
                <Button onClick={addEvent}>
                    <AddIcon className='plus_sign'/>
                </Button>:null}

            </form>

        </div>
        </>
    )
}
export default CreateNote ;