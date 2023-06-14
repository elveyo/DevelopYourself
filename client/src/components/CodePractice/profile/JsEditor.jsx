import { Editor } from "@monaco-editor/react";
import React from "react";

const JsEditor = ({ language, setHtml, setCss, setJs }) => {
  const handleChange = (value) => {
    if (language == "html") setHtml(value);
    if (language == "css") setCss(value);
    if (language == "javascript") setJs(value);
  };
  return (
    <div className="h-96 w-full text-white">
      <Editor
        language={language}
        defaultValue=""
        theme="vs-dark"
        className="text-white"
        onChange={(value) => {
          handleChange(value);
        }}
      />
    </div>
  );
};
export default JsEditor;
