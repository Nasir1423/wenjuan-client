import { FC } from "react";
import styles from "./index.module.scss";

export type PropsType = {
  fe_id: string;
  props: {
    text: string;
    placeholder?: string;
  };
};

const QuestionInput: FC<PropsType> = ({ fe_id, props }) => {
  const { text, placeholder = "" } = props;

  return (
    <>
      <p>{text}</p>
      <div className={styles.inputWrapper}>
        <input name={fe_id} placeholder={placeholder} required />
      </div>
    </>
  );
};

export default QuestionInput;
