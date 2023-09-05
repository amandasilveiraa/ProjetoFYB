import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Start from "../pages/Start/Start"

 

function Rotas() {

    return (

        <BrowserRouter>

            <Routes>

                <Route index element={<Start/>}/>

                <Route path="Login" element={<Login/>}/>

                <Route path="Register" element={<Register/>}/>

                <Route path="*" element={<Erro/>}/>

            </Routes>

        </BrowserRouter>

    )

}

 

export default Rotas