import { QuestionType } from "@/types";
import instance from "./instance";

/* 获取特定问卷的组件信息 */
export async function getQuestionById(id: string): Promise<QuestionType> {
  const url = `/api/question/${id}`;
  const data = await instance.get(url);
  return data;
}
