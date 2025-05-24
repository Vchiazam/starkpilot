"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Bell,
  Clock,
  Code,
  ExternalLink,
  Filter,
  Github,
  GitPullRequest,
  Plus,
  Search,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function AppSidebar() {
  const menuItems = [
    { title: "Dashboard", icon: Code, href: "/dashboard", active: true },
    { title: "Tasks", icon: Clock, href: "/tasks" },
    { title: "Projects", icon: Users, href: "/projects" },
    { title: "My Contributions", icon: GitPullRequest, href: "/contributions" },
    { title: "Profile", icon: Trophy, href: "/profile" },
  ];

  return (
    <Sidebar className="border-r border-gray-800 bg-gray-950/50 backdrop-blur-xl">
      <SidebarHeader className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            StarkPilot
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={item.active}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

export default function Dashboard() {
  const [_showAddProject, setShowAddProject] = useState(false);

  const stats = [
    {
      label: "PRs Merged",
      value: "23",
      icon: GitPullRequest,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Points Earned",
      value: "1,247",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
    },
    {
      label: "Active Tasks",
      value: "5",
      icon: Clock,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Projects",
      value: "8",
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const tasks = [
    {
      id: 1,
      title: "Implement Cairo smart contract for token staking",
      project: "StarkNet DeFi",
      difficulty: "Advanced",
      points: 150,
      tags: ["Cairo", "DeFi", "Smart Contracts"],
      assignees: 3,
    },
    {
      id: 2,
      title: "Add unit tests for account abstraction",
      project: "StarkNet Core",
      difficulty: "Intermediate",
      points: 75,
      tags: ["Testing", "Account Abstraction"],
      assignees: 1,
    },
    {
      id: 3,
      title: "Update documentation for Starknet.js",
      project: "StarkNet SDK",
      difficulty: "Beginner",
      points: 25,
      tags: ["Documentation", "JavaScript"],
      assignees: 0,
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-white flex">
        <AppSidebar />

        <div className="flex-1 flex flex-col">
          {/* Top Bar */}
          <header className="border-b border-gray-800 bg-gray-950/50 backdrop-blur-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <SidebarTrigger />
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search projects, tasks, or contributors..."
                    className="pl-10 w-96 bg-gray-900/50 border-gray-700 focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </Button>
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 space-y-6">
            {/* Welcome Section */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Welcome back, John! 👋
              </h1>
              <p className="text-gray-400">
                Here&apos;s what&apos;s happening in your StarkNet journey
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold text-white">
                          {stat.value}
                        </p>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Task Feed */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Available Tasks</h2>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-700 text-gray-300"
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button
                      onClick={() => setShowAddProject(true)}
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Project
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {tasks.map((task) => (
                    <Card
                      key={task.id}
                      className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <Link href={`/task/${task.id}`}>
                              <h3 className="font-semibold text-white group-hover:text-purple-300 transition-colors mb-2">
                                {task.title}
                              </h3>
                            </Link>
                            <p className="text-gray-400 text-sm mb-3">
                              {task.project}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-gray-400">
                              <span className="flex items-center">
                                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                                {task.points} points
                              </span>
                              <Badge
                                variant="outline"
                                className="border-gray-600 text-gray-300"
                              >
                                {task.difficulty}
                              </Badge>
                              <span className="flex items-center">
                                <Users className="w-4 h-4 mr-1" />
                                {task.assignees} working
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-purple-400 hover:text-purple-300"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {task.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="bg-gray-800 text-gray-300 hover:bg-gray-700"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl border-purple-500/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start bg-gray-800 hover:bg-gray-700 text-left">
                      <Github className="w-4 h-4 mr-2" />
                      Sync GitHub Repos
                    </Button>
                    <Button className="w-full justify-start bg-gray-800 hover:bg-gray-700 text-left">
                      <Plus className="w-4 h-4 mr-2" />
                      Submit New Project
                    </Button>
                    <Button className="w-full justify-start bg-gray-800 hover:bg-gray-700 text-left">
                      <Star className="w-4 h-4 mr-2" />
                      View Leaderboard
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
                  <CardHeader>
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-white">
                          PR merged in StarkNet Core
                        </p>
                        <p className="text-xs text-gray-400">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-white">Started new task</p>
                        <p className="text-xs text-gray-400">5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm text-white">Earned 75 points</p>
                        <p className="text-xs text-gray-400">1 day ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
      {_showAddProject && <>.</>}
    </SidebarProvider>
  );
}
