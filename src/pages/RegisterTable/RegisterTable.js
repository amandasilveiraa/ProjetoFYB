import HeaderMain from "../../components/HeaderMain/HeaderMain";
import Table from "../../components/Table/Table";
import { ContainerBackTable, ContainerTable } from "./styled";

function RegisterTable() {
  return (
    <>
      <HeaderMain />
      <ContainerBackTable>
        <ContainerTable>
          <Table />
        </ContainerTable>
      </ContainerBackTable>
    </>
  );
};

export default RegisterTable;