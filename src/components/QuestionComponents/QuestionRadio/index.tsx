import { FC } from "react";
import styles from "./index.module.scss";

export type PropsType = {
  fe_id: string;
  props: {
    title: string;
    options: Array<{ value: string; text: string }>;
    value?: string;
    isVertical?: boolean;
  };
};

const QuestionRadio: FC<PropsType> = ({ fe_id, props }) => {
  const {
    title,
    options,
    value: defaultValue = "",
    isVertical = false,
  } = props;

  // 计算 ul 中的 li 的排列方式：横向 | 纵向
  const itemClassName = isVertical
    ? styles.verticalItem
    : styles.horizontalItem;

  return (
    <>
      <p>{title}</p>
      <ul className={styles.list}>
        {options.map((opt) => {
          const { value, text } = opt;

          return (
            <li key={value} className={itemClassName}>
              <label>
                <input
                  type="radio"
                  name={fe_id}
                  value={value}
                  defaultChecked={value === defaultValue}
                  required
                />
                {text}
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default QuestionRadio;
