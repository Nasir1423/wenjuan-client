import PageWrapper from "@/components/PageWrapper";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export default function Home() {
  const [questionId, setQuestionId] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuestionId(value.trim());
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (key !== "Enter") return;
    window.location.href = `/question/${questionId}`;
  };
  return (
    <PageWrapper title="问卷星 - H5">
      <h1>欢迎使用问卷星</h1>
      <div>
        <p>输入问卷 id，填写问卷</p>
        <input
          type="text"
          value={questionId}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </PageWrapper>
  );
}
