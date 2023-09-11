import HeaderMain from "../../components/HeaderMain/HeaderMain";
import seta from "../../assets/expandImg.svg"
import { ContainerBackGraphic, ContainerGraphic, ContainerTitle, CustomTitle, SetaButton, SetaImg } from "./styled";
import ChartMonth from "../../components/ChartMonth/ChartMonth";
import { Link } from "react-router-dom";


function GraphicMonth() {
    return (
        <>
            <HeaderMain />
            <ContainerBackGraphic>
                <ContainerGraphic>
                    <ContainerTitle>
                        <CustomTitle>LOTAÇÃO MENSAL</CustomTitle>
                        <SetaButton>
                            <Link to='/graphicWeek'><SetaImg src={seta} alt="Botão de seta"/></Link>
                        </SetaButton>
                    </ContainerTitle>
                    <ChartMonth />
                </ContainerGraphic>
            </ContainerBackGraphic>
        </>
    );
};

export default GraphicMonth;