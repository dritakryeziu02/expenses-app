import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Banknote, BarChart3, Wallet } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-[#0d0d0d] flex flex-col items-center px-6">
      
      <div className="max-w-3xl text-center mt-20">
        <h1 className="text-4xl md:text-5xl font-bold dark:text-white mb-4">
          Manage Your <span className="text-blue-600">Personal Expenses</span>
          <br />
          Easily & Efficiently
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
          Track your income, expenses, bills and statistics in real time. A
          simple and powerful tool to control your finances.
        </p>

        <div className="flex gap-4 justify-center">
          <Button asChild className="px-6 py-5 text-lg">
            <a href="/login">Login</a>
          </Button>

          <Button
            asChild
            variant="secondary"
            className="px-6 py-5 text-lg dark:bg-[#1a1a1a] dark:text-white"
          >
            <a href="/register">Register</a>
          </Button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl w-full">
        <Card className="p-6 bg-white dark:bg-[#1a1a1a] flex flex-col items-center shadow-md">
          <Wallet size={40} className="text-blue-600 mb-3" />
          <h3 className="text-xl font-semibold dark:text-white mb-2">
            Track Expenses
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Add, edit and categorize all your daily financial transactions.
          </p>
        </Card>

        <Card className="p-6 bg-white dark:bg-[#1a1a1a] flex flex-col items-center shadow-md">
          <Banknote size={40} className="text-green-600 mb-3" />
          <h3 className="text-xl font-semibold dark:text-white mb-2">
            Monitor Income
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Keep track of your salary, bonuses, freelance earnings and more.
          </p>
        </Card>

        <Card className="p-6 bg-white dark:bg-[#1a1a1a] flex flex-col items-center shadow-md">
          <BarChart3 size={40} className="text-purple-600 mb-3" />
          <h3 className="text-xl font-semibold dark:text-white mb-2">
            View Statistics
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Beautiful charts to visualize your spending and savings over time.
          </p>
        </Card>
      </div>

      
      <div className="mt-20 mb-10 text-center">
        <p className="text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Personal Expenses App — All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
