import { BarChartOutlined, SearchOutlined } from "@ant-design/icons";
import type { DatePickerProps } from "antd";
import {
  Button,
  Card,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Layout,
  Select,
  Space,
  Table,
} from "antd";
import Title from "antd/es/skeleton/Title";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { title } from "process";

const gridStyle: React.CSSProperties = {
  width: "50%",
  textAlign: "center",
};

export function Conciliacao() {
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

  function mostrardivoperadora() {
    let element = document.getElementById("showOperatorFilter");
    if (element?.style.display == "none") {
      console.log("estou aqui");
      element.style.display = "block";
    } else if (element?.style.display == "block") {
      console.log("alou aqui");
      element.style.display = "none";
    }
  }
  function mostrardiverp() {
    let element = document.getElementById("showErpFilter");
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
          <Card.Grid style={gridStyle} hoverable={false}>
            <Card
              title={"OPERADORA"}
              extra={
                <Button
                  onClick={mostrardivoperadora}
                  id="show-btn"
                  type="primary"
                  icon={<BarChartOutlined />}
                  size={"large"}
                />
              }
              style={{ fontFamily: "arial", maxWidth: "100%" }}
            >
              <div
                className="showOperatorFilter"
                id="showOperatorFilter"
                style={{ display: "none" }}
              >
                <Table
                  style={{ margin: "10px", maxWidth: "100%" }}
                  pagination={false}
                  dataSource={data}
                >
                  <Column
                    title="DATA INICIAL"
                    dataIndex="DATA_INICIAL"
                    key="DATA_INICIAL"
                    render={(_: any, record: DataType) => (
                      <Space size="small">
                        <DatePicker onChange={onChangeDate} />
                      </Space>
                    )}
                  />
                  <Column
                    title="DATA FINAL"
                    dataIndex="DATA_FINAL"
                    key="DATA_FINAL"
                    render={(_: any, record: DataType) => (
                      <Space size="small">
                        <DatePicker onChange={onChangeDate} />
                      </Space>
                    )}
                  />
                  <Column
                    dataIndex="PENDENTE"
                    key="PENDENTE"
                    render={(_: any, record: DataType) => (
                      <Space size="small">
                        <Checkbox onChange={onChange}>PENDENTE</Checkbox>
                      </Space>
                    )}
                  />
                  <Column
                    dataIndex="SEARCH_BUTTON"
                    key="SEARCH_BUTTON"
                    render={(_: any, record: DataType) => (
                      <Space size="small">
                        <Button
                          type="primary"
                          icon={<SearchOutlined />}
                          size={"small"}
                        />
                      </Space>
                    )}
                  />
                </Table>

                <Table
                  style={{ margin: "10px", maxWidth: "100%" }}
                  pagination={false}
                  dataSource={data}
                >
                  <Column
                    title="FILIAL"
                    dataIndex="FILIAL"
                    key="FILIAL"
                    render={(_: any, record: DataType) => (
                      <Space size="small">
                        <Select
                          defaultValue="Selecione"
                          style={{
                            maxWidth: 120,
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
                      <Space size="small">
                        <Select
                          defaultValue="Selecione"
                          style={{
                            maxWidth: 120,
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
                    title="BANDEIRA"
                    dataIndex="BANDEIRA"
                    key="BANDEIRA"
                    render={(_: any, record: DataType) => (
                      <Space size="small">
                        <Select
                          defaultValue="Selecione"
                          style={{
                            maxWidth: 120,
                          }}
                          onChange={handleChange}
                          options={[
                            {
                              value: "NAO_BAIXADOS",
                              label: "N??O BAIXADOS",
                            },
                            {
                              value: "BAIXADOS",
                              label: "BAIXADOS",
                            },
                            {
                              value: "APTOS",
                              label: "APTOS",
                            },
                            {
                              value: "NAO_CONCILIADOS",
                              label: "N??O CONCILIADOS",
                            },
                          ]}
                        />
                      </Space>
                    )}
                  />
                  <Column
                    title="CONTRATOS"
                    dataIndex="CONTRATOS"
                    key="CONTRATOS"
                    render={(_: any, record: DataType) => (
                      <Space size="small">
                        <Select
                          defaultValue="Selecione"
                          style={{
                            maxWidth: 120,
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

                <Table
                  showHeader={false}
                  style={{ margin: "10px", maxWidth: "100%" }}
                  pagination={false}
                  dataSource={data}
                >
                  <Column
                    title=""
                    dataIndex=""
                    key=""
                    render={(_: any, record: DataType) => (
                      <Space size="small">
                        <InputNumber prefix="R$" style={{ maxWidth: "100%" }} />{" "}
                        <span></span>
                        <Button
                          type="primary"
                          shape="round"
                          icon={"CONCILIAR"}
                          size="large"
                          style={{ maxWidth: 150 }}
                        />
                      </Space>
                    )}
                  />
                </Table>
                <br></br>
                <Card style={{ maxWidth: "100%" }}>
                  <Table
                    showHeader={false}
                    style={{ margin: "10px" }}
                    pagination={false}
                    dataSource={data}
                  >
                    <Column
                      dataIndex="SEARCH_BAR"
                      key="SEARCH_BAR"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Search
                            placeholder="Pesquisar"
                            onSearch={onSearch}
                            style={{ maxWidth: 200 }}
                          />
                        </Space>
                      )}
                    />
                  </Table>
                  <br></br>
                  <Table style={{ width: "100%", margin: "10px" }}>
                    <Column
                      title="NOME"
                      dataIndex="NOME"
                      key="NOME"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                    <Column
                      title="FILIAL"
                      dataIndex="FILIAL"
                      key="FILIAL"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                    <Column
                      title="VENDA"
                      dataIndex="VENDA"
                      key="VENDA"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                    <Column
                      title="OPE"
                      dataIndex="OPE"
                      key="OPE"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                    <Column
                      title="NSU"
                      dataIndex="NSU"
                      key="NSU"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                    <Column
                      title="AUTOR"
                      dataIndex="AUTOR"
                      key="AUTOR"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                    <Column
                      title="PRC"
                      dataIndex="PRC"
                      key="PRC"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                    <Column
                      title="VALOR"
                      dataIndex="VALOR"
                      key="VALOR"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                  </Table>
                </Card>
              </div>
            </Card>
          </Card.Grid>

          <Card.Grid style={gridStyle} hoverable={false}>
            <Card
              title={"ERP"}
              extra={
                <Button
                  onClick={mostrardiverp}
                  type="primary"
                  icon={<BarChartOutlined />}
                  size={"large"}
                />
              }
              style={{ fontFamily: "arial", width: "100%" }}
            >
              <div
                className="showErpFilter"
                id="showErpFilter"
                style={{ display: "none" }}
              >
                <Table
                  style={{ margin: "10px", maxWidth: "100%" }}
                  pagination={false}
                  dataSource={data}
                >
                  <Column
                    title="DATA INICIAL"
                    dataIndex="DATA_INICIAL"
                    key="DATA_INICIAL"
                    render={(_: any, record: DataType) => (
                      <Space size="small">
                        <DatePicker onChange={onChangeDate} />
                      </Space>
                    )}
                  />

                  <Column
                    title="DATA FINAL"
                    dataIndex="DATA_FINAL"
                    key="DATA_FINAL"
                    render={(_: any, record: DataType) => (
                      <Space size="small">
                        <DatePicker onChange={onChangeDate} />
                      </Space>
                    )}
                  />

                  <Column
                    dataIndex="SEARCH_BUTTON"
                    key="SEARCH_BUTTON"
                    render={(_: any, record: DataType) => (
                      <Space size="small">
                        <Button
                          type="primary"
                          icon={<SearchOutlined />}
                          size={"small"}
                        />
                      </Space>
                    )}
                  />
                </Table>

                <Table
                  style={{ margin: "10px", maxWidth: "100%" }}
                  pagination={false}
                  dataSource={data}
                >
                  <Column
                    title="FILIAL"
                    dataIndex="FILIAL"
                    key="FILIAL"
                    render={(_: any, record: DataType) => (
                      <Space size="small">
                        <Select
                          defaultValue="Selecione"
                          style={{
                            maxWidth: 120,
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
                    title="BANDEIRA"
                    dataIndex="BANDEIRA"
                    key="BANDEIRA"
                    render={(_: any, record: DataType) => (
                      <Space size="small">
                        <Select
                          defaultValue="Selecione"
                          style={{
                            maxWidth: 120,
                          }}
                          onChange={handleChange}
                          options={[
                            {
                              value: "NAO_BAIXADOS",
                              label: "N??O BAIXADOS",
                            },
                            {
                              value: "BAIXADOS",
                              label: "BAIXADOS",
                            },
                            {
                              value: "APTOS",
                              label: "APTOS",
                            },
                            {
                              value: "NAO_CONCILIADOS",
                              label: "N??O CONCILIADOS",
                            },
                          ]}
                        />
                      </Space>
                    )}
                  />
                </Table>

                <Table
                  showHeader={false}
                  style={{ margin: "10px", maxWidth: "100%" }}
                  pagination={false}
                  dataSource={data}
                >
                  <Column
                    title=""
                    dataIndex=""
                    key=""
                    render={(_: any, record: DataType) => (
                      <Space size="small">
                        <InputNumber prefix="R$" style={{ maxWidth: "100%" }} />{" "}
                        <span></span>
                        <Button
                          type="primary"
                          shape="round"
                          icon={"CONCILIAR"}
                          size="large"
                          style={{ maxWidth: 150 }}
                        />
                      </Space>
                    )}
                  />
                </Table>
                <br></br>
                <Card style={{ maxWidth: "100%" }}>
                  <Table
                    showHeader={false}
                    style={{ margin: "10px" }}
                    pagination={false}
                    dataSource={data}
                  >
                    <Column
                      dataIndex="SEARCH_BAR"
                      key="SEARCH_BAR"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Search
                            placeholder="Pesquisar"
                            onSearch={onSearch}
                            style={{ width: 200 }}
                          />
                        </Space>
                      )}
                    />
                  </Table>
                  <br></br>
                  <Table style={{ width: "100%", margin: "10px" }}>
                    <Column
                      title="NOME"
                      dataIndex="NOME"
                      key="NOME"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                    <Column
                      title="FILIAL"
                      dataIndex="FILIAL"
                      key="FILIAL"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                    <Column
                      title="VENDA"
                      dataIndex="VENDA"
                      key="VENDA"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                    <Column
                      title="OPE"
                      dataIndex="OPE"
                      key="OPE"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                    <Column
                      title="NSU"
                      dataIndex="NSU"
                      key="NSU"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                    <Column
                      title="AUTOR"
                      dataIndex="AUTOR"
                      key="AUTOR"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                    <Column
                      title="PRC"
                      dataIndex="PRC"
                      key="PRC"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                    <Column
                      title="VALOR"
                      dataIndex="VALOR"
                      key="VALOR"
                      render={(_: any, record: DataType) => (
                        <Space size="small">
                          <Input bordered={false} placeholder="" />
                        </Space>
                      )}
                    />
                  </Table>
                </Card>
              </div>
            </Card>
          </Card.Grid>
        </Card>
      </article>
    </Content>
  );
}
