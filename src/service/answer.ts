import { AnswerDataType } from "../pages/api/answer";
import instance from "./instance";

/* 提交答卷数据到服务端 */
export async function postAnswer(answer: AnswerDataType) {
  // console.log("@answer", answer);
  const url = "/api/answer";
  const data = await instance.post(url, answer);
  return data;
}
