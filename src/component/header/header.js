import React, { useState } from "react";
import { PageHeader, Button } from "antd";
import { AutoComplete } from "antd";

//import "./header.css";

import { BrowserRouter as Router, useHistory } from "react-router-dom";

export default function Header() {
  const { Option } = AutoComplete;

  const [result, setResult] = useState([]);

  const handleSearch = (value) => {
    let res = [];

    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "163.com", "qq.com"].map(
        (domain) => `${value}@${domain}`
      );
    }

    setResult(res);
  };

  let history = useHistory();
  const buttons = (
    <div>
      <Button
        key="3"
        type="link"
        onClick={() => {
          history.push("./home");
        }}
      >
        Home
      </Button>
      <Button
        key="3"
        type="link"
        onClick={() => {
          history.push("./chart");
        }}
      >
        Chart
      </Button>
    </div>
  );
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Tradeflix"
        extra={buttons}
      >
        <AutoComplete
          style={{
            width: 200
          }}
          onSearch={handleSearch}
          placeholder="input here"
        >
          {result.map((email) => (
            <Option key={email} value={email}>
              {email}
            </Option>
          ))}
        </AutoComplete>
      </PageHeader>
    </div>
  );
}
