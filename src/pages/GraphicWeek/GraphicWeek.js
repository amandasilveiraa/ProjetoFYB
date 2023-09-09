import ChartWeek from "../../components/ChartWeek/ChartWeek";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import seta from "../../assets/expandImg.svg"
import { ContainerBackGraphic, ContainerGraphic, ContainerTitle, CustomTitle, SetaButton, SetaImg } from "./styled";


function GraphicWeek() {
    return (
        <>
            <HeaderMain />
            <ContainerBackGraphic>
                <ContainerGraphic>
                    <ContainerTitle>
                        <CustomTitle>LOTAÇÃO SEMANAL</CustomTitle>
                        <SetaButton>
                            <SetaImg src={seta} alt="Botão de seta" />
                        </SetaButton>
                    </ContainerTitle>
                    <ChartWeek />
                </ContainerGraphic>
            </ContainerBackGraphic>
        </>
    );
};

export default GraphicWeek;