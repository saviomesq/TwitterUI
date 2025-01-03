import { useRef } from "react";

interface TextareaProps {
  placeholder: string;
}

export const Textarea = (props: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <textarea
      id="tweet"
      placeholder={props.placeholder}
      ref={textareaRef}
      onInput={handleInput}
      style={{ overflow: "hidden", resize: "none" }}
    />
  );
};
