import { BaseSyntheticEvent, useEffect, useState } from "react";
import useConfigStore from "@/store/global.ts";
import styled from "styled-components";
const CJsonEditor = styled.div`
  display: flex;
  .line-numbers {
    width: 30px; /* 调整行号列的宽度 */
    background-color: #f4f4f4;
    padding: 8px;
    border-right: 1px solid #ddd;
    /* 其他样式根据需要自行调整 */
  }

  .line-number {
    // TODO: 有没有更好的控制行高行距的方法
    font-size: 12px;
    color: #999;
    line-height: 17px;
  }

  .json-textarea {
    flex: 1;
    min-height: 200px;
    outline: none;
    border: 1px solid #ccc;
    border-left: none;
    border-radius: 0;
    padding: 8px;
    resize: none;
  }
`;
const JsonEditor = () => {
  // TODO: 支持json格式化
  const [jsonValue, setJsonValue] = useState(""); // 初始化为空字符串
  const configData = useConfigStore((state) => state.configData);

  // TODO: 这里的高度看上去不对劲
  // 加载 JSON 数据
  useEffect(() => {
    // TODO: 服务器获取一次,后续每次都只在本地修改,然后推送到云端
    setJsonValue(
      JSON.stringify(configData, null, 2) // 设置格式化的 JSON 到状态中
    );
  }, []);

  const handleInputChange = (event: BaseSyntheticEvent) => {
    const value = event.target.value;
    setJsonValue(value);
    // 在这里你可以根据需要进行数据处理或其他操作
  };

  // 将 JSON 字符串按行分割成数组
  const lines = jsonValue.split("\n");

  return (
    <CJsonEditor>
      <div className="line-numbers">
        {/* 生成行号 */}
        {lines.map((_line, index) => (
          <div key={index} className="line-number">
            {index + 1}
          </div>
        ))}
      </div>
      <textarea
        className="json-textarea"
        value={jsonValue}
        onChange={handleInputChange}
      />
    </CJsonEditor>
  );
};

export default JsonEditor;
