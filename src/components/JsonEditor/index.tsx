import { BaseSyntheticEvent, useEffect, useState } from "react";
import "./index.less"; // 导入样式文件
import jsonData from "./data.ts";
import useConfigStore from "@/store/global.ts";

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
