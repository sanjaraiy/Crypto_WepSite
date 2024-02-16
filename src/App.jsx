import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Dashboard from "./Pages/Dashboard/Dashboard"
import TransactionPage from "./Pages/Transaction/Transaction"
import Support from "./Pages/Support/Support"

const router=createBrowserRouter([
  {
    path:'/',
    element:<Dashboard></Dashboard>
  },
  {
    path:"/transactions",
    element:<TransactionPage></TransactionPage>
  },
  {
    path:"/support",
    element:<Support></Support>
  }
])
function App() {


  return (
    <> 
       <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
