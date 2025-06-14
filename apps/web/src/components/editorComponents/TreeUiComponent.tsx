"use client";

import { TreeView } from "@/components/tree-view";
import { FileNode as rawData, TreeDataItem } from "./files";
import { File as FileIcon, Folder, FolderOpen, Plus, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";

type Props = {
  onSelect?: (file: TreeDataItem) => void;
};

const ActionButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <span 
    className="p-2 text-white hover:cursor-pointer hover:bg-zinc-400/20 hover:rounded"
    onClick={(e) => {
      e.stopPropagation();
      onClick?.();
      console.log("Action clicked");
    }}
  >
    {children}
  </span>
);

const NodeIcon = ({ className }: { className?: string }) => (
  <Folder className={className} />
);

const LeafIcon = ({ className }: { className?: string }) => (
  <FileIcon className={className} />
);

export default function TreeUiComponent({ onSelect }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const treeData = useMemo(() => {
    function processNodes(data: TreeDataItem[]): TreeDataItem[] {
      return data.map((item) => {
        const newItem: TreeDataItem = { ...item };

        // Set folder icons
        if (newItem.children) {
          newItem.openIcon = newItem.openIcon ?? FolderOpen;
          newItem.icon = newItem.icon ?? Folder;
          newItem.children = processNodes(newItem.children);
        }

        // Always set actions, but control visibility with CSS
        newItem.actions = (
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {newItem.children && (
              <ActionButton>
                <Plus className="h-4 w-4" />
              </ActionButton>
            )}
            <ActionButton>
              <Trash2 className="h-4 w-4" />
            </ActionButton>
          </div>
        );

        // Ensure onClick properly handles the item
        const originalOnClick = newItem.onClick;
        newItem.onClick = (e?: React.MouseEvent) => {
          e?.stopPropagation();
          setSelectedId(newItem.id);
          onSelect?.(newItem);
          originalOnClick?.();
        };

        return newItem;
      });
    }

    return processNodes(rawData);
  }, [selectedId, onSelect]);

  return (
    <div className="w-max-20 overflow-auto border-r border-gray-700 bg-gray-900 text-white">
      <TreeView
        data={treeData}
        defaultNodeIcon={NodeIcon}
        defaultLeafIcon={LeafIcon}
        className="[&>div]:group" // This ensures each tree item has the group class
      />
    </div>
  );
}