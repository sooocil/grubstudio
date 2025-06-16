'use client';

import { Github, Zap } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import Link from "next/link";

const NavBar = () => {
  const handleToast = () => {
    toast.success("Testing Toasts.", {
      description: "This is a test toast notification.",
      icon: <Zap className="h-4 w-4 text-yellow-400" />,
      className: "bg-zinc-900/95 border-zinc-700/50 text-zinc-100",
    });
  };

  return (
    <header className="z-50 w-full  top-0 border-b border-zinc-700/50 bg-zinc-900/95 backdrop-blur-md supports-[backdrop-filter]:bg-zinc-900/60">
      <div className="container flex h-16 items-center mx-auto px-4">
        <div className="flex items-center mr-6">
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="font-bold text-2xl text-zinc-100 group-hover:text-primary transition-colors">
              GrubStudio
            </span>
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between">
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link
              href="/marketplace"
              className="text-sm font-medium text-zinc-300 hover:text-primary transition-colors duration-200"
            >
              Marketplace
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-zinc-300 hover:text-primary transition-colors duration-200"
            >
              Documentation
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-zinc-300 hover:text-primary transition-colors duration-200"
            >
              Dashboard
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="https://github.com/grubstudio/grubstudio" target="_blank" rel="noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-zinc-300 hover:bg-zinc-700/50 hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="/editor">
              <Button
                className="bg-primary text-zinc-900 hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
                onClick={handleToast}
              >
                Try Editor
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;