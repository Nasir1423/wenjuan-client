/**
 * 问卷数据
 */
export type QuestionType = {
  errno: number;
  data?: {
    id: string; // id
    title: string; // 标题
    desc?: string; // 描述
    js?: ""; // js
    css?: ""; // css
    isPublished: boolean; // 是否发布
    isDeleted: boolean; // 是否删除
    componentList: Array<ComponentType>; // 组件列表
  };
  msg?: string; // 提示信息，当 errno !== 0 时才有
};

/**
 * 组件数据
 */
export type ComponentType = {
  fe_id: string; // id
  type: ComponentCategoryType; // 类别
  title: string; // 标题
  isHidden: string; // 是否隐藏
  isLocked: string; // 是否锁定
  props: { [key: string]: any }; // 用于渲染的参数
};

/**
 * 组件种类数据
 */
export type ComponentCategoryType =
  | "questionTitle"
  | "questionInput"
  | "questionParagraph"
  | "questionInfo"
  | "questionTextArea"
  | "questionRadio"
  | "questionCheckbox";

/**
 * 组件种类枚举
 */
export enum COMPONENT_CATEGORY {
  TITLE = "questionTitle",
  INPUT = "questionInput",
  PARAGRAPH = "questionParagraph",
  INFO = "questionInfo",
  TEXTAREA = "questionTextArea",
  RADIO = "questionRadio",
  CHECKBOX = "questionCheckbox",
}
