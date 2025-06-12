"use client";

import Link from "next/link";
import {
  ArrowRight,
  Github,
  Star,
  Terminal,
  Code,
  Palette,
  Zap,
  Users,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Fixed JSON strings to ensure valid syntax and consistent rendering
export const grubStudioThemeString = `{
  "titleText": "Welcome to Linux",
  "desktopImage": "background.png",
  "desktopColor": "#1a1a1a",
  "terminalFont": "JetBrains Mono 16",
  "bootMenu": {
    "left": "20%",
    "top": "25%",
    "width": "60%",
    "height": "50%",
    "itemColor": "#ffffff",
    "selectedItemColor": "#ff9248"
  }
}`;

export const secondDummyCode = `{
  "itemHeight": 40,
  "itemSpacing": 8
}`;

export default function LandingPage() {
  const dummyCode = grubStudioThemeString;
  const seconDummyCode = secondDummyCode;

  return (
    <div className="flex min-h-screen flex-col gradient-bg select-none">
      {/* Floating Navigation */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="flex items-center gap-6 glass rounded-full px-6 py-3 shadow-lg">
          <Link href="/" className="font-bold text-lg text-primary">
            GrubStudio
          </Link>
          <div className="hidden md:flex items-center gap-4 text-sm">
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
              rel="noreferrer"
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

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div className="space-y-8 slide-in-left">
              <Badge
                variant="secondary"
                className="bg-primary/10 flex gap-3 font-mono w-80 h-10 text-primary border-primary/20 hover:bg-primary/20 items-center"
              >
                <Star className="w-6 h-6" />
                | 1.2k |
                <Github className="w-6 h-6" />
              </Badge>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="text-primary">Grub</span>Studio
                </h1>

                {/* Simple text animation */}
                <div className="text-animate-container ">
                  <div className="text-animate  text-2xl sm:text-3xl  lg:text-4xl font-bold text-primary">
                    Design
                  </div>
                  <div className="text-animate text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                    Preview
                  </div>
                  <div className="text-animate text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                    Share
                  </div>
                </div>

                <div className="text-2xl lg:text-3xl font-bold">
                  <span className="text-primary">GRUB</span> THEMES
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link href="/editor">
                  <Button
                    size="lg"
                    className="h-12 w-40 px-8 hover:cursor-pointer bg-primary hover:bg-primary/90 pulse-glow"
                  >
                    Try Editor
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/marketplace">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-12 w-auto px-8 hover:cursor-pointer border-primary/20 hover:bg-primary/5"
                  >
                    Browse Themes
                  </Button>
                </Link>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                <Badge
                  variant="secondary"
                  className="bg-muted/50 text-md hover:bg-muted/70 transition-colors"
                >
                  <Code size={42} className="w-6 h-6 text-primary mr-2" />
                  Real-time Editor
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-muted/50 text-md hover:bg-muted/70 transition-colors"
                >
                  <Terminal className="w-6 h-6 text-primary mr-2" />
                  Live Preview
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-muted/50 text-md hover:bg-muted/70 transition-colors"
                >
                  <Palette className="w-6 h-6 text-primary mr-2" />
                  Theme Marketplace
                </Badge>
              </div>
            </div>

            {/* Right Preview */}
            <div className="relative slide-in-right">
              {/* Floating Code Editor */}
              <div className="absolute -top-8 -left-8 z-10 glass rounded-lg p-4 shadow-lg code-glow max-w-sm float-animation">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-muted-foreground ml-2">
                    theme.txt
                  </span>
                </div>
                <pre className=" text-xs font-mono text-muted-foreground leading-relaxed">
                  <code>
                    {dummyCode}
                    <br />
                    <span className="text-primary font-semibold">#ff9248</span>
                    <br />
                    {seconDummyCode}
                  </code>
                </pre>
              </div>

              {/* GRUB Preview Window */}
              <div className=" bg-black rounded-xl p-8 shadow-2xl preview-glow border border-primary/20 hover-lift">
                <div className="space-y-6">
                  {/* GRUB Header */}
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Welcome to Linux
                    </h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                  </div>

                  {/* Boot Menu */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 bg-primary/20 border border-primary/40 rounded-lg px-6 py-4 transition-all hover:bg-primary/30">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Terminal className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">
                          Ubuntu 22.04 LTS
                        </div>
                        <div className="text-primary/80 text-sm">
                          Latest kernel
                        </div>
                      </div>
                      <div className="text-primary">▶</div>
                    </div>

                    <div className="flex items-center gap-4 bg-white/5 rounded-lg px-6 py-4 hover:bg-white/10 transition-all cursor-pointer">
                      <div className="w-8 h-8 bg-muted/20 rounded-lg flex items-center justify-center">
                        <Terminal className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white/80 font-medium">
                          Advanced options
                        </div>
                        <div className="text-white/50 text-sm">
                          Recovery mode
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-white/5 rounded-lg px-6 py-4 hover:bg-white/10 transition-all cursor-pointer">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white/80 font-medium">
                          Windows 11
                        </div>
                        <div className="text-white/50 text-sm">UEFI/GPT</div>
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="text-center text-white/60 text-sm pt-4 border-t border-white/10">
                    Use ↑↓ keys to select • Enter to boot • E to edit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Editor Preview Section - Now Second */}
        <section className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Experience the <span className="text-primary">Editor</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time theme editing with instant preview. See your changes as
              you type.
            </p>
          </div>

          <div className="glass rounded-2xl overflow-hidden shadow-2xl hover-lift">
            <div className="bg-muted/30 px-6 py-3 border-b flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm font-medium">GrubStudio Editor</span>
              <div className="ml-auto">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary"
                >
                  <Zap className="w-3 h-3 mr-1" />
                  Live Preview
                </Badge>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 h-96">
              {/* File Explorer */}
              <div className="bg-muted/10 border-r p-4">
                <h4 className="font-medium mb-3 text-sm flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-primary" />
                  Project Files
                </h4>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-2 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    theme.txt
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:bg-muted/30 rounded-lg cursor-pointer transition-colors">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    background.png
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:bg-muted/30 rounded-lg cursor-pointer transition-colors">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    icons/
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 text-muted-foreground hover:bg-muted/30 rounded-lg cursor-pointer transition-colors">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    fonts/
                  </div>
                </div>
              </div>

              {/* Code Editor */}
              <div className="bg-background/50 p-4 font-mono text-sm">
                <div className="text-muted-foreground mb-3 text-xs">
                  # GRUB Theme Configuration
                </div>
                <div className="space-y-1">
                  <div>
                    <span className="text-blue-400">title-text:</span>{" "}
                    <span className="text-green-400">"GrubStudio Demo"</span>
                  </div>
                  <div>
                    <span className="text-blue-400">desktop-image:</span>{" "}
                    <span className="text-green-400">"background.png"</span>
                  </div>
                  <div>
                    <span className="text-blue-400">desktop-color:</span>{" "}
                    <span className="text-green-400">"#1a1a1a"</span>
                  </div>
                  <div>
                    <span className="text-blue-400">terminal-font:</span>{" "}
                    <span className="text-green-400">"JetBrains Mono 16"</span>
                  </div>
                  <div className="mt-3">
                    <div>
                      <span className="text-purple-400">+ boot_menu</span>{" "}
                      <span className="text-yellow-400">{"{"}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-400">left</span> ={" "}
                      <span className="text-orange-400">20%</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-400">item_color</span> ={" "}
                      <span className="text-green-400">"#ffffff"</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-400">selected_item_color</span>{" "}
                      ={" "}
                      <span className="text-primary font-semibold">
                        "#ff9248"
                      </span>
                    </div>
                    <div>
                      <span className="text-yellow-400">{"}"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preview */}
              <div className="bg-black p-4 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="text-white font-bold text-lg">
                    GrubStudio Demo
                  </div>
                  <div className="space-y-2">
                    <div className="bg-primary/20 border border-primary/40 px-4 py-2 rounded-lg text-white text-sm font-medium">
                      Ubuntu 22.04 LTS
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg text-white/70 text-sm hover:bg-white/20 transition-colors cursor-pointer">
                      Advanced options
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-lg text-white/70 text-sm hover:bg-white/20 transition-colors cursor-pointer">
                      Windows 11
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Now Third */}
        <section className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Powerful <span className="text-primary">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create stunning GRUB themes with ease and
              precision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass rounded-xl p-6 hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Preview</h3>
              <p className="text-muted-foreground">
                See your changes instantly with our live preview panel. No need
                to reboot your system to test themes.
              </p>
            </div>

            <div className="glass rounded-xl p-6 hover-lift animate-delay-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Editor</h3>
              <p className="text-muted-foreground">
                Powerful editor with syntax highlighting, auto-completion, and
                error detection for GRUB theme files.
              </p>
            </div>

            <div className="glass rounded-xl p-6 hover-lift animate-delay-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Theme Marketplace</h3>
              <p className="text-muted-foreground">
                Browse, download, and share themes with the community. Rate
                themes and discover new designs.
              </p>
            </div>
          </div>
        </section>

        {/* Community Section - New Fourth Section */}
        <section className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Join the <span className="text-primary">Community</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with developers, share your creations, and contribute to
              the open-source project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center glass rounded-xl p-6 hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">2.5k+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>

            <div className="text-center glass rounded-xl p-6 hover-lift animate-delay-100">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">150+</div>
              <div className="text-sm text-muted-foreground">
                Themes Created
              </div>
            </div>

            <div className="text-center glass rounded-xl p-6 hover-lift animate-delay-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">10k+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </div>

            <div className="text-center glass rounded-xl p-6 hover-lift animate-delay-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">1.2k</div>
              <div className="text-sm text-muted-foreground">GitHub Stars</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="https://github.com/grubstudio/grubstudio"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 hover:cursor-pointer hover:bg-primary/5"
              >
                <Github className="mr-2 h-5 w-5" />
                Contribute on GitHub
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 glass">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <p className="text-sm text-muted-foreground">
            Built by the community. Open source on{" "}
            <a
              href="https://github.com/grubstudio/grubstudio"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
