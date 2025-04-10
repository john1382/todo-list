import {React,useEffect}  from 'react'

export default function  Todo(props) {
    useEffect(()=>{
        console.log('todo mount')
        return ()=>{
            console.log('todo unmount')
        }
    },[])

    useEffect(()=>{
        console.log('todo update')
    })
    
    const  completed =()=>{
        let id = props.id
        props.onComplete(id)
    }
    const  Delete=()=>{
        let id = props.id
        props.onDelete(id)
    }

        
    return (
        <div className='todo' style={{ display: 'flex' }}>
            
            {props.completed ? (
                <li className="todo-item completed">{props.todoTitle}</li>
            ) : (
                <li className="todo-item">{props.todoTitle}</li>
            )}

            <button className="check-btn" onClick={()=>{completed()}}>
                <i className="fas fa-check" aria-hidden="true"></i>
            </button>

            <button className="trash-btn" onClick={()=>{Delete()}} >
                <i className="fas fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    )
}