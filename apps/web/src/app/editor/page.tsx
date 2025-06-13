"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Download,
  Eye,
  File,
  FileImage,
  Folder,
  FolderOpen,
  Github,
  Save,
  Upload,
  Play,
  Settings,
  Palette,
  Code2,
  Terminal,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import TreeUiComponent from "@/components/editorComponents/TreeUiComponent";
import EditorContent from "@/components/editorComponents/EditorContent";

export default function EditorPage() {
  const [activeFile, setActiveFile] = useState("theme.txt");
  const [themeCode, setThemeCode] = useState(`# GrubStudio Theme Configuration
title-text: "GrubStudio Demo"
desktop-image: "background.png"
desktop-color: "#1a1a1a"
terminal-font: "JetBrains Mono Regular 16"
terminal-box: "terminal_box_*.png"
terminal-left: "0"
terminal-top: "0"
terminal-width: "100%"
terminal-height: "100%"
terminal-border: "0"

# Boot menu configuration
+ boot_menu {
  left = 20%
  top = 25%
  width = 60%
  height = 50%
  item_font = "JetBrains Mono Regular 16"
  item_color = "#ffffff"
  selected_item_color = "#ff9248"
  icon_width = 32
  icon_height = 32
  item_height = 40
  item_spacing = 8
  selected_item_pixmap_style = "select_*.png"
}

# Progress bar
+ progress_bar {
  id = "__timeout__"
  left = 20%
  top = 80%
  width = 60%
  height = 24
  fg_color = "#ff9248"
  bg_color = "#333333"
  border_color = "#666666"
  text = "Booting in %d seconds..."
  text_color = "#ffffff"
}`);

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Header */}
      <header className="flex h-16 items-center gap-4 border-b glass px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-primary"
        >
          <Code2 className="h-5 w-5" />
          <span>GrubStudio</span>
        </Link>
        <Separator orientation="vertical" className="h-6" />

        <div className="flex flex-1 items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-primary/20 hover:bg-primary/5"
          >
            New
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-primary/20 hover:bg-primary/5"
          >
            Open
          </Button>

          <div className="flex items-center gap-1 ml-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-primary/20 hover:bg-primary/5"
                  >
                    <Save className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Save (Ctrl+S)</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-primary/20 hover:bg-primary/5"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Download ZIP</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 border-primary/20 hover:bg-primary/5"
                  >
                    <Upload className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Upload to Marketplace</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <Separator orientation="vertical" className="mx-2 h-6" />

          <Button
            variant="outline"
            size="sm"
            className="border-primary/20 hover:bg-primary/5"
          >
            <Play className="mr-2 h-4 w-4" />
            Preview
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            <Zap className="w-3 h-3 mr-1" />
            Live Preview
          </Badge>
          <Link
            href="https://github.com/grubstudio/grubstudio"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-primary/20 hover:bg-primary/5"
            >
              <Github className="h-4 w-4" />
            </Button>
          </Link>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Publish
          </Button>
        </div>
      </header>

      {/* Editor */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 overflow-hidden">
          <EditorContent />
        </div>
      </div>

      {/* Status Bar */}
      <footer className="border-t py-2 px-4 glass">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>GrubStudio Editor</span>
            <span>•</span>
            <span>Ready</span>
            <span>•</span>
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary text-xs"
            >
              Live Preview Active
            </Badge>
          </div>
          <div className="flex items-center gap-4">
            <span>Ln 24, Col 12</span>
            <span>•</span>
            <span>UTF-8</span>
            <span>•</span>
            <span>GRUB Theme</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
