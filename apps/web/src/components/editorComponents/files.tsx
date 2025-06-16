import { Image as ImageIcon, FileText, File as FileIcon, Folder, FolderOpen, FileMusic  } from 'lucide-react';

export interface TreeDataItem {
  id: string;
  name: string;
  icon?: any;
  selectedIcon?: any;
  openIcon?: any;
  children?: TreeDataItem[];
  actions?: React.ReactNode;
  onClick?: () => void;
  draggable?: boolean;
  droppable?: boolean;
  disabled?: boolean;
}



export const FileNode: TreeDataItem[] = [
  {
    id: "1",
    name: "Assets",
    icon: Folder,
    openIcon: FolderOpen,
    children: [
      {
        id: "3",
        name: "background.png",
        icon: ImageIcon,
      },
      {
        id: "4",
        name: "Audio.mp3",
        icon: FileMusic,
      },
    ],
  },
  {
    id: "2",
    name: "Theme",
    icon: Folder,
    children: [
      {
        id: "3",
        name: "background.png",
        icon: ImageIcon,
      },
      {
        id: "4",
        name: "Audio.mp3",
        icon: FileMusic,
      },
    ],
  },
  {
    id: "6",
    name: "theme.js",
    draggable: true,
    icon: FileText,
  },
];

