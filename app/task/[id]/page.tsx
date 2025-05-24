"use client";

import {
  ArrowLeft,
  Github,
  ExternalLink,
  Star,
  Clock,
  MessageSquare,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function TaskDetail() {
  const task = {
    id: 1,
    title: "Implement Cairo smart contract for token staking",
    description: `
## Overview
We need to implement a comprehensive token staking smart contract in Cairo for the StarkNet DeFi protocol. This contract will allow users to stake their tokens and earn rewards over time.

## Requirements
- Implement staking mechanism with configurable reward rates
- Add support for multiple token types
- Include emergency withdrawal functionality
- Implement proper access controls and security measures
- Add comprehensive event logging

## Technical Details
The contract should follow the latest Cairo patterns and include:
- Proper storage management
- Gas-optimized functions
- Comprehensive error handling
- Integration with existing protocol contracts

## Acceptance Criteria
- [ ] Contract compiles without errors
- [ ] All unit tests pass
- [ ] Security audit checklist completed
- [ ] Documentation updated
- [ ] Integration tests pass
    `,
    project: "StarkNet DeFi Protocol",
    difficulty: "Advanced",
    points: 200,
    status: "open",
    createdAt: "2024-01-10",
    dueDate: "2024-01-25",
    assignee: null,
    githubIssue: "https://github.com/starknet-defi/core/issues/42",
    tags: ["Cairo", "Smart Contracts", "DeFi", "Staking"],
  };

  const comments = [
    {
      id: 1,
      author: "Alice Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      content:
        "I'm interested in taking this on. I have experience with Cairo smart contracts and have implemented similar staking mechanisms before.",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      author: "Bob Smith",
      avatar: "/placeholder.svg?height=32&width=32",
      content:
        "Great! @Alice, make sure to check out the existing token contract interfaces in the /contracts/interfaces directory.",
      timestamp: "1 hour ago",
    },
    {
      id: 3,
      author: "Project Maintainer",
      avatar: "/placeholder.svg?height=32&width=32",
      content:
        "Thanks for the interest! Please feel free to ask questions in our Discord if you need any clarification on the requirements.",
      timestamp: "30 minutes ago",
    },
  ];

  const relatedTasks = [
    {
      id: 2,
      title: "Add unit tests for staking contract",
      difficulty: "Intermediate",
      points: 75,
    },
    {
      id: 3,
      title: "Create staking UI components",
      difficulty: "Intermediate",
      points: 100,
    },
    {
      id: 4,
      title: "Implement reward calculation logic",
      difficulty: "Advanced",
      points: 150,
    },
  ];

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
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {task.title}
              </h1>
              <Badge
                variant="outline"
                className="border-yellow-500 text-yellow-400"
              >
                {task.status}
              </Badge>
            </div>
            <p className="text-gray-400">
              <Link
                href="/project/1"
                className="hover:text-purple-300 transition-colors"
              >
                {task.project}
              </Link>
              {" • "}Issue #{task.id}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Task Details */}
            <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl">Task Description</CardTitle>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <div className="whitespace-pre-wrap text-gray-300 leading-relaxed">
                  {task.description}
                </div>
              </CardContent>
            </Card>

            {/* Action Button */}
            <Card className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-xl border-purple-500/30">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">
                  Ready to contribute?
                </h3>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-8"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Mark as Started
                </Button>
                <p className="text-gray-400 text-sm mt-3">
                  This will assign the task to you and notify the project
                  maintainers
                </p>
              </CardContent>
            </Card>

            {/* Comments */}
            <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Discussion ({comments.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-4">
                    <Avatar>
                      <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {comment.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-white">
                          {comment.author}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {comment.timestamp}
                        </span>
                      </div>
                      <p className="text-gray-300">{comment.content}</p>
                    </div>
                  </div>
                ))}

                <div className="border-t border-gray-700 pt-6">
                  <div className="flex space-x-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-3">
                      <Textarea
                        placeholder="Add a comment..."
                        className="bg-gray-800 border-gray-600 focus:border-purple-500"
                      />
                      <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                        Comment
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Task Info */}
            <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-lg">Task Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Difficulty</span>
                  <Badge
                    variant="outline"
                    className="border-red-500 text-red-400"
                  >
                    {task.difficulty}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Points</span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 mr-1" />
                    {task.points}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Created</span>
                  <span className="text-white">{task.createdAt}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Due Date</span>
                  <div className="flex items-center text-orange-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {task.dueDate}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Assignee</span>
                  {task.assignee ? (
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" />
                        <AvatarFallback className="text-xs">A</AvatarFallback>
                      </Avatar>
                      <span className="text-white">{task.assignee}</span>
                    </div>
                  ) : (
                    <span className="text-gray-400">Unassigned</span>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-lg">Tags</CardTitle>
              </CardHeader>
              <CardContent>
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

            {/* Related Tasks */}
            <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-lg">Related Tasks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {relatedTasks.map((relatedTask) => (
                  <div
                    key={relatedTask.id}
                    className="p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <h4 className="font-medium text-white text-sm mb-2">
                      {relatedTask.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs">
                      <Badge
                        variant="outline"
                        className="border-gray-600 text-gray-400 text-xs"
                      >
                        {relatedTask.difficulty}
                      </Badge>
                      <span className="text-yellow-400 flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        {relatedTask.points}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
