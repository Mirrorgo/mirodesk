import { Button, Drawer, Space, Tooltip } from "antd";
import { FC, useState } from "react";
import settingLogo from "/public/setting.svg";
import customizeLogo from "/public/customize.svg";
import "/src/styles/base.less";
import classnames from "classnames";

type ConsoleProps = {
  open: boolean;
  onClose: () => void;
  showSetting: () => void;
};

const Console: FC<ConsoleProps> = ({ open, onClose, showSetting }) => {
  const [isCustomizing, setIsCustomizing] = useState(false);
  return (
    <Drawer
      title="Console!"
      placement="top"
      closable={false}
      onClose={onClose}
      open={open}
      // size="large"
      extra={
        <Space>
          {isCustomizing ? (
            <>
              <Button size="small">Add Website</Button>
              <Button
                type="primary"
                size="small"
                onClick={() => setIsCustomizing(false)}
              >
                Save
              </Button>
            </>
          ) : (
            <Tooltip placement="bottom" title="Customize Console">
              {/* TODO：制作一个点击后往左快速移动然后消失图标，消失处和原位置之间会出现一些自定义用的工具，就像拉开卷轴一样 */}
              <img
                onClick={() => setIsCustomizing(true)}
                src={customizeLogo}
                alt="customize logo"
                className={classnames("icon-size", "cursor-pointer")}
              />
            </Tooltip>
          )}
        </Space>
      }
    >
      <div>test</div>
      {/* 在右下角添加按钮 */}
      <div
        style={{ position: "absolute", bottom: 0, right: 0, padding: "16px" }}
      >
        <img
          onClick={showSetting}
          src={settingLogo}
          alt="setting logo"
          className={classnames("icon-size", "cursor-pointer")}
        />
      </div>
    </Drawer>
  );
};

export default Console;
