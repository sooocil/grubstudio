"use client";

import Editor from "@monaco-editor/react";
import { TreeDataItem, FileNode } from "./files";
import { useState, useEffect } from "react";

type Props = {
  file: TreeDataItem;
};

export default function MonacoEditor({ file }: Props) {
  const [value, setValue] = useState(
    file?.name ? `// Editing: ${file.name}` : ""
  );

  useEffect(() => {
    setValue(`// Editing: ${file.name}`);
  }, [file]);

  return (
    <Editor
      className="w-[500px] h-[500px] bg-gray-900 text-white"
      defaultLanguage="plaintext"
      value={value}
      onChange={(val) => setValue(val ?? "")}
      theme="vs-dark"
      options={{ minimap: { enabled: false } }}
    />
  );
}
