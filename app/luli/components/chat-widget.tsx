"use client";

import type React from "react";

import { MessageCircle, Minimize2, Send, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "agent";
  timestamp: Date;
}

interface ChatWidgetProps {
  messages?: Message[];
  onSendMessage?: (message: string) => void;
  isTyping?: boolean;
  agentName?: string;
  agentAvatar?: string;
  brandColor?: string;
}

export function ChatWidget({
  messages = [
    {
      id: "1",
      text: "Hello! How can I help you today?",
      sender: "agent",
      timestamp: new Date(Date.now() - 60000),
    },
    {
      id: "2",
      text: "Hi there! I have a question about your services.",
      sender: "user",
      timestamp: new Date(Date.now() - 30000),
    },
    {
      id: "3",
      text: "Of course! I'd be happy to help. What would you like to know?",
      sender: "agent",
      timestamp: new Date(Date.now() - 15000),
    },
  ],
  onSendMessage = (message: string) => console.log("Send message:", message),
  isTyping = false,
  agentName = "Support Agent",
  agentAvatar = "/placeholder.svg?height=32&width=32",
  brandColor = "bg-blue-600",
}: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      // Focus input when chat opens
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimized, messages]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      {/* Chat Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`${brandColor} hover:scale-110 transition-all duration-200 ease-out shadow-lg hover:shadow-xl rounded-full p-4 text-white group relative`}
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Chat with us
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`bg-white rounded-lg shadow-2xl transition-all duration-300 ease-out ${
            isMinimized ? "h-14" : "h-[500px]"
          } w-[360px] max-w-[calc(100vw-2rem)] flex flex-col overflow-hidden border border-gray-200`}
        >
          {/* Header */}
          <div
            className={`${brandColor} text-white p-4 flex items-center justify-between`}
          >
            <div className="flex items-center space-x-3">
              <img
                src={agentAvatar || "/placeholder.svg"}
                alt={agentName}
                className="w-8 h-8 rounded-full border-2 border-white/20"
              />
              <div>
                <h3 className="font-semibold text-sm">{agentName}</h3>
                <p className="text-xs opacity-90">
                  {isTyping ? "Typing..." : "Online"}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                <Minimize2 size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded transition-colors"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] ${
                        message.sender === "user"
                          ? "bg-blue-600 text-white rounded-l-lg rounded-tr-lg"
                          : "bg-white text-gray-800 rounded-r-lg rounded-tl-lg border border-gray-200"
                      } px-3 py-2 shadow-sm`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user"
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-r-lg rounded-tl-lg border border-gray-200 px-3 py-2 shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className={`${brandColor} disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-2 rounded-lg hover:opacity-90 transition-all duration-200 flex items-center justify-center`}
                    aria-label="Send message"
                  >
                    <Send size={16} />
                  </button>
                </div>

                {/* Powered by */}
                <div className="mt-2 text-center">
                  <p className="text-xs text-gray-500">
                    Powered by <span className="font-semibold">ChatWidget</span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
