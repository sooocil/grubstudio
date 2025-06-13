"use client";

import { Tree } from "react-arborist";
import { dummyFileTree, FileNode } from "./files"; // adjust path as needed

type Props = {
  onSelect?: (file: FileNode) => void;
};

export default function TreeUiComponent({ onSelect }: Props) {
  return (
    <div className="w-64  overflow-auto border-r border-gray-700 bg-gray-900 text-white">
      <Tree
        data={dummyFileTree}
        childrenAccessor="children"
        openByDefault
        onSelect={(selectedNodes) => {
          // selectedNodes is an array of NodeApi<FileNode>
          if (selectedNodes.length === 0) return; // nothing selected
          const node = selectedNodes[0]; // single selection mode assumed
          const file = node.data;
          if (!file.children) {
            onSelect?.(file);
          }
        }}
        rowHeight={32}
      >
        {({ node, style, dragHandle }) => {
          const file = node.data as FileNode;
          const isFolder = !!file.children;

          return (
            <div
              ref={dragHandle}
              style={style}
              className="flex items-center px-2 cursor-pointer hover:bg-gray-700"
            >
              <span className="mr-2">{isFolder ? "📁" : "📄"}</span>
              <span>{file.name}</span>
            </div>
          );
        }}
      </Tree>
    </div>
  );
}
