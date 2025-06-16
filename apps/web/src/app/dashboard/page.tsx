"use client";

import { useState } from "react";
import Link from "next/link";
import { Edit, Github, MoreHorizontal, Plus, Star, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavBar from "@/components/homePage/PagesNavBar";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("my-themes");

  const userThemes = [
    {
      id: "1",
      title: "Neon Nights",
      status: "published",
      rating: 4.8,
      downloads: 1245,
      lastUpdated: "2025-04-15",
      image: "/placeholder.svg",
    },
    {
      id: "2",
      title: "Minimal Dark",
      status: "published",
      rating: 4.2,
      downloads: 876,
      lastUpdated: "2025-03-22",
      image: "/placeholder.svg",
    },
    {
      id: "3",
      title: "Forest Theme",
      status: "draft",
      rating: null,
      downloads: null,
      lastUpdated: "2025-05-20",
      image: "/placeholder.svg",
    },
  ];

  const starredThemes = [
    {
      id: "4",
      title: "Retro Terminal",
      author: "retrohacker",
      rating: 4.7,
      downloads: 1532,
      image: "/placeholder.svg",
    },
    {
      id: "5",
      title: "Mountain View",
      author: "naturethemes",
      rating: 4.9,
      downloads: 2103,
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <NavBar />
      <main className="flex-1">
        <div className="container mx-auto  md:py-12 px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-zinc-100">
                Dashboard
              </h1>
              <p className="text-zinc-400 mt-2">
                Manage your GRUB themes and settings
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/editor">
                <Button className="hover:cursor-pointer bg-primary text-zinc-900 hover:bg-primary/90 rounded-lg px-4 py-2 text-sm font-semibold transition-colors">
                  <Plus className="mr-2 h-4 w-4" />
                  New Theme
                </Button>
              </Link>
            </div>
          </div>
          <Separator className="my-8 bg-zinc-700/50" />
          <Tabs
            defaultValue="my-themes"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="flex gap-2 bg-transparent  ">
              <TabsTrigger
                className="text-zinc-300 hover:cursor-pointer hover:bg-zinc-800 data-[state=active]:bg-zinc-700 data-[state=active]:text-primary rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                value="my-themes"
              >
                My Themes
              </TabsTrigger>
              <TabsTrigger
                className="text-zinc-300 hover:cursor-pointer hover:bg-zinc-800 data-[state=active]:bg-zinc-700 data-[state=active]:text-primary rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                value="drafts"
              >
                Drafts
              </TabsTrigger>
              <TabsTrigger
                className="text-zinc-300 hover:cursor-pointer hover:bg-zinc-800 data-[state=active]:bg-zinc-700 data-[state=active]:text-primary rounded-lg px-4 py-2 text-sm font-medium transition-colors"
                value="starred"
              >
                Starred
              </TabsTrigger>
            </TabsList>
            <TabsContent value="my-themes" className="py-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {userThemes
                  .filter((theme) => theme.status === "published")
                  .map((theme) => (
                    <Card
                      key={theme.id}
                      className="overflow-hidden bg-zinc-900/95 border-zinc-700/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="aspect-video w-full overflow-hidden bg-zinc-800">
                        <img
                          src="https://blocks.astratic.com/img/general-img-portrait.png"
                          alt={theme.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center justify-between">
                          <CardTitle className="line-clamp-1 text-zinc-100">
                            {theme.title}
                          </CardTitle>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full text-zinc-300 hover:bg-zinc-700/50 transition-colors"
                                aria-label="Theme actions"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align="end"
                              className="w-40 rounded-lg bg-zinc-900/95 backdrop-blur-sm border border-zinc-700/50 shadow-lg p-1"
                            >
                              <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800/80 rounded-md transition-colors">
                                <Edit className="h-4 w-4 text-zinc-400" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800/80 rounded-md transition-colors">
                                <Star className="h-4 w-4 text-zinc-400" />
                                View Stats
                              </DropdownMenuItem>
                              <DropdownMenuSeparator className="bg-zinc-700/50" />
                              <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-900/20 rounded-md transition-colors">
                                <Trash className="h-4 w-4 text-red-400" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <CardDescription className="text-zinc-400">
                          Last updated: {theme.lastUpdated}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between p-4 pt-0 text-zinc-400">
                        <div className="flex items-center text-sm">
                          <Star className="mr-1 h-3.5 w-3.5 fill-primary text-primary" />
                          {theme.rating}
                        </div>
                        <div className="text-sm">
                          {theme.downloads?.toLocaleString()} downloads
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="drafts" className="py-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {userThemes
                  .filter((theme) => theme.status === "draft")
                  .map((theme) => (
                    <Card
                      key={theme.id}
                      className="overflow-hidden bg-zinc-900/95 border-zinc-700/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <div className="aspect-video w-full overflow-hidden bg-zinc-800">
                        <img
                          src="https://blocks.astratic.com/img/general-img-portrait.png"
                          alt={theme.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center justify-between">
                          <CardTitle className="line-clamp-1 text-zinc-100">
                            {theme.title}
                          </CardTitle>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-full text-zinc-300 hover:bg-zinc-700/50 transition-colors"
                                aria-label="Theme actions"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align="end"
                              className="w-40 rounded-lg bg-zinc-900/95 backdrop-blur-sm border border-zinc-700/50 shadow-lg p-1"
                            >
                              <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800/80 rounded-md transition-colors">
                                <Edit className="h-4 w-4 text-zinc-400" />
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800/80 rounded-md transition-colors">
                                <Star className="h-4 w-4 text-zinc-400" />
                                Publish
                              </DropdownMenuItem>
                              <DropdownMenuSeparator className="bg-zinc-700/50" />
                              <DropdownMenuItem className="flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:bg-red-900/20 rounded-md transition-colors">
                                <Trash className="h-4 w-4 text-red-400" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <CardDescription className="text-zinc-400">
                          Last updated: {theme.lastUpdated}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-between p-4 pt-0 text-zinc-400">
                        <div className="text-sm">Draft</div>
                        <Link href="/editor">
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-zinc-300 border-zinc-700 hover:bg-zinc-700/50 transition-colors"
                          >
                            Continue Editing
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="starred" className="py-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {starredThemes.map((theme) => (
                  <Card
                    key={theme.id}
                    className="overflow-hidden bg-zinc-900/95 border-zinc-700/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="aspect-video w-full overflow-hidden bg-zinc-800">
                      <img
                        src="https://blocks.astratic.com/img/general-img-portrait.png"
                        alt={theme.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="line-clamp-1 text-zinc-100">
                        {theme.title}
                      </CardTitle>
                      <CardDescription className="text-zinc-400">
                        by {theme.author}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between p-4 pt-0 text-zinc-400">
                      <div className="flex items-center text-sm">
                        <Star className="mr-1 h-3.5 w-3.5 fill-primary text-primary" />
                        {theme.rating}
                      </div>
                      <div className="text-sm">
                        {theme.downloads.toLocaleString()} downloads
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t border-zinc-700/50 py-2 md:py-0 bg-zinc-900/95">
        <div className="container  mx-auto flex flex-col items-center justify-between gap-8 md:h-10 md:flex-row px-4">
          <p className="text-sm text-zinc-400 text-center md:text-left">
            Built by Soocil. Soon to be open source on{" "}
            <a
              href="https://github.com/grubstudio/grubstudio"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary hover:underline underline-offset-4 transition-colors"
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
