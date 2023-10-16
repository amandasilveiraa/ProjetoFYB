import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Table from "../../components/Table/Table";
import { ContainerBackTable, ContainerTable, TitleCustom } from "./styled";

function RegisterTable() {
  return (
    <>
      <HeaderMain />
      <ContainerBackTable>
        <TitleCustom>Registro dos pacientes</TitleCustom>
        <ContainerTable>
          <Table />
        </ContainerTable>
      </ContainerBackTable>
    </>
  );
};

export default RegisterTable;