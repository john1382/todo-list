import {React, } from 'react'
import routes from './cms/routes'
import TopBar from './cms/components/topbar/TopBar'
import {useRoutes} from 'react-router-dom'
import SideBar from './cms/components/SideBar/SideBar'
import TodoList from './components/TodoList/TodoList'
import './App.css'


export default function App () {
    let route = useRoutes(routes)
    
    return (
        <>
        <div>
            <TodoList/>
        </div>
            
        
        </>
    )
}
