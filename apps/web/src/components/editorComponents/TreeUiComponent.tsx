"use client";

import { TreeView } from "@/components/tree-view";
import { TreeDataItem, useFileSystemStore } from "@/stores/useFileStore";
import { PiFileJs as jsfile } from "react-icons/pi";

import {
  File as FileIcon,
  Folder,
  FolderOpen,
  Plus,
  Trash2,
  Image as ImageIcon,
  FileMusic,
  FileText,
} from "lucide-react";
import { useMemo } from "react";
import { Skeleton } from "../ui/skeleton";

const ActionButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <span
    className="p-2 text-white hover:cursor-pointer hover:bg-zinc-400/20 hover:rounded"
    onClick={(e) => {
      e.stopPropagation();
      onClick?.();
    }}
  >
    {children}
  </span>
);

export default function TreeUiComponent({
  onSelect,
}: {
  onSelect: (file: TreeDataItem) => void;
}) {
  const { files, addFile, deleteFile, isLoading } = useFileSystemStore();

  if (isLoading) {
    return (
      <div className="text-white">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    );
  }

  const treeData = useMemo(() => {
    const buildTree = (parentId: string | null): TreeDataItem[] => {
      return files
        .filter((f) => f.parentId === parentId)
        .map((file) => {
          const isFolder = files.some((f) => f.parentId === file.id);

          let icon = jsfile;
          if (file.name.endsWith(".png")) icon = ImageIcon;
          else if (file.name.endsWith(".mp3")) icon = FileMusic;
          else if (file.name.endsWith(".js")) icon = jsfile;
          else if (file.name.endsWith(".txt")) icon = FileText;
       

          return {
            ...file,
            icon: isFolder ? Folder : icon,
            openIcon: isFolder ? FolderOpen : undefined,
            children: isFolder ? buildTree(file.id) : undefined,
            actions: (
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                {isFolder ? (
                  <ActionButton onClick={() => addFile(file.id)}>
                    <Plus className="h-4 w-4" />
                  </ActionButton>
                ) : (
                  <ActionButton onClick={() => deleteFile(file.id)}>
                    <Trash2 className="h-4 w-4" />
                  </ActionButton>
                )}
              </div>
            ),
            onClick: isFolder ? undefined : () => onSelect(file),
          };
        });
    };

    return buildTree(null);
  }, [files, addFile, deleteFile, onSelect]);

  return (
    <div className="w-full h-full overflow-auto border-r border-gray-700 bg-gray-950 text-white">
      <TreeView
      data={treeData}
      defaultNodeIcon={({ className }: { className?: string }) => (
        <Folder className={className} />
      )}
      defaultLeafIcon={({ className }: { className?: string }) => (
        <FileIcon className={className} />
      )}
      className=" select-none "
      />
    </div>
  );
}
