import { AnswerDataType } from "../pages/api/answer";
import instance from "./instance";

/* 提交答卷数据到服务端 */
export async function postAnswer(answer: AnswerDataType) {
  const url = "/api/answer";
  const res = await instance.post(url, answer);
  return res.data;
}
