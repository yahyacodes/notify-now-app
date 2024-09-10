"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bell,
  MessageSquare,
  Calendar,
  AlertCircle,
  Mail,
  Phone,
  X,
} from "lucide-react";

const icons = {
  Reminder: <Bell className="h-8 w-8 text-blue-500" />,
  Message: <MessageSquare className="h-8 w-8 text-green-500" />,
  Calendar: <Calendar className="h-8 w-8 text-red-500" />,
  Weather: <AlertCircle className="h-8 w-8 text-yellow-500" />,
  Email: <Mail className="h-8 w-8 text-purple-500" />,
  Call: <Phone className="h-8 w-8 text-indigo-500" />,
};

const notificationData = [
  {
    type: "Reminder",
    title: "Team Meeting",
    message: "Daily standup in 10 minutes",
  },
  {
    type: "Message",
    title: "John Doe",
    message: "Hey, can we reschedule our meeting?",
  },
  {
    type: "Calendar",
    title: "Dentist Appointment",
    message: "Tomorrow at 2:00 PM",
  },
  {
    type: "Weather",
    title: "Weather Alert",
    message: "Heavy rain expected this evening",
  },
  {
    type: "Email",
    title: "Project Update",
    message: "New designs are ready for review",
  },
  { type: "Call", title: "Missed Call", message: "Mom called 5 minutes ago" },
  {
    type: "Reminder",
    title: "Pay Bills",
    message: "Electricity bill due in 2 days",
  },
  {
    type: "Message",
    title: "Error",
    message: "Something went wrong",
  },
  {
    type: "Message",
    title: "Sarah",
    message: "Don't forget to bring the documents!",
  },
  {
    type: "Calendar",
    title: "Flight to New York",
    message: "Departure at 9:00 AM",
  },
  {
    type: "Email",
    title: "Account Security",
    message: "Unusual login attempt detected",
  },
];

const NotificationCard = ({
  icon,
  title,
  message,
  time,
  onDismiss,
}: {
  icon: React.ReactNode;
  title: string;
  message: string;
  time: string;
  onDismiss: () => void;
}) => {
  if (!icon) {
    throw new Error("Icon is required");
  }

  if (!title) {
    throw new Error("Title is required");
  }

  if (!message) {
    throw new Error("Message is required");
  }

  if (!time) {
    throw new Error("Time is required");
  }

  if (!onDismiss) {
    throw new Error("onDismiss is required");
  }

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-2xl p-4 shadow-lg mb-4 border border-white border-opacity-20 relative"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">{icon}</div>
        <div className="flex-grow">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-700">{message}</p>
          <p className="text-xs text-gray-500 mt-1">{time}</p>
        </div>
        <button
          onClick={onDismiss}
          className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          aria-label="Dismiss notification"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </motion.div>
  );
};

export default function Component() {
  const [notifications, setNotifications] = useState<any[]>([]);

  const addNotification = () => {
    const newNotification = {
      ...notificationData[Math.floor(Math.random() * notificationData.length)],
      id: Date.now(),
      time: "Now",
    };
    if (!notifications) {
      throw new Error("Notifications is null or undefined");
    }
    setNotifications((prev) => {
      if (!prev) {
        throw new Error("Notifications array is null or undefined");
      }
      return [newNotification, ...prev.slice(0, 4)];
    });
  };

  const dismissNotification = (id: any) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        // 30% chance to add a new notification every 3 seconds
        addNotification();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen mt-40 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4 ">
        <AnimatePresence initial={false}>
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              icon={icons[notification.type]}
              title={notification.title}
              message={notification.message}
              time={notification.time}
              onDismiss={() => dismissNotification(notification.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
