"use client";

import {
  ArrowLeft,
  Github,
  ExternalLink,
  Star,
  Users,
  GitFork,
  Clock,
  Code,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function ProjectDetail() {
  const project = {
    name: "StarkNet DeFi Protocol",
    description:
      "A comprehensive DeFi protocol built on StarkNet featuring automated market makers, lending pools, and yield farming capabilities.",
    repository: "starknet-defi/core",
    stars: 1247,
    forks: 89,
    contributors: 23,
    language: "Cairo",
    tags: ["DeFi", "Cairo", "Smart Contracts", "AMM", "Lending"],
    progress: 68,
    totalTasks: 45,
    completedTasks: 31,
    activeTasks: 8,
    pendingTasks: 6,
  };

  const contributors = [
    {
      name: "Alice Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      contributions: 47,
    },
    {
      name: "Bob Smith",
      avatar: "/placeholder.svg?height=32&width=32",
      contributions: 32,
    },
    {
      name: "Carol Davis",
      avatar: "/placeholder.svg?height=32&width=32",
      contributions: 28,
    },
    {
      name: "David Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
      contributions: 19,
    },
    {
      name: "Eve Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      contributions: 15,
    },
  ];

  const tasks = [
    {
      id: 1,
      title: "Implement liquidity pool smart contract",
      status: "in-progress",
      difficulty: "Advanced",
      points: 200,
      assignee: "Alice Chen",
      dueDate: "2024-01-15",
    },
    {
      id: 2,
      title: "Add slippage protection mechanism",
      status: "open",
      difficulty: "Intermediate",
      points: 100,
      assignee: null,
      dueDate: "2024-01-20",
    },
    {
      id: 3,
      title: "Create comprehensive test suite",
      status: "completed",
      difficulty: "Intermediate",
      points: 75,
      assignee: "Bob Smith",
      dueDate: "2024-01-10",
    },
    {
      id: 4,
      title: "Optimize gas usage in core functions",
      status: "open",
      difficulty: "Advanced",
      points: 150,
      assignee: null,
      dueDate: "2024-01-25",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "in-progress":
        return <Clock className="w-4 h-4 text-blue-500" />;
      case "open":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-500/50 bg-green-500/10";
      case "in-progress":
        return "border-blue-500/50 bg-blue-500/10";
      case "open":
        return "border-yellow-500/50 bg-yellow-500/10";
      default:
        return "border-gray-500/50 bg-gray-500/10";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/dashboard">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {project.name}
            </h1>
            <p className="text-gray-400 mt-2">{project.description}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Banner */}
            <Card className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-xl border-purple-500/30">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {project.name}
                      </h2>
                      <p className="text-gray-300">{project.repository}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="bg-gray-800 hover:bg-gray-700">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                    <Button
                      variant="outline"
                      className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="w-5 h-5 text-yellow-500 mr-1" />
                      <span className="text-xl font-bold">{project.stars}</span>
                    </div>
                    <p className="text-gray-400 text-sm">Stars</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <GitFork className="w-5 h-5 text-blue-500 mr-1" />
                      <span className="text-xl font-bold">{project.forks}</span>
                    </div>
                    <p className="text-gray-400 text-sm">Forks</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-5 h-5 text-green-500 mr-1" />
                      <span className="text-xl font-bold">
                        {project.contributors}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">Contributors</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Code className="w-5 h-5 text-purple-500 mr-1" />
                      <span className="text-xl font-bold">
                        {project.language}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">Language</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Project Progress</span>
                    <span className="text-white font-semibold">
                      {project.progress}%
                    </span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{project.completedTasks} completed</span>
                    <span>{project.activeTasks} active</span>
                    <span>{project.pendingTasks} pending</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
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

            {/* Tasks */}
            <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-xl">Project Tasks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tasks.map((task) => (
                  <Card
                    key={task.id}
                    className={`border transition-all duration-300 hover:border-purple-500/50 ${getStatusColor(
                      task.status
                    )}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {getStatusIcon(task.status)}
                            <Link href={`/task/${task.id}`}>
                              <h3 className="font-semibold text-white hover:text-purple-300 transition-colors">
                                {task.title}
                              </h3>
                            </Link>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <Badge
                              variant="outline"
                              className="border-gray-600 text-gray-300"
                            >
                              {task.difficulty}
                            </Badge>
                            <span className="flex items-center">
                              <Star className="w-4 h-4 mr-1 text-yellow-500" />
                              {task.points} points
                            </span>
                            <span>Due: {task.dueDate}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          {task.assignee ? (
                            <div className="flex items-center space-x-2">
                              <Avatar className="w-6 h-6">
                                <AvatarImage src="/placeholder.svg?height=24&width=24" />
                                <AvatarFallback className="text-xs">
                                  {task.assignee
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm text-gray-300">
                                {task.assignee}
                              </span>
                            </div>
                          ) : (
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                            >
                              Start Task
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contributors */}
            <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-lg">Top Contributors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contributors.map((contributor, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage
                          src={contributor.avatar || "/placeholder.svg"}
                        />
                        <AvatarFallback>
                          {contributor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-white">{contributor.name}</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-gray-800 text-gray-300"
                    >
                      {contributor.contributions}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start bg-gray-800 hover:bg-gray-700">
                  <Github className="w-4 h-4 mr-2" />
                  Clone Repository
                </Button>
                <Button className="w-full justify-start bg-gray-800 hover:bg-gray-700">
                  <Star className="w-4 h-4 mr-2" />
                  Star Project
                </Button>
                <Button className="w-full justify-start bg-gray-800 hover:bg-gray-700">
                  <Users className="w-4 h-4 mr-2" />
                  Join Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
