// file.ts

export type FileNode = {
  id: string;
  name: string;
  children?: FileNode[]; // If present, it's a folder
};

export const dummyFileTree: FileNode[] = [
  { id: "1", name: "theme.txt" },
  {
    id: "2",
    name: "Icons",
    children: [
      { id: "c1", name: "Linux.png" },
      { id: "c2", name: "Window.png" },
      { id: "c3", name: "macos.png" },
    ],
  },
  {
    id: "3", // changed from "2" to keep IDs unique
    name: "Fonts",
    children: [
      { id: "d1", name: "Alice" },
      { id: "d2", name: "Bob" },
      { id: "d3", name: "Charlie" },
    ],
  },
];
