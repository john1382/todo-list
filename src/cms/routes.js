import Home from "./components/Home"
import Users from "./components/Users"
import NewUsers from "./components/NewUsers"
import Products from "./Products"

let routes = [
  {path:'/',element:<Home/>},
  {path:'/users',element:<Users/>},
  {path:'/newUsers',element:<NewUsers/>},
  {path:'/products',element:<Products/>}
]

export default routes