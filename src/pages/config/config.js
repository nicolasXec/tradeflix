import React from "react";
import { Row, Col, Divider, Checkbox, Select, Slider, InputNumber } from "antd";

const { Option } = Select;

export default function Config() {
  const [inputValue, setinputValue] = React.useState(2);

  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onChangehandler = (value) => {
    setinputValue(value);
  };
  return (
    <div>
      <Divider orientation="left">Indicator Config</Divider>
      <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
        <Row>
          <Col span={8}>
            <Checkbox value="A">Rsi</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B">Mfi</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C">Adi</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D">Donchan</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E">ichimoku cloud</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
      <Divider orientation="left">optimizer config</Divider>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Rsi</Option>
        <Option value="lucy">ichimoku</Option>
        <Option value="disabled" disabled>
          donchian
        </Option>
        <Option value="Yiminghe">mfi</Option>
      </Select>
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={onChangehandler}
            value={typeof inputValue === "number" ? inputValue : 0}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ margin: "0 16px" }}
            value={inputValue}
            onChange={onChangehandler}
          />
        </Col>
      </Row>
    </div>
  );
}
