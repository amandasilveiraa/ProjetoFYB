import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Start from "../pages/Start/Start"
import Error from "../pages/Error/Error"
import GraphicMonth from "../pages/GraphicMonth/GraphicMonth"
import GraphicWeek from "../pages/GraphicWeek/GraphicWeek"
import MedicalRecord from "../pages/MedicalRecord/MedicalRecord"
import RegisterTable from "../pages/RegisterTable/RegisterTable"
import HistoricTable from "../pages/HistoricTable/HistoricTable"

 

function Rotas() {

    return (

        <BrowserRouter>

            <Routes>

                <Route index element={<Start />} />

                <Route path="login" element={<Login />} />

                <Route path="register" element={<Register />} />
                
                <Route path="graphicMonth" element={<GraphicMonth />} />

                <Route path="/graphicWeek" element={<GraphicWeek />} />

                <Route path="medicalRecord" element={<MedicalRecord />} />

                <Route path="registerTable" element={<RegisterTable />} />

                <Route path="historicTable" element={<HistoricTable />} />

                <Route path="sair" element={<Start />} />

                <Route path="error" element={<Error />} />

            </Routes>

        </BrowserRouter>

    );

};

export default Rotas;