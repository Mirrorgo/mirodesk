import { Button, Modal } from "antd";
import { FC, useState } from "react";
import JsonEditor from "../JsonEditor";

type Setting = {
  open: boolean;
  onCancel: () => void;
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
      {isJson ? <JsonEditor /> : <div>test</div>}
    </Modal>
  );
};

export default Setting;
