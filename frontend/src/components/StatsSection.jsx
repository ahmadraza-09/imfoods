import React from "react";
import { Users, Package, Award, Truck } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { icon: Users, number: "50,000+", label: "Happy Customers" },
    { icon: Package, number: "1,000+", label: "Products Available" },
    { icon: Award, number: "25+", label: "Awards Won" },
    { icon: Truck, number: "100+", label: "Cities Served" },
  ];

  return (
    <section className="py-5 bg-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-green-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
