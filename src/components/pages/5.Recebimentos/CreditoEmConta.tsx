import logo from "@assets/img/praticoLogo.png";
import type { DatePickerProps } from "antd";
import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Input,
  Layout,
  Radio,
  Select,
  Space,
  Table,
} from "antd";

import type { CheckboxChangeEvent } from "antd/lib/checkbox";

export function CreditoEmConta() {
  const { Content } = Layout;

  const { Search } = Input;

  const { Column } = Table;

  const onSearch = (value: string) => console.log(value);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  interface DataType {
    key: React.Key;
    OPERADORA: string;
    STATUS: string;
    CONFIG_BAIXAS: number;
    INCLUSAO_DE_AJUSTES: string;
    EMPRESA: string[];
  }

  const data: DataType[] = [
    {
      key: "1",
      OPERADORA: "",
      STATUS: "",
      CONFIG_BAIXAS: 32,
      INCLUSAO_DE_AJUSTES: "",
      EMPRESA: ["nice", "developer"],
    },
  ];

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  function mostrardiv() {
    let element = document.getElementById("showCreditoEmConta");
    if (element?.style.display == "none") {
      console.log("estou aqui");
      element.style.display = "block";
    } else if (element?.style.display == "block") {
      console.log("alou aqui");
      element.style.display = "none";
    }
  }
  return (
    <Content
      className="site-layout-background"
      style={{
        backgroundColor: "#EFF2F5",
      }}
    >
      <article>
        <Card
          style={{
            backgroundColor: "#f0f5ff",
            margin: "20px 24px 0",
            overflow: "initial",
          }}
        >
          <div style={{ margin: "20px  0" }}>
            <Table pagination={false} dataSource={data}>
              <Column
                title="DATA INICIAL"
                dataIndex="DATA_INICIAL"
                key="DATA_INICIAL"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <DatePicker onChange={onChangeDate} />
                  </Space>
                )}
              />
              <Column
                title="DATA FINAL"
                dataIndex="DATA_FINAL"
                key="DATA_FINAL"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <DatePicker onChange={onChangeDate} />
                  </Space>
                )}
              />
              <Column
                title="CONTAS"
                dataIndex="CONTAS"
                key="CONTAS"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 250,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "null",
                          label: "Null",
                        },
                      ]}
                    />
                  </Space>
                )}
              />
              <Column
                title="OPERADORA"
                dataIndex="OPERADORA"
                key="OPERADORA"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 250,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "null",
                          label: "Null",
                        },
                      ]}
                    />
                  </Space>
                )}
              />
              <Column
                title="CONTRATO "
                dataIndex="CONTRATO"
                key="CONTRATO"
                render={(_: any, record: DataType) => (
                  <Space size="large">
                    <Select
                      defaultValue="Selecione"
                      style={{
                        width: 250,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "null",
                          label: "Null",
                        },
                      ]}
                    />
                  </Space>
                )}
              />
            </Table>
            {/*QUANDO CLICAR EM FILTRAR, MOSTRAR "AGRUPAR POR:"*/}
            <Table pagination={false} dataSource={data}>
              <Column
                title="AGRUPAR POR:"
                dataIndex="AGRUPAR_POR"
                key="AGRUPAR_POR"
                render={(_: any, record: DataType) => (
                  <Space size="middle">
                    <Checkbox onChange={onChange}>DATA</Checkbox>
                    <Checkbox onChange={onChange}>OPERADORA</Checkbox>
                    <Checkbox onChange={onChange}>NOME FANTASIA</Checkbox>
                    <Checkbox onChange={onChange}>CONTRATO</Checkbox>
                    <Checkbox onChange={onChange}>BANDEIRA</Checkbox>
                    <Checkbox onChange={onChange}>NR. CONTA</Checkbox>
                    <Checkbox onChange={onChange}>NR. BANCO</Checkbox>
                    <Checkbox onChange={onChange}>AG??NCIA</Checkbox>
                    <br></br>
                    <Button
                      onClick={mostrardiv}
                      id="show-btn"
                      type="primary"
                      icon={"Filtrar"}
                      size="large"
                      style={{ width: 100 }}
                    />
                    <br></br>
                    <br></br>
                  </Space>
                )}
              />
            </Table>
            <div
              className="showCreditoEmConta"
              id="showCreditoEmConta"
              style={{ display: "none" }}
            >
              <Table pagination={false} dataSource={data}>
                <Column
                  title="FORMATO DE EXIBI????O:"
                  dataIndex="FORMATO_DE_EXIBI????O"
                  key="FORMATO_DE_EXIBI????O"
                  render={(_: any, record: DataType) => (
                    <Space size="middle">
                      <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="a">DETALHADO</Radio.Button>
                        <Radio.Button value="b">SIMPLES</Radio.Button>
                      </Radio.Group>
                    </Space>
                  )}
                />
              </Table>
              <br></br>
              <Search
                placeholder="Pesquisar"
                onSearch={onSearch}
                style={{ width: 200 }}
              />
              <br></br>
              <br></br>

              {/*QUANDO SELECIONADO O MODO "SIMPLES" DE EXIBI????O, APENAS MOSTRAR AS OP????ES SELECIONADAS PELO USUARIO + O VALOR DO MESMO, CASO SEJA SELECIONADA A OP????O "DETALHADO" MOSTRAR TODOS OS VALORES DENTRO DA TABELA.*/}
              <Table dataSource={data}>
                <Column
                  title="DATA"
                  dataIndex="DATA"
                  key="DATA"
                  render={(_: any, record: DataType) => (
                    <Space size="middle">
                      <Input bordered={false} placeholder="" />
                    </Space>
                  )}
                />
                <Column
                  title="OPERADORA"
                  dataIndex="OPERADORA"
                  key="OPERADORA"
                  render={(_: any, record: DataType) => (
                    <Space size="large">
                      <Input bordered={false} placeholder="" />
                    </Space>
                  )}
                />
                <Column
                  title="NOME FANTASIA"
                  dataIndex="NOME_FANTASIA"
                  key="NOME_FANTASIA"
                  render={(_: any, record: DataType) => (
                    <Space size="large">
                      <Input bordered={false} placeholder="" />
                    </Space>
                  )}
                />
                <Column
                  title="CONTRATO"
                  dataIndex="CONTRATO"
                  key="CONTRATO"
                  render={(_: any, record: DataType) => (
                    <Space size="large">
                      <Input bordered={false} placeholder="" />
                    </Space>
                  )}
                />
                <Column
                  title="BANDEIRA"
                  dataIndex="BANDEIRA"
                  key="BANDEIRA"
                  render={(_: any, record: DataType) => (
                    <Space size="large">
                      <Input bordered={false} placeholder="" />
                    </Space>
                  )}
                />
                <Column
                  title="NR. CONTA"
                  dataIndex="NR_CONTA"
                  key="NR_CONTA"
                  render={(_: any, record: DataType) => (
                    <Space size="large">
                      <Input bordered={false} placeholder="" />
                    </Space>
                  )}
                />
                <Column
                  title="NR. BANCO"
                  dataIndex="NR_BANCO"
                  key="NR_BANCO"
                  render={(_: any, record: DataType) => (
                    <Space size="large">
                      <Input bordered={false} placeholder="" />
                    </Space>
                  )}
                />
                <Column
                  title="AG??NCIA"
                  dataIndex="AGENCIA"
                  key="AGENCIA"
                  render={(_: any, record: DataType) => (
                    <Space size="large">
                      <Input bordered={false} placeholder="" />
                    </Space>
                  )}
                />
                <Column
                  title="VALOR CONTA"
                  dataIndex="VALOR_CONTA"
                  key="VALOR_CONTA"
                  render={(_: any, record: DataType) => (
                    <Space size="large">
                      <Input bordered={false} placeholder="" />
                    </Space>
                  )}
                />
              </Table>
            </div>
          </div>
        </Card>
      </article>
    </Content>
  );
}
