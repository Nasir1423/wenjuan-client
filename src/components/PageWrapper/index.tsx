/**
 * 该组件抽离了所有页面所共有的内容，简化了代码组织
 */
import { FC, ReactNode } from "react";
import Head from "next/head";
import styles from "./index.module.scss";
import Script from "next/script";

type PropsType = {
  title: string;
  desc?: string;
  css?: string;
  js?: string;
  children: ReactNode;
};

const PageWrapper: FC<PropsType> = ({
  title,
  desc = "",
  css = "",
  js = "",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* 使用 CSS 样式 */}
        <style>{css}</style>
      </Head>
      <main className={styles.container}>{children}</main>
      {/* 应用 JS 逻辑 */}
      <Script id="page-js">{js}</Script>
    </>
  );
};

export default PageWrapper;
