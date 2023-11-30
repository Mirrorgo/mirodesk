import { createGlobalStyle } from "styled-components";

// 定义全局样式
const BaseStyle = createGlobalStyle`
.mx-auto {
  margin: 0 auto;
}

.horizontalCenterSon {
  display: flex;
  justify-content: center;
}

.icon-size {
  width: 16px;
  height: 16px;
}

.cursor-pointer {
  cursor: pointer;
}
.test{
}
`;

export default BaseStyle;
