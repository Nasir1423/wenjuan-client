import { FC } from "react";
import styles from "./index.module.scss";

export type PropsType = {
  fe_id: string;
  props: {
    title: string;
    text?: string;
  };
};

const QuestionTextArea: FC<PropsType> = ({ fe_id, props }) => {
  const { title, text = "" } = props;

  return (
    <>
      <p>{title}</p>
      <div className={styles.textareaWrapper}>
        <textarea name={fe_id} placeholder={text} required cols={5} />
      </div>
    </>
  );
};

export default QuestionTextArea;
