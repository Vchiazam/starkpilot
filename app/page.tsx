"use client";

import TerminalAnimation from "@/components/terminal-animation";
import HeroSection from "@/components/terminal-animation/text";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Github, Trophy, Users, Zap } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  const parentScrollRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen max-w-[2000px] mx-auto  bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white ">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-14 p-6 backdrop-blur-sm bg-white/5 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            StarkPilot
          </span>
        </div>
        <div className="flex items-center space-x-4">
          {/* <span className="text-sm text-gray-400">Powered by OnlyDust</span> */}
          <Button
            variant="outline"
            className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
          >
            <Github className="w-4 h-4 mr-2" />
            Continue with GitHub
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <HeroSection />
            {/* <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 animate-pulse rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-sm">
                <Star className="w-4 h-4 mr-2 text-yellow-400 animate-spin" />
                The future of open-source on StarkNet
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Contribute.
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Track.
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Get Noticed.
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                The ultimate contribution tracker and community dashboard for
                StarkNet developers. Connect, contribute, and showcase your
                impact in the ecosystem.
              </p>
            </div> */}

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#">
                {/* <Link href="/dashboard"> */}
                <Button
                  size="lg"
                  className="bg-gradient-to-r disabled:cursor-not-allowed disabled:pointer-events-none from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg group"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Github className="w-5 h-5 mr-2" />
                  Continue with GitHub
                  <ArrowRight
                    className={`w-5 h-5 ml-2 transition-transform ${
                      isHovered ? "translate-x-1" : ""
                    }`}
                  />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
              >
                View Demo
              </Button>
            </div>
          </div>

          {/* 3D Terminal Animation */}
          <div className="relative">
            <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-700/50 p-6 shadow-2xl">
              <CardContent
                ref={parentScrollRef}
                className="p-0 max-h-[250px] overflow-y-auto"
              >
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4">
                    starkpilot-terminal
                  </span>
                </div>
                <div className="font-mono text-xs opacity-20 space-y-1">
                  <div className="text-green-400">$ starkpilot init</div>
                  <div className="text-gray-400">✓ Connected to GitHub</div>
                  <div className="text-gray-400">
                    ✓ Syncing StarkNet repositories...
                  </div>
                  <div className="text-gray-400">✓ Found 42 open issues</div>
                </div>
                <TerminalAnimation scrollContainerRef={parentScrollRef} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {/* Built for StarkNet Hackers */}
            Engineered by StarkNet Builders. For StarkNet Builders
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to contribute and grow in the StarkNet ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className=" bg-gradient-to-br from-purple-900/20 to-purple-800/20 backdrop-blur-xl border-purple-500/30 hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 group cursor-pointer">
            <CardContent className="p-8 text-center group-hover:bg-gradient-to-br group-hover:from-purple-900/40 group-hover:to-purple-800/40 rounded-lg transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-purple-500 transition-all duration-500">
                <Code className="w-8 h-8 text-white group-hover:drop-shadow-lg group-hover:text-purple-100" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-200 transition-colors duration-300">
                Track Contributions
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Monitor your PRs, issues, and commits across all StarkNet
                projects in one beautiful dashboard.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-900/20 to-cyan-800/20 backdrop-blur-xl border-cyan-500/30 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 group cursor-pointer">
            <CardContent className="p-8 text-center group-hover:bg-gradient-to-br group-hover:from-cyan-900/40 group-hover:to-cyan-800/40 rounded-lg transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/50 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-cyan-500 transition-all duration-500">
                <Users className="w-8 h-8 text-white group-hover:drop-shadow-lg group-hover:text-cyan-100" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-200 transition-colors duration-300">
                Discover Projects
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Discover exciting open-source projects and issues tailored to
                your skills and passions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-900/20 to-pink-800/20 backdrop-blur-xl border-pink-500/30 hover:border-pink-400/50 hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 group cursor-pointer">
            <CardContent className="p-8 text-center group-hover:bg-gradient-to-br group-hover:from-pink-900/40 group-hover:to-pink-800/40 rounded-lg transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-500/50 group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-pink-500 transition-all duration-500">
                <Trophy className="w-8 h-8 text-white group-hover:drop-shadow-lg group-hover:text-pink-100" />
              </div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-pink-200 transition-colors duration-300">
                Showcase Impact
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                Build your reputation with a gamified profile that highlights
                your contributions and achievements.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-6 py-20">
        <Card className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 backdrop-blur-xl border-purple-500/30 p-12 text-center">
          <CardContent className="p-0">
            <h2 className="text-3xl font-bold mb-4">
              Ready to level up your contributions?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join the StarkNet developer community and start making an impact
              today.
            </p>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-4 text-lg"
              >
                <Github className="w-5 h-5 mr-2" />
                Get Started Now
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>Made for StarkNet Hackers • Powered by OnlyDust & StarkPilot</p>
        </div>
      </footer>
    </div>
  );
}
