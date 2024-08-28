import instance from "./instance";

/* 获取特定问卷的组件信息 */
export async function getQuestionById(id: string) {
  const url = `/api/question/${id}`;
  const res = await instance.get(url);
  return res.data;
}
