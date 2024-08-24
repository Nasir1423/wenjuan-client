/**
 * 用户提交成功时显示的页面
 */
import PageWrapper from "@/components/PageWrapper";

export default function Success() {
  const css = "h1{color: green}";
  return (
    <PageWrapper title="提交成功" css={css}>
      <h1>恭喜你，提交成功！</h1>
    </PageWrapper>
  );
}
