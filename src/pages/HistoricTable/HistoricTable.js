import HeaderMain from "../../components/HeaderMain/HeaderMain";
import TableHistoric from "../../components/TableHistoric/TableHistoric";
import { ContainerBackTable, ContainerTable, TitleCustom } from "./styled";

function HistoricTable() {
  return (
    <>
      <HeaderMain />
      <ContainerBackTable>
        <TitleCustom>Histórico</TitleCustom>
        <ContainerTable>
          <TableHistoric />
        </ContainerTable>
      </ContainerBackTable>
    </>
  );
};

export default HistoricTable;