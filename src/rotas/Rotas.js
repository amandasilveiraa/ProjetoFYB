import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Start from "../pages/Start/Start"
import Error from "../pages/Error/Error"

 

function Rotas() {

    return (

        <BrowserRouter>

            <Routes>

                <Route index element={<Start/>}/>

                <Route path="login" element={<Login/>}/>

                <Route path="register" element={<Register/>}/>

                <Route path="error" element={<Error/>}/>

            </Routes>

        </BrowserRouter>

    )

}

 

export default Rotas