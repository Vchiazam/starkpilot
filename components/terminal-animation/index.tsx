import React from "react";
const commands = [
  {
    text: "$ git clone https://github.com/starknet-defi/core.git",
    delay: 50,
  },
  { text: "Cloning into 'core'...", delay: 30, color: "text-gray-400" },
  {
    text: "remote: Enumerating objects: 1247, done.",
    delay: 20,
    color: "text-gray-400",
  },
  {
    text: "remote: Total 1247 (delta 0), reused 0 (delta 0)",
    delay: 20,
    color: "text-gray-400",
  },
  {
    text: "Receiving objects: 100% (1247/1247), 2.3 MiB | 4.2 MiB/s, done.",
    delay: 25,
    color: "text-gray-400",
  },
  { text: "$ cd core && npm install", delay: 60 },
  {
    text: "📦 Installing dependencies...",
    delay: 30,
    color: "text-blue-400",
  },
  {
    text: "✓ @starknet-io/starknet.js@5.24.3",
    delay: 20,
    color: "text-green-400",
  },
  { text: "✓ cairo-lang@0.12.0", delay: 20, color: "text-green-400" },
  { text: "✓ hardhat@2.19.1", delay: 20, color: "text-green-400" },
  { text: "$ starkpilot init --connect-github", delay: 70 },
  {
    text: "🚀 Initializing StarkPilot...",
    delay: 40,
    color: "text-purple-400",
  },
  {
    text: "✓ Connected to GitHub (@Vchiazam)",
    delay: 40,
    color: "text-green-400",
  },
  {
    text: "✓ Syncing StarkNet repositories...",
    delay: 35,
    color: "text-green-400",
  },
  {
    text: "✓ Found 42 open issues across 8 projects",
    delay: 30,
    color: "text-green-400",
  },
  {
    text: "✓ Analyzing contribution history...",
    delay: 35,
    color: "text-green-400",
  },
  {
    text: "✓ Profile created successfully!",
    delay: 30,
    color: "text-green-400",
  },
  { text: "$ starkpilot status", delay: 60 },
  {
    text: "📊 Your StarkNet Contribution Stats:",
    delay: 30,
    color: "text-cyan-400",
  },
  {
    text: "   • Total Points: 3,420 ⭐",
    delay: 25,
    color: "text-yellow-400",
  },
  { text: "   • Active Tasks: 5 🔥", delay: 25, color: "text-orange-400" },
  { text: "   • Global Rank: #15 🏆", delay: 25, color: "text-purple-400" },
  { text: "   • Streak: 23 days 🔥", delay: 25, color: "text-red-400" },
  { text: "$ starkpilot discover --difficulty=advanced", delay: 70 },
  {
    text: "🔍 Discovering advanced tasks...",
    delay: 40,
    color: "text-blue-400",
  },
  {
    text: "Found 12 advanced tasks matching your skills:",
    delay: 30,
    color: "text-gray-400",
  },
  {
    text: "  1. Implement Cairo smart contract (200 pts) 💎",
    delay: 25,
    color: "text-cyan-300",
  },
  {
    text: "  2. Optimize gas usage in DeFi protocol (150 pts) ⚡",
    delay: 25,
    color: "text-cyan-300",
  },
  {
    text: "  3. Add zero-knowledge proof verification (300 pts) 🔐",
    delay: 25,
    color: "text-cyan-300",
  },
  { text: "$ starkpilot start-task 1", delay: 60 },
  {
    text: "🎯 Starting task: Implement Cairo smart contract",
    delay: 35,
    color: "text-green-400",
  },
  { text: "✓ Task assigned to you", delay: 25, color: "text-green-400" },
  { text: "✓ Repository forked", delay: 25, color: "text-green-400" },
  {
    text: "✓ Development branch created",
    delay: 25,
    color: "text-green-400",
  },
  { text: "→ Ready to contribute! 🚀", delay: 30, color: "text-purple-400" },
  {
    text: "$ # Time to build the future of StarkNet! 💫",
    delay: 50,
    color: "text-gray-500",
  },
];

export default function TerminalAnimation({
  scrollContainerRef,
}: {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [currentLine, setCurrentLine] = React.useState(0);
  const [currentChar, setCurrentChar] = React.useState(0);
  const [showCursor, setShowCursor] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (currentLine >= commands.length) {
      const resetTimer = setTimeout(() => {
        setCurrentLine(0);
        setCurrentChar(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }

    const currentCommand = commands[currentLine];
    if (currentChar < currentCommand.text.length) {
      const timer = setTimeout(() => {
        setCurrentChar((prev) => prev + 1);
      }, currentCommand.delay || 50);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar]);

  // Smart auto-scroll
  React.useEffect(() => {
    const el = scrollContainerRef?.current;
    if (!el) return;

    const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 60; // within 60px

    if (isNearBottom) {
      el.scrollTo({
        top: el.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [currentLine, currentChar, scrollContainerRef]);

  return (
    <div className="space-y-1 text-sm relative">
      {commands.slice(0, currentLine).map((command, index) => (
        <div key={index} className={command.color || "text-green-400"}>
          {command.text}
        </div>
      ))}
      {currentLine < commands.length && (
        <div className={commands[currentLine].color || "text-green-400"}>
          {commands[currentLine].text.slice(0, currentChar)}
          {showCursor && (
            <span className="bg-cyan-400 text-gray-900 ml-1 animate-pulse">
              ▋
            </span>
          )}
        </div>
      )}
    </div>
  );
}
