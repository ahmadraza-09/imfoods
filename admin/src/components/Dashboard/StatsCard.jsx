import React from "react";

const StatsCard = ({ title, value, icon: Icon, color, trend }) => {
  const colorClasses = {
    blue: "bg-blue-500 text-blue-600",
    green: "bg-green-500 text-green-600",
    yellow: "bg-yellow-500 text-yellow-600",
    purple: "bg-purple-500 text-purple-600",
  };

  const bgColorClasses = {
    blue: "bg-blue-50",
    green: "bg-green-50",
    yellow: "bg-yellow-50",
    purple: "bg-purple-50",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {trend && (
            <p
              className={`text-sm mt-2 ${
                trend.isUp ? "text-green-600" : "text-red-600"
              }`}
            >
              {trend.isUp ? "↗️" : "↘️"} {trend.value}% from last month
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${bgColorClasses[color]}`}>
          <Icon className={`h-6 w-6 ${colorClasses[color].split(" ")[1]}`} />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
