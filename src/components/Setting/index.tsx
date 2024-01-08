import { Button, Modal, Radio, RadioChangeEvent, Space } from "antd";
import { FC, useState } from "react";
import JsonEditor from "../JsonEditor";

type Setting = {
  open: boolean;
  onCancel: () => void;
};

const GUIEditor = () => {
  const onAddModeChange = (e: RadioChangeEvent) => {
    console.log("?", e.target.value);
  };
  // 做成一个Interactive mode
  // 点击添加特定端口site
  // 点击添加任意site
  return (
    <>
      <Space direction="vertical">
        <Radio.Group
          onChange={onAddModeChange}
          buttonStyle="solid"
          defaultValue="localhost"
        >
          <Radio.Button value="localhost">localhost</Radio.Button>
          <Radio.Button value="custom site">custom site</Radio.Button>
        </Radio.Group>

        {/* TODO： 做出完整的 交互式的输入框 Interactive mode 智能建议 */}

        {/* NOTE: 目前先用前置后置标签实现！！！ */}
        {/* 和json对应的选项内容的gui展示 */}
        <div>选项的内容</div>
      </Space>
    </>
  );
};

const Setting: FC<Setting> = ({ open, onCancel }) => {
  const [isJson, setIsJson] = useState(false);
  return (
    <Modal
      title="Setting"
      closable={false}
      onCancel={onCancel}
      open={open}
      // size="large"
      footer={[
        <Button
          key="json"
          type="text"
          onClick={() => {
            setIsJson((cur) => !cur);
          }}
        >
          {!isJson ? "JSON Mode" : "GUI Mode"}
        </Button>,
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button onClick={onCancel} key="ok" type="primary">
          OK
        </Button>,
      ]}
    >
      {isJson ? <JsonEditor /> : <GUIEditor />}
    </Modal>
  );
};

export default Setting;
