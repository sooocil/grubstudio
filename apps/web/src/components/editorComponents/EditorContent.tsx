"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import TreeUiComponent from "./TreeUiComponent";
import { TreeDataItem, FileNode } from "./files";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Folder,
  Palette,
  Terminal,
  ChevronDown,
  Settings,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MonacoEditor = dynamic(() => import("./MonacoEditor"), {
  ssr: false,
});

export default function EditorPage() {
  const [selectedFile, setSelectedFile] = useState<TreeDataItem | null>(null);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen w-full bg-gray-900 text-white"
    >
      {/* Left Sidebar */}
      <ResizablePanel
        defaultSize={22}
        minSize={22}
        maxSize={30}
        className="glass border-r"
      >
        <div className="p-4 space-y-6 overflow-y-auto h-full ">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <Folder className="h-4 w-4 text-primary" />
                Project Files
              </h3>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
            <TreeUiComponent onSelect={setSelectedFile} />
          </div>

          <div className="p-3 glass rounded-lg border">
            <h4 className="text-xs font-semibold mb-2 flex items-center gap-2">
              <Palette className="h-3 w-3 text-primary" />
              Theme Settings
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Resolution</span>
                <span>1920x1080</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Accent</span>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-primary rounded-full border" />
                  <span>#ff9248</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Font</span>
                <span>JetBrains Mono</span>
              </div>
            </div>
          </div>
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      {/* Code Editor */}
      <ResizablePanel defaultSize={55} minSize={30}>
        <div className="h-full p-2 bg-zinc-950">
          {selectedFile ? (
            <MonacoEditor key={selectedFile.id} file={selectedFile} />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">
              Select a file to start editing
            </div>
          )}
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      {/* Right Preview Panel */}
      <ResizablePanel defaultSize={25} minSize={25} className="border-l">
        <div className="flex flex-col h-full">
          <div className="p-3 border-b glass">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold flex items-center gap-2">
                <Eye className="h-4 w-4 text-primary" />
                Live Preview
              </h3>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Settings className="h-3 w-3" />
              </Button>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-6">
            <div className="w-full max-w-sm space-y-6">
              <div className="text-center">
                <h2 className="text-xl font-bold text-white mb-2">
                  GrubStudio Demo
                </h2>
                <div className="w-12 h-1 bg-primary mx-auto rounded-full" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-3 bg-primary/20 border border-primary/40 rounded-lg px-4 py-3 hover:bg-primary/30 transition">
                  <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                    <Terminal className="w-3 h-3 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm">
                      Ubuntu 22.04 LTS
                    </div>
                    <div className="text-primary/80 text-xs">Latest kernel</div>
                  </div>
                  <div className="text-primary text-sm">▶</div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 hover:bg-white/10 transition cursor-pointer">
                  <div className="w-6 h-6 bg-muted/20 rounded-md flex items-center justify-center">
                    <Terminal className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white/80 font-medium text-sm">
                      Advanced options
                    </div>
                    <div className="text-white/50 text-xs">Recovery mode</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 hover:bg-white/10 transition cursor-pointer">
                  <div className="w-6 h-6 bg-blue-500/20 rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-sm" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white/80 font-medium text-sm">
                      Windows 11
                    </div>
                    <div className="text-white/50 text-xs">Windows</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-center text-white/60 text-xs">
                  Booting in 10 seconds...
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>

              <div className="text-center text-white/80 text-xs pt-2 border-t border-white/10">
                Use ↑↓ keys to select • Enter to boot
              </div>
            </div>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
