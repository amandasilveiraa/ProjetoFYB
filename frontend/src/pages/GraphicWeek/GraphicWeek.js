import ChartWeek from "../../components/ChartWeek/ChartWeek";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import seta from "../../assets/expandImg.svg"
import { ContainerBackGraphic, ContainerGraphic, ContainerTitle, CustomTitle, SetaButton, SetaImg } from "./styled";
import { Link } from "react-router-dom";


function GraphicWeek() {
    return (
        <>
            <HeaderMain />
            <ContainerBackGraphic>
                <ContainerGraphic>
                    <ContainerTitle>
                        <CustomTitle>LOTAÇÃO SEMANAL</CustomTitle>
                        <SetaButton>
                            <Link to='/graphicMonth'><SetaImg src={seta} alt="Botão de seta" /></Link>
                        </SetaButton>
                    </ContainerTitle>
                    <ChartWeek />
                </ContainerGraphic>
            </ContainerBackGraphic>
        </>
    );
};

export default GraphicWeek;