import { BaseSyntheticEvent, useEffect, useState } from "react";
import "./index.less"; // 导入样式文件
import jsonData from "./data.ts";

const JsonEditor = () => {
  // TODO: 支持json格式化
  const [jsonValue, setJsonValue] = useState(""); // 初始化为空字符串

  // 加载 JSON 数据
  useEffect(() => {
    // 模拟异步加载过程，实际情况中可能是从服务器获取数据
    // TODO: 服务器获取一次,后续每次都只在本地修改,然后推送到云端
    setTimeout(() => {
      setJsonValue(JSON.stringify(jsonData, null, 2)); // 设置格式化的 JSON 到状态中
    }, 100); // 假设延迟加载 JSON 数据.1秒钟
  }, []);

  const handleInputChange = (event: BaseSyntheticEvent) => {
    const value = event.target.value;
    setJsonValue(value);
    // 在这里你可以根据需要进行数据处理或其他操作
  };

  // 将 JSON 字符串按行分割成数组
  const lines = jsonValue.split("\n");

  return (
    <div className="json-editor">
      <div className="line-numbers">
        {/* 生成行号 */}
        {lines.map((line, index) => (
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
    </div>
  );
};

export default JsonEditor;
