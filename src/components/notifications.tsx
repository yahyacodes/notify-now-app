"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Apple,
  PlayCircle,
  CheckCircle,
  Youtube,
  Twitter,
  Users,
  Zap,
  Bell,
} from "lucide-react";
import { Button } from "./ui/button";

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
    <div className="">
      <main className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 max-w-4xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Boost Engagement with Real-Time Notifications
          </h1>
          <div className="flex justify-center space-x-4">
            <p className="text-lg max-w-xl text-gray-600 mb-8">
              NotifyNow helps you connect with your audience instantly. Increase
              conversions, retain users, and grow your business with powerful,
              customizable notifications.
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            <div className="space-y-2 text-gray-600">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                <span>Instant setup, no coding required</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                <span>Customizable templates and designs</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                <span>Real-time analytics and insights</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                <span>Seamless integration with your stack</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            <Button className="bg-primary text-white px-6 py-3 text-lg font-semibold hover:bg-accent transition">
              Start Free Trial
            </Button>
          </div>

          <div className="inline-flex items-center bg-primary/10 text-primary text-xs font-medium px-3 py-3 rounded-full shadow-sm">
            <div className="flex items-center mr-2">
              <Bell className="w-4 h-4 mr-1" />
              <span className="font-bold">NotifyNow</span>
            </div>
            <div className="w-px h-4 mr-2" />
            <span className="mr-1.5 text-sm">Coming Soon:</span>
            <div className="flex items-center gap-2 mr-4">
              <Apple className="w-6 h-6" />
              <span className="text-sm">App Store</span>
            </div>

            <div className="w-px h-6 bg-primary" />

            <div className="flex items-center gap-2 mx-4">
              <PlayCircle className="w-6 h-6" />
              <span className="text-sm">Google Play</span>
            </div>
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
                  className="bg-white rounded-2xl shadow-lg p-4 border mb-4 pointer-events-auto"
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
