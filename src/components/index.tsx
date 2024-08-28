import { COMPONENT_CATEGORY, ComponentType } from "@/types";
import QuestionInput, {
  PropsType as QuestionInputPropsType,
} from "./QuestionComponents/QuestionInput";
import QuestionRadio, {
  PropsType as QuestionRadioPropsType,
} from "./QuestionComponents/QuestionRadio";
import QuestionTitle, {
  PropsType as QuestionTitlePropsType,
} from "./QuestionComponents/QuestionTitle";
import QuestionParagraph, {
  PropsType as QuestionParagraphPropsType,
} from "./QuestionComponents/QuestionParagraph";
import QuestionInfo, {
  PropsType as QuestionInfoPropsType,
} from "./QuestionComponents/QuestionInfo";
import QuestionTextArea, {
  PropsType as QuestionTextAreaPropsType,
} from "./QuestionComponents/QuestionTextArea";
import QuestionCheckbox, {
  PropsType as QuestionCheckboxPropsType,
} from "./QuestionComponents/QuestionCheckbox";
import { ReactNode } from "react";

/**
 * 根据组件信息渲染对应的 JSX 片段
 */
export function getComponent(componentInfo: ComponentType): ReactNode {
  const { fe_id, type, /* title, */ isHidden, /*  isLocked, */ props } =
    componentInfo;
  const componentProps = { fe_id, props };

  if (isHidden) return null;

  switch (type) {
    case COMPONENT_CATEGORY.INPUT:
      return <QuestionInput {...(componentProps as QuestionInputPropsType)} />;
    case COMPONENT_CATEGORY.RADIO:
      return <QuestionRadio {...(componentProps as QuestionRadioPropsType)} />;
    case COMPONENT_CATEGORY.TITLE:
      return <QuestionTitle {...(props as QuestionTitlePropsType)} />;
    case COMPONENT_CATEGORY.PARAGRAPH:
      return <QuestionParagraph {...(props as QuestionParagraphPropsType)} />;
    case COMPONENT_CATEGORY.INFO:
      return <QuestionInfo {...(props as QuestionInfoPropsType)} />;
    case COMPONENT_CATEGORY.TEXTAREA:
      return (
        <QuestionTextArea {...(componentProps as QuestionTextAreaPropsType)} />
      );
    case COMPONENT_CATEGORY.CHECKBOX:
      return (
        <QuestionCheckbox {...(componentProps as QuestionCheckboxPropsType)} />
      );
    default:
      return null;
  }
}
