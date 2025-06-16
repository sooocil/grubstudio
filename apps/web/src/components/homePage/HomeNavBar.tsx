import { Github, Zap } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import Link from "next/link";

const NavBar = () => {


  const handleToast = () => {
    toast.success("Testing Toasts.",{
      description: "This is a test toast notification.",
      icon: <Zap className="h-4 w-4" />,
    })
  };

  return (
    <div>
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="flex items-center gap-6 glass rounded-full px-6 py-3 shadow-lg">
          <Link href="/" className="font-bold text-lg text-primary">
            GrubStudio
          </Link>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <Button
              onClick={() => {
                handleToast();
              }}
              variant="default"
              className="hover:cursor-pointer"
              size="sm"
            >
              Show Toast
            </Button>
            <Link
              href="/marketplace"
              className="hover:text-primary transition-colors"
            >
              Marketplace
            </Link>
            <Link href="/docs" className="hover:text-primary transition-colors">
              Docs
            </Link>
            <Link
              href="/dashboard"
              className="hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/grubstudio/grubstudio"
              target="_blank"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:cursor-pointer h-8 w-8"
              >
                <Github className="h-10 w-10" />
              </Button>
            </Link>
            <Link href="/editor">
              <Button
                size="sm"
                className="hover:cursor-pointer bg-primary hover:bg-primary/90"
              >
                Try Editor
              </Button>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
