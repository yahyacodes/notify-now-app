"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  CheckCircle,
  Youtube,
  Twitter,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";

// Notification data (unchanged)
const notifications = [
  {
    id: 1,
    title: "New YouTube Video!",
    message: "Watch the latest update on our channel.",
    icon: Youtube,
  },
  {
    id: 2,
    title: "New Newsletter",
    message: "New Newsletter has been released.",
    icon: Twitter,
  },
  {
    id: 3,
    title: "Milestone reached",
    message: "Our App has reached a new milestone.",
    icon: Users,
  },
  {
    id: 4,
    title: "New feature available",
    message: "Check out our new feature.",
    icon: Zap,
  },
];

type Notification = {
  id: number;
  title: string;
  message: string;
  icon?: any;
  isVisible: boolean;
  timestamp: Date;
};

function formatTimestamp(date: Date) {
  const now = new Date();
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / 60000);

  if (diffInMinutes < 1) return "now";
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInMinutes < 24 * 60) {
    const hours = Math.floor(diffInMinutes / 60);
    return `${hours}h ago`;
  }
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function Component() {
  const [notificationState, setNotificationState] = useState<Notification[]>(
    notifications.map((notification) => ({
      ...notification,
      isVisible: false,
      timestamp: new Date(),
    }))
  );

  useEffect(() => {
    notificationState.forEach((notification, index) => {
      setTimeout(() => {
        setNotificationState((prevState) =>
          prevState.map((n) =>
            n.id === notification.id
              ? { ...n, isVisible: true, timestamp: new Date() }
              : n
          )
        );
      }, index * 1000);
    });

    const totalDuration = notificationState.length * 1000 + 8000;

    setTimeout(() => {
      setNotificationState((prevState) =>
        prevState.map((n) => ({ ...n, isVisible: false }))
      );
    }, totalDuration);
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bell className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-blue-800">NotifyNow</span>
        </div>
        <nav className="space-x-4">
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-600 hover:text-blue-600"
          >
            FAQ
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </nav>

        <div className="absolute right-[36rem] top-[10rem]">
          <p className="text-gray-600 text-sm font-medium">
            NotifyNow in Action
          </p>
          <svg
            version="1.1"
            id="ios7_x5F_arrows_1_"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            y="0"
            viewBox="0 0 128 128"
            className="w-10 h-10 mt-2 mx-10 text-blue-400 fill-current"
          >
            <g id="_x32_9_1_">
              <path
                d="M121.7 90.6 85.9 54.7l-4.5 4.5 28.1 28.2H50c-22.4 0-40.5-18.2-40.5-40.6S27.7 6.2 50 6.2V0C24.2 0 3.3 21 3.3 46.8S24.2 93.6 50 93.6h60l-28.8 28.9 4.5 4.5 36.1-36.2-.1-.1v-.1z"
                id="icon_12_"
              />
            </g>
          </svg>
        </div>
      </header>

      <main className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Boost Engagement with Real-Time Notifications
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            NotifyNow helps you connect with your audience instantly. Increase
            conversions, retain users, and grow your business with powerful,
            customizable notifications.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition">
              Start Free Trial
            </button>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold border border-blue-600 hover:bg-blue-50 transition">
              Watch Demo
            </button>
          </div>
          <div className="">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">
              Why Choose NotifyNow?
            </h2>
            <ul className="grid grid-cols-2 gap-4 text-left text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                <span>Instant setup, no coding required</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                <span>Customizable templates and designs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                <span>Real-time analytics and insights</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                <span>Seamless integration with your stack</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <div className="fixed right-4 top-20 w-96 space-y-4 pointer-events-none z-50">
        <AnimatePresence>
          {notificationState.map(
            (notification) =>
              notification.isVisible && (
                <motion.div
                  key={notification.id}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200 mb-4 pointer-events-auto"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      {notification.icon && (
                        <notification.icon className="h-6 w-6 text-blue-500" />
                      )}
                    </div>
                    <div className="ml-3 w-0 flex-1">
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-medium text-gray-900">
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray-500 ml-2">
                          {formatTimestamp(notification.timestamp)}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
