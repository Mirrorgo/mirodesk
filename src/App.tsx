import { Typography } from "antd";
import "./styles/base.less";
import { useState } from "react";
import { CaretDownFilled } from "@ant-design/icons";
import Console from "./components/Console";
import Setting from "./components/Setting";

function App() {
  // console
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);
  // setting
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  // console
  const showConsole = () => {
    setIsConsoleOpen(true);
  };
  const showSetting = () => {
    setIsSettingOpen(true);
  };
  const onClose = () => {
    setIsConsoleOpen(false);
  };
  // setting
  const onCancel = () => {
    setIsSettingOpen(false);
  };

  return (
    <>
      {/* 下拉控制台 console*/}
      <div className={"horizontalCenterSon"}>
        <CaretDownFilled onClick={showConsole} />
      </div>
      <Typography.Title>core workspace</Typography.Title>

      {/* 控制台 */}
      <Console
        open={isConsoleOpen}
        onClose={onClose}
        showSetting={showSetting}
      />
      <Setting open={isSettingOpen} onCancel={onCancel} />
    </>
  );
}

export default App;
