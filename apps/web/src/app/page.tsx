import Link from "next/link"
import { ArrowRight, Github, Star, Terminal, Code, Palette } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col gradient-bg">
      {/* Floating Navigation */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <nav className="flex items-center gap-6 bg-background/80 backdrop-blur-md border rounded-full px-6 py-3 shadow-lg">
          <Link href="/" className="font-bold text-lg text-primary">
            GrubStudio
          </Link>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <Link href="/marketplace" className="hover:text-primary transition-colors">
              Marketplace
            </Link>
            <Link href="/docs" className="hover:text-primary transition-colors">
              Docs
            </Link>
            <Link href="/dashboard" className="hover:text-primary transition-colors">
              Dashboard
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/grubstudio/grubstudio" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/editor">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
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
            <div className="space-y-6">
              <div className="inline-flex items-center text-xl gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full  font-mono">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-muted-foreground">|</span>
                <span >1.2k</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  <span className="text-primary">Grub</span>Studio
                </h1>

                {/* Simple text animation */}
                <div className="text-animate-container">
                  <div className="text-animate text-xl sm:text-2xl lg:text-3xl font-bold text-primary">Design</div>
                  <div className="text-animate text-xl sm:text-2xl lg:text-3xl font-bold text-primary">Preview</div>
                  <div className="text-animate text-xl sm:text-2xl lg:text-3xl font-bold text-primary">Share</div>
                </div>

                <div className="text-xl lg:text-2xl font-bold">
                  <span className="text-primary">GRUB</span> THEMES
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/editor">
                  <Button size="lg" className="h-10 px-6 bg-primary hover:bg-primary/90">
                    Try Editor
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/marketplace">
                  <Button variant="outline" size="lg" className="h-10 px-6 border-primary/20 hover:bg-primary/5">
                    Browse Themes
                  </Button>
                </Link>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-full text-xs">
                  <Code className="h-3 w-3 text-primary" />
                  Real-time Editor
                </div>
                <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-full text-xs">
                  <Terminal className="h-3 w-3 text-primary" />
                  Live Preview
                </div>
                <div className="flex items-center gap-2 bg-muted/50 px-3 py-2 rounded-full text-xs">
                  <Palette className="h-3 w-3 text-primary" />
                  Theme Marketplace
                </div>
              </div>
            </div>

            {/* Right Preview */}
            <div className="relative">
              {/* Floating Code Editor */}
              <div className="absolute -top-8 -left-8 z-10 bg-card border rounded-lg p-4 shadow-lg code-glow max-w-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-muted-foreground ml-2">theme.txt</span>
                </div>
                <pre className="text-xs font-mono text-muted-foreground leading-relaxed">
                  {`# GrubStudio Theme
title-text: "Welcome to Linux"
desktop-image: "background.png"
desktop-color: "#1a1a1a"
terminal-font: "JetBrains Mono 16"

+ boot_menu {
  left = 20%
  top = 25%
  width = 60%
  height = 50%
  item_color = "#ffffff"
  selected_item_color = "`}
                  <span className="text-primary">#ff9248</span>
                  {`"
  item_height = 40
  item_spacing = 8
}`}
                </pre>
              </div>

              {/* GRUB Preview Window */}
              <div className="bg-black rounded-xl p-8 shadow-2xl preview-glow border border-primary/20">
                <div className="space-y-6">
                  {/* GRUB Header */}
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome to Linux</h2>
                    <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                  </div>

                  {/* Boot Menu */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 bg-primary/20 border border-primary/40 rounded-lg px-6 py-4 transition-all">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Terminal className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">Ubuntu 22.04 LTS</div>
                        <div className="text-primary/80 text-sm">Latest kernel</div>
                      </div>
                      <div className="text-primary">▶</div>
                    </div>

                    <div className="flex items-center gap-4 bg-white/5 rounded-lg px-6 py-4 hover:bg-white/10 transition-all cursor-pointer">
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                        <Terminal className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white/80 font-medium">Advanced options</div>
                        <div className="text-white/50 text-sm">Recovery mode</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-white/5 rounded-lg px-6 py-4 hover:bg-white/10 transition-all cursor-pointer">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white/80 font-medium">Windows 11</div>
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

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Powerful <span className="text-primary">GRUB</span> Theme Editor
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Create stunning boot screen themes with real-time preview, code editing, and a growing marketplace of
              community themes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 hover:bg-card/80 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Terminal className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-time Preview</h3>
              <p className="text-sm text-muted-foreground">
                See your changes instantly with our live preview panel. No need to reboot your system to test themes.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 hover:bg-card/80 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Code Editor</h3>
              <p className="text-sm text-muted-foreground">
                Powerful editor with syntax highlighting for GRUB theme files, auto-completion, and error detection.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 hover:bg-card/80 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Theme Marketplace</h3>
              <p className="text-sm text-muted-foreground">
                Browse, download, and share themes with the community. Rate themes and discover new designs.
              </p>
            </div>
          </div>
        </section>

        {/* Editor Preview Section */}
        <section className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Editor Preview</h2>
            <p className="text-base text-muted-foreground">Experience the power of real-time theme editing</p>
          </div>

          <div className="bg-card/30 backdrop-blur-sm border rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-muted/50 px-6 py-3 border-b flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm font-medium">GrubStudio Editor</span>
            </div>

            <div className="grid lg:grid-cols-3 h-96">
              {/* File Explorer */}
              <div className="bg-muted/20 border-r p-4">
                <h4 className="font-medium mb-3 text-sm">Files</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2 bg-primary/10 text-primary px-2 py-1 rounded">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    theme.txt
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 text-muted-foreground hover:bg-muted/50 rounded cursor-pointer">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    background.png
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 text-muted-foreground hover:bg-muted/50 rounded cursor-pointer">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    icons/
                  </div>
                </div>
              </div>

              {/* Code Editor */}
              <div className="bg-background/50 p-4 font-mono text-sm">
                <div className="text-muted-foreground mb-2"># GRUB Theme Configuration</div>
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
                  <div className="mt-2">
                    <div>
                      <span className="text-purple-400">+ boot_menu</span>{" "}
                      <span className="text-yellow-400">{"{"}</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-400">left</span> = <span className="text-orange-400">20%</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-400">item_color</span> ={" "}
                      <span className="text-green-400">"#ffffff"</span>
                    </div>
                    <div className="ml-4">
                      <span className="text-blue-400">selected_item_color</span> ={" "}
                      <span className="text-primary">"#ff9248"</span>
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
                  <div className="text-white font-bold">GrubStudio Demo</div>
                  <div className="space-y-1">
                    <div className="bg-primary/20 border border-primary/40 px-3 py-1 rounded text-white text-sm">
                      Ubuntu 22.04 LTS
                    </div>
                    <div className="bg-white/10 px-3 py-1 rounded text-white/70 text-sm">Advanced options</div>
                    <div className="bg-white/10 px-3 py-1 rounded text-white/70 text-sm">Windows 11</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-card/30 backdrop-blur-sm">
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
  )
}
