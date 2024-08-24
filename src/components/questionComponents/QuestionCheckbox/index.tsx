import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { produce } from "immer";

export type PropsType = {
  fe_id: string;
  props: {
    title: string;
    list: Array<{ value: string; text: string; checked: boolean }>;
    isVertical?: boolean;
  };
};

const QuestionCheckbox: FC<PropsType> = ({ fe_id, props }) => {
  const { title, list = [], isVertical = false } = props;
  // 多选框选中项构成的数组
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  // 初始化状态变量 selectedValues
  useEffect(() => {
    const selectedItemList = list.filter(({ checked }) => checked); // 过滤出选中项
    const selectedValueList = selectedItemList.map(({ value }) => value); // 选中项的 value 构成的数组
    setSelectedValues(selectedValueList);
  }, [list]);
  // 用户点击选项时，根据选项是否已选中，更新该状态变量 selectedValues
  const updateSelectedValue = (value: string) => {
    if (selectedValues.includes(value)) {
      /* 选中 ==> 未选中 */
      setSelectedValues(
        produce((draft) => {
          const delIndex = draft.findIndex((v) => v === value);
          draft.splice(delIndex, 1);
        })
      );
    } else {
      /* 未选中 ==> 选中 */
      setSelectedValues(
        produce((draft) => {
          draft.push(value);
        })
      );
    }
  };

  return (
    <>
      <p>{title}</p>
      {/* 使用隐藏域传递多选框数据，这样可以自定义数据格式 */}
      <input type="hidden" name={fe_id} value={selectedValues.toString()} />
      <ul className={styles.list}>
        {list.map(({ value, text, checked }) => {
          const itemClassName = isVertical
            ? styles.verticalItem
            : styles.horizontalItem;

          return (
            <li key={value} className={itemClassName}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedValues.includes(value)}
                  onChange={() => updateSelectedValue(value)}
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

export default QuestionCheckbox;
