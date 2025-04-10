import React, { useState,useEffect } from 'react'
import Header from './Header'
import Todo from './Todo'

export default function TodoList () {

    const [todos, setTodos] = useState([])
    const [todoTitle, setTodoTitle] = useState('')
    const [status, setStatus] = useState('all') 
    
    useEffect(()=>{
        console.log('todolist mount')
    },[])

    useEffect(()=>{
        console.log('todolist update')
    })



    
    const titleHandler =(event)=>{
        setTodoTitle(event.target.value)
    }
    const addTodo =()=>{
        let obj = {completed : false,
            id : todos.length + 1 ,
            todoTitle
        }
        if(todoTitle){
            setTodos(prevState =>{
                console.log([...prevState])
                return [...prevState,obj]
            })
            setTodoTitle('')
            }
        }
     const submitHandler =(event)=>{
        event.preventDefault()
    }
     const complete=(id)=>{
        let oldTodos = [...todos]
        let i = todos.findIndex(index=>{
            return index.id === id
        })
        if(oldTodos[i].completed){
            oldTodos[i].completed = false
            setTodos(oldTodos)
        }else{
            oldTodos[i].completed = true
            setTodos(oldTodos)
        }
    }
    const Delete=(id)=>{
        let oldTodos = [...todos]
        let i = todos.findIndex(index=>{
            return index.id === id
        })
        oldTodos.splice(i,1)
        setTodos(oldTodos)
    }
    const statusHandler=(event)=>{
        setStatus(event.target.value)
    }
    

    return (
        <>
            <Header />
            <form onSubmit={(event)=>{submitHandler(event)}}>
                <input type="text" className="todo-input" maxLength="40" value={todoTitle} onChange={(event)=>{titleHandler(event)}}/>
                <button className="todo-button" type="submit" onClick={()=>{addTodo()}} >
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onClick={(event)=>{statusHandler(event)}}>
                        <option value="all" >All</option>
                        <option value="completed" >Completed</option>
                        <option value="uncompleted" >Uncompleted</option>
                    </select>
                </div>
            </form>

            <div className="todo-container">
                <ul className="todo-list">

                    {status === 'all' && todos.map((todo)=>(
                        <Todo {...todo} onDelete={Delete} onComplete={complete} key={todo.id} />
                    ))}

                    {status === 'completed' && todos.filter(todo => todo.completed).map((todo)=>(
                        <Todo {...todo} onDelete={Delete} onComplete={complete} key={todo.id} />
                    ))}

                    {status === 'uncompleted' && todos.filter(todo => !(todo.completed)).map((todo)=>(
                        <Todo {...todo} onDelete={Delete} onComplete={complete} key={todo.id} />
                    ))}

                        
                </ul>
            </div>
        </>
    )
}
