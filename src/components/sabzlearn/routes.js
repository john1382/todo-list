import Courses from "./Courses"
import Product from "./Product"
import About from "./About"
import Panel from "./Panel"
import Setting from './Setting'
import PrivateRoutes from "./PrivateRoutes"


let routes = [
   {path:'/courses', element:<Courses/>},
 {path:'/courses/:courseID', element:<Product/>},
{path:'/about-us/*', element:<About/>,children:[
   {path:"dashboard",element:<p style={{textAlign:'center'}}>dashboard</p>},
   { path:"setting", element:<p style={{textAlign:'center'}}>setting</p>}
]
},
{path:'/*', element:<PrivateRoutes/>,children:[
   {path:'panel', element:<Panel/>},
   {path:'setting', element:<Setting/>},
]}
]

export default routes