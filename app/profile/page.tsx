"use client";

import {
  Calendar,
  Github,
  Star,
  GitPullRequest,
  Code,
  Trophy,
  ExternalLink,
  Share2,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Profile() {
  const profile = {
    name: "John Developer",
    username: "johndev",
    avatar: "/placeholder.svg?height=128&width=128",
    bio: "Full-stack developer passionate about StarkNet and zero-knowledge proofs. Building the future of decentralized applications.",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    githubUrl: "https://github.com/johndev",
    website: "https://johndev.com",
    stats: {
      totalContributions: 247,
      totalPoints: 3420,
      projectsContributed: 12,
      rank: 15,
      streak: 23,
    },
  };

  const achievements = [
    {
      name: "First Contribution",
      description: "Made your first contribution to a StarkNet project",
      icon: "🎯",
      earned: true,
    },
    {
      name: "Code Reviewer",
      description: "Reviewed 10+ pull requests",
      icon: "👀",
      earned: true,
    },
    {
      name: "Bug Hunter",
      description: "Found and fixed 5 critical bugs",
      icon: "🐛",
      earned: true,
    },
    {
      name: "Community Helper",
      description: "Helped 20+ developers in discussions",
      icon: "🤝",
      earned: false,
    },
    {
      name: "Cairo Master",
      description: "Contributed to 5+ Cairo projects",
      icon: "🏆",
      earned: false,
    },
    {
      name: "Documentation Hero",
      description: "Improved documentation across projects",
      icon: "📚",
      earned: true,
    },
  ];

  const recentContributions = [
    {
      id: 1,
      type: "pull_request",
      title: "Implement token staking mechanism",
      project: "StarkNet DeFi",
      status: "merged",
      date: "2 days ago",
      points: 150,
    },
    {
      id: 2,
      type: "issue",
      title: "Fix gas optimization in core functions",
      project: "StarkNet Core",
      status: "completed",
      date: "5 days ago",
      points: 100,
    },
    {
      id: 3,
      type: "pull_request",
      title: "Add comprehensive test suite",
      project: "StarkNet SDK",
      status: "merged",
      date: "1 week ago",
      points: 75,
    },
    {
      id: 4,
      type: "documentation",
      title: "Update Cairo smart contract guide",
      project: "StarkNet Docs",
      status: "merged",
      date: "2 weeks ago",
      points: 50,
    },
  ];

  const contributionData = Array.from({ length: 365 }, (_, i) => ({
    date: new Date(Date.now() - (364 - i) * 24 * 60 * 60 * 1000),
    count: Math.floor(Math.random() * 5),
  }));

  const getContributionColor = (count: number) => {
    if (count === 0) return "bg-gray-800";
    if (count === 1) return "bg-green-900";
    if (count === 2) return "bg-green-700";
    if (count === 3) return "bg-green-500";
    return "bg-green-400";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "pull_request":
        return <GitPullRequest className="w-4 h-4 text-purple-400" />;
      case "issue":
        return <Code className="w-4 h-4 text-blue-400" />;
      case "documentation":
        return <Star className="w-4 h-4 text-yellow-400" />;
      default:
        return <Code className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Profile Header */}
        <Card className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 backdrop-blur-xl border-purple-500/30 mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <Avatar className="w-32 h-32 border-4 border-purple-500/50">
                <AvatarImage src={profile.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-2xl">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-4">
                  <h1 className="text-3xl font-bold text-white">
                    {profile.name}
                  </h1>
                  <Badge
                    variant="outline"
                    className="border-purple-500 text-purple-300"
                  >
                    Rank #{profile.stats.rank}
                  </Badge>
                </div>
                <p className="text-xl text-gray-300 mb-2">
                  @{profile.username}
                </p>
                <p className="text-gray-400 mb-4 max-w-2xl">{profile.bio}</p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Joined {profile.joinDate}
                  </span>
                  <span>{profile.location}</span>
                  <a
                    href={profile.githubUrl}
                    className="flex items-center hover:text-purple-300 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                  <a
                    href={profile.website}
                    className="flex items-center hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Website
                  </a>
                </div>

                <div className="flex space-x-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-600 text-gray-300"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Profile
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">
                {profile.stats.totalContributions}
              </div>
              <div className="text-gray-400 text-sm">Contributions</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">
                {profile.stats.totalPoints}
              </div>
              <div className="text-gray-400 text-sm">Points</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">
                {profile.stats.projectsContributed}
              </div>
              <div className="text-gray-400 text-sm">Projects</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">
                #{profile.stats.rank}
              </div>
              <div className="text-gray-400 text-sm">Global Rank</div>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">
                {profile.stats.streak}
              </div>
              <div className="text-gray-400 text-sm">Day Streak</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-gray-900/50 border border-gray-700">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="contributions">Contributions</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Contribution Graph */}
            <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-xl">Contribution Activity</CardTitle>
                <p className="text-gray-400">
                  247 contributions in the last year
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-53 gap-1 mb-4">
                  {contributionData.map((day, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-sm ${getContributionColor(
                        day.count
                      )}`}
                      title={`${
                        day.count
                      } contributions on ${day.date.toDateString()}`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Less</span>
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-sm bg-gray-800"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-900"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-700"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-400"></div>
                  </div>
                  <span>More</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentContributions.slice(0, 5).map((contribution) => (
                  <div
                    key={contribution.id}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                  >
                    {getTypeIcon(contribution.type)}
                    <div className="flex-1">
                      <h3 className="font-medium text-white">
                        {contribution.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {contribution.project} • {contribution.date}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant="outline"
                        className="border-green-500 text-green-400"
                      >
                        {contribution.status}
                      </Badge>
                      <span className="text-yellow-400 flex items-center text-sm">
                        <Star className="w-4 h-4 mr-1" />
                        {contribution.points}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contributions" className="space-y-6">
            <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-xl">All Contributions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentContributions.map((contribution) => (
                  <div
                    key={contribution.id}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
                  >
                    {getTypeIcon(contribution.type)}
                    <div className="flex-1">
                      <h3 className="font-medium text-white">
                        {contribution.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {contribution.project} • {contribution.date}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant="outline"
                        className="border-green-500 text-green-400"
                      >
                        {contribution.status}
                      </Badge>
                      <span className="text-yellow-400 flex items-center text-sm">
                        <Star className="w-4 h-4 mr-1" />
                        {contribution.points}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50">
              <CardHeader>
                <CardTitle className="text-xl">Achievements</CardTitle>
                <p className="text-gray-400">
                  Unlock achievements by contributing to the StarkNet ecosystem
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border transition-all duration-300 ${
                        achievement.earned
                          ? "bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border-purple-500/30"
                          : "bg-gray-800/30 border-gray-700/50 opacity-60"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <h3
                            className={`font-semibold ${
                              achievement.earned
                                ? "text-white"
                                : "text-gray-400"
                            }`}
                          >
                            {achievement.name}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {achievement.description}
                          </p>
                        </div>
                        {achievement.earned && (
                          <Trophy className="w-5 h-5 text-yellow-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
