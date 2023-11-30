import { Button, Drawer, Space, Tooltip } from "antd";
import { FC, useState } from "react";
import settingLogo from "@/assets/setting.svg";
import customizeLogo from "@/assets/customize.svg";
import classnames from "classnames";
import useConfigStore from "@/store/global";
import { formatURL } from "@/utils/tools";
import styled from "styled-components";

type ConsoleProps = {
  open: boolean;
  onClose: () => void;
  showSetting: () => void;
};

const Sites = styled.img`
  width: 20px;
  height: 20px;
`;
const Console: FC<ConsoleProps> = ({ open, onClose, showSetting }) => {
  const [isCustomizing, setIsCustomizing] = useState(false);
  const sites = useConfigStore((state) => state.configData.consoleConfig.sites);
  return (
    <Drawer
      title="Console"
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
              <Sites
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
      {/* 核心部分 */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          width: "200px",
        }}
      >
        {sites.map((cur, idx) => (
          <div key={`${cur.domain}${idx}`}>
            {/* TODO: 需要自己维护一个高清图标库:infinity是这样的,有个用户上传的图标库 */}
            <Tooltip title={cur.name}>
              {/* rel="noopener noreferrer" 用于安全性考虑，防止打开的页面访问 window.opener */}
              {/* https://juejin.cn/post/6844904116892745735 */}
              <a
                target="_blank"
                href={formatURL(cur.domain)}
                rel="noopener noreferrer"
              >
                <img
                  src={`https://www.google.com/s2/favicons?domain=${cur.domain}`}
                  alt="customize logo"
                  className={classnames("img__site", "cursor-pointer")}
                />
              </a>
            </Tooltip>
          </div>
        ))}
      </div>

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
