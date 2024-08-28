// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { postAnswer } from "@/service/answer";

/**
 * 表单发送给当前接口的答卷数据类型
 */
export type FormDataType = {
  questionId: string;
  [key: string]: string;
};

/**
 * 发送给服务器的答卷数据类型
 */
export type AnswerDataType = {
  questionId: string;
  answerList: Array<{ componentId: string; value: string }>;
};

/**
 * 将 FormDataType 的答卷数据转换为 AnswerDataType 的答卷数据
 */
const formatFormData = (formData: FormDataType): AnswerDataType => {
  const { questionId } = formData;
  const answerList: Array<{ componentId: string; value: string }> = [];

  Object.keys(formData).forEach((key) => {
    if (key === "questionId") return;
    answerList.push({
      componentId: key,
      value: formData[key],
    });
  });

  return { questionId, answerList };
};

/**
 * 处理用户提交的答卷数据
 * @param req
 * @param res
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method !== "POST") {
    /* 非法的请求方法 */
    res.status(200).json({ errno: 0 });
  } else {
    /* 正确的请求方法，处理答卷数据 */
    const answer = formatFormData(req.body);

    try {
      /* 将处理好的答卷数据发送到服务端 Mock */
      const data = await postAnswer(answer);
      const { errno } = data;
      if (errno === 0) {
        /* 如果提交成功，则响应 Success 页面 */
        res.redirect(303, "/status/success");
      } else {
        /* 如果提交失败，则响应 Error 页面 */
        res.redirect(303, "/status/error");
      }
    } catch (err) {
      /* 如果提交失败，则响应 Error 页面 */
      res.redirect(303, "/status/error");
    }
  }
}
