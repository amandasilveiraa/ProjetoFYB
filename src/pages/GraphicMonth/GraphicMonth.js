import HeaderMain from "../../components/HeaderMain/HeaderMain";
import seta from "../../assets/expandImg.svg"
import { ContainerBackGraphic, ContainerGraphic, ContainerTitle, CustomTitle, SetaButton, SetaImg } from "./styled";
import ChartMonth from "../../components/ChartMonth/ChartMonth";


function GraphicMonth() {
    return (
        <>
            <HeaderMain />
            <ContainerBackGraphic>
                <ContainerGraphic>
                    <ContainerTitle>
                        <CustomTitle>LOTAÇÃO MENSAL</CustomTitle>
                        <SetaButton>
                            <SetaImg src={seta} alt="Botão de seta" />
                        </SetaButton>
                    </ContainerTitle>
                    <ChartMonth />
                </ContainerGraphic>
            </ContainerBackGraphic>
        </>
    );
};

export default GraphicMonth;