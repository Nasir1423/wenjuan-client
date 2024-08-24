/**
 * 用户提交失败时显示的页面
 */
import PageWrapper from "@/components/PageWrapper";

export default function Error() {
  const css = "h1{color: red}";

  return (
    <PageWrapper title="提交失败" css={css}>
      <h1>很遗憾，提交失败！</h1>
    </PageWrapper>
  );
}
