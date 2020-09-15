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

  const children = [];
  for (let i = 0; i < 240; i = i + 5) {
    children.push(<Option key={i}>{i + "min"}</Option>);
  }

  const children1 = [];
  for (let i = 0; i < 10; i++) {
    children1.push(<Option key={i}>{i}</Option>);
  }

  function handleChangeselect(value) {
    console.log(`selected ${value}`);
  }

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
        <Col span={4}>
          <p>high band</p>
        </Col>
        <Col span={8}>
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

      <Row>
        <Col span={4}>
          <p>low band</p>
        </Col>
        <Col span={8}>
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
      <Row>
        <Col span={4}>
          <p>other band</p>
        </Col>
        <Col span={8}>
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
      <Select
        mode="multiple"
        allowClear
        style={{ width: "100%" }}
        placeholder="Please select"
        defaultValue={["5min", "10min"]}
        onChange={handleChangeselect}
      >
        {children}
      </Select>
      <Select
        mode="multiple"
        allowClear
        style={{ width: "100%" }}
        placeholder="Please select"
        defaultValue={["5", "10"]}
        onChange={handleChangeselect}
      >
        {children1}
      </Select>
    </div>
  );
}
