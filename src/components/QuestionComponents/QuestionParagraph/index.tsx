import { CSSProperties, FC } from "react";

export type PropsType = {
  text: string;
  isCenter?: boolean;
};

const QuestionParagraph: FC<PropsType> = ({ text, isCenter = false }) => {
  const style: CSSProperties = {};
  if (isCenter) style.textAlign = "center";

  // 为了让文字换行显示，需要预先根据 /n 将字符串分割
  const textList = text.split("\n");

  return (
    <p>
      {textList.map((t, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {t}
        </span>
      ))}
    </p>
  );
};

export default QuestionParagraph;
