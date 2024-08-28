import { CSSProperties, FC } from "react";

export type PropsType = {
  text: string;
  level: 1 | 2 | 3 | 4 | 5;
  isCenter?: boolean;
};

const QuestionTitle: FC<PropsType> = ({ text, level, isCenter = false }) => {
  const style: CSSProperties = {};
  if (isCenter) style.textAlign = "center";

  switch (level) {
    case 1:
      return <h1 style={style}>{text}</h1>;
    case 2:
      return <h2 style={style}>{text}</h2>;
    case 3:
      return <h3 style={style}>{text}</h3>;
    case 4:
      return <h4 style={style}>{text}</h4>;
    case 5:
      return <h5 style={style}>{text}</h5>;
    default:
      return null;
  }
};

export default QuestionTitle;
