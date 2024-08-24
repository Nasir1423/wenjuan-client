import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"; // server-side-rendering 的参数及返回值类型
import PageWrapper from "@/components/PageWrapper"; // 页面的共享部分，用于设置页面的元信息
import styles from "@/styles/Question.module.scss";
import { getQuestionById } from "@/service/question";
import { QuestionType } from "@/types";
import { getComponent } from "@/components";

// 当前组件的参数类型
type PropsType = /* {
  questionId: string;
  answerList?: Array<AnswerType>;
}; */ QuestionType;

export default function Question(props: PropsType) {
  const { errno, data, msg = "" } = props;

  /* 检验后端是否成功返回了正确的数据 */
  if (errno !== 0) {
    return (
      <PageWrapper title="错误" css="p{color: red}">
        <h1>错误</h1>
        <p>{msg}</p>
      </PageWrapper>
    );
  }

  /* 如果后端成功返回了正确的数据，那么一定存在非空的 data */
  const {
    id: questionId,
    title,
    desc = "",
    js = "",
    css = "",
    isPublished,
    isDeleted,
    componentList,
  } = data!; // 这里使用 ! 断言 data 非空

  /* 如果问卷已删除（isDeleted = true）或问卷未发布（isPublished = false）===> 错误提示 */
  if (isDeleted || !isPublished) {
    return (
      <PageWrapper title={title} desc={desc} css="p{color: red}">
        <h1>{title}</h1>
        {/* 问卷已删除时 */}
        {isDeleted && <p>该问卷已被删除</p>}
        {/* 问卷未删除但未发布时 */}
        {!isDeleted && !isPublished && <p>该问卷尚未发布</p>}
      </PageWrapper>
    );
  }

  /* 组件渲染 JSX */
  const componentListElem = (
    <>
      {componentList.map((component) => {
        const { fe_id } = component;
        return <div key={fe_id} className={styles.componentWrapper}>{getComponent(component)}</div>;
      })}
    </>
  );

  return (
    <PageWrapper title={title} desc={desc} js={js} css={css}>
      <div>
        <h1>答卷表单</h1>
        <span>{questionId}</span>
        {/* 将表单数据以 post 类型发送到 /api/answer，表单数据作为请求体一并发送 */}
        <form method="post" action="/api/answer">
          {/* 渲染问卷组件 */}
          {componentListElem}
          {/* 通过隐藏域提交表单 id */}
          <input type="hidden" name="questionId" value={questionId} />
          {/* 提交按钮 */}
          <div className={styles.submitBtnContainer}>
            <button type="submit">提交</button>
          </div>
        </form>
      </div>
    </PageWrapper>
  );
}

// Server-side rendering
export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<PropsType>> {
  /* 这里可以 await 异步请求 */
  /* 该函数在每次发送请求时都会执行 */
  const { questionId = "" } = context.params as { questionId: string }; // 获取问卷 id
  const props = await getQuestionById(questionId);
  return { props };
}
/* 关于动态路由参数
  - getServerSideProps 中通过 context.params 获取动态路由参数，其属性（对应参数）类型是 ParsedUrlQuery = string | string[] | undefined
  - 动态路由与参数类型
    - 一般动态路由：/post/[id] => id 的类型是 string; /post/123 => id = 123
    - catch-all 动态路由：/post/[...id] => id 的类型是 string[]; /post/123/456 => id = ["123", "456"]
    - 动态路由的错误使用：当没有传递相应参数，或路由没有匹配到响应参数时 => 此时 context.params 的某个属性的取值可能是 undefined
*/
/* 关于 getServerSideProps 函数的类型
  - 参数（context）类型：getServerSidePropContext
  - 返回值类型：Promise<GetServerSidePropsResult<PropsType>>，这里的 PropsType 指的是函数返回的 props 的类型 */
