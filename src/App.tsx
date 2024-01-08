import { Typography } from "antd";
import { TouchEventHandler, useState } from "react";
import { CaretDownFilled } from "@ant-design/icons";
import Console from "./components/Console";
import Setting from "./components/Setting";

enum Status {
  Up = "up",
  Down = "down",
  UpToDown = "upToDown",
  DownToUp = "downToUp",
}

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

  // == ooooo ==
  const [status, setStatus] = useState<Status>(Status.Up);
  const [startY, setStartY] = useState(0);
  const threshold = 100; // 下拉阈值，超过该值则展示新界面

  const [touchMoveY, setTouchMoveY] = useState<number>(0);

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove: TouchEventHandler<HTMLDivElement> = (e) => {
    const currentY = e.touches[0].clientY;
    setTouchMoveY(startY - currentY);
    if (status === Status.Up) {
      setStatus(Status.UpToDown);
    }
  };

  const handleTouchEnd = () => {
    if (status === Status.UpToDown && touchMoveY < 0) {
      if (Math.abs(touchMoveY) < threshold) {
        setStatus(Status.Up);
      } else {
        setStatus(Status.Down);
      }
    } else if (status === Status.Down && touchMoveY > 0) {
      if (Math.abs(touchMoveY) < threshold) {
        setStatus(Status.Down);
      } else {
        setStatus(Status.Up);
      }
    }
  };

  let topValue = "";

  switch (status) {
    case Status.Up:
      topValue = "-200px";
      break;
    case Status.Down:
      topValue = "200px";
      break;
    case Status.UpToDown:
      topValue = `calc(-200px - ${touchMoveY}px)`;
      break;
    // 可以根据需要添加其他状态的处理
    default:
      topValue = "0";
      break;
  }

  return (
    <div
      style={{
        // 防止下拉刷新
        overscrollBehavior: "none",
      }}
    >
      <div
        style={{
          height: "200px",
          position: "absolute",
          backgroundColor: "yellow",
          top: topValue,
          transition: "top .3s ease-out",
        }}
        className={status}
      >
        <div>
          {/* 新界面内容，根据需求设计 */}
          <h2>新界面</h2>
          <p>这是您下拉展示的新界面内容。</p>
        </div>
      </div>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ height: "100vh", backgroundColor: "green" }} // 确保内容撑开全屏高度
      >
        {/* 您的原始界面内容 */}
        {/* 下拉控制台 console*/}
        <>
          <div className={"horizontalCenterSon"}>
            <CaretDownFilled onClick={showConsole} />
          </div>
          <Typography.Title>core workspace</Typography.Title>
        </>
      </div>
      <>
        {/* 控制台 */}
        <Console
          open={isConsoleOpen}
          onClose={onClose}
          showSetting={showSetting}
        />
        <Setting open={isSettingOpen} onCancel={onCancel} />
      </>
    </div>
  );
}

export default App;
