import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const StatsCard = ({ title, value, icon: Icon, color, trend }) => {
  const colorMap = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      iconBg: "bg-gradient-to-tr from-blue-400 to-blue-600",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      iconBg: "bg-gradient-to-tr from-green-400 to-green-600",
    },
    yellow: {
      bg: "bg-yellow-50",
      text: "text-yellow-600",
      iconBg: "bg-gradient-to-tr from-yellow-400 to-yellow-600",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      iconBg: "bg-gradient-to-tr from-purple-400 to-purple-600",
    },
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-6 hover:scale-[1.02] transition-transform duration-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-semibold text-gray-500 mb-1 uppercase">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {trend && (
            <div
              className={`flex items-center gap-2 text-sm mt-2 ${
                trend.isUp ? "text-green-500" : "text-red-500"
              }`}
            >
              {trend.isUp ? (
                <TrendingUp className="w-5 h-5" />
              ) : (
                <TrendingDown className="w-5 h-5" />
              )}
              <span>{trend.value}% from last month</span>
            </div>
          )}
        </div>
        <div
          className={`p-4 rounded-xl ${colorMap[color].iconBg} text-white shadow-md`}
        >
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
