import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Settings,
  DollarSign,
  Shield,
  Star,
  Ban,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { logOut } from "@/state";

const AdminSidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [showUserSubmenu, setShowUserSubmenu] = useState(false);

  const menuItems = [
    {
      path: "/admin",
      icon: LayoutDashboard,
      label: "Dashboard",
      exact: true,
    },
    {
      path: "/admin/jobs",
      icon: Briefcase,
      label: "Jobs",
      badge: "23",
    },
    {
      path: "/admin/users",
      icon: Users,
      label: "Users",
      submenu: [
        { path: "/admin/users/jobseekers", label: "Job Seekers" },
        { path: "/admin/users/employers", label: "Employers" },
        { path: "/admin/users/admins", label: "Admins" },
      ],
    },
    {
      path: "/admin/payments",
      icon: DollarSign,
      label: "Payments",
    },
    {
      path: "/admin/featured",
      icon: Star,
      label: "Featured Jobs",
    },
    {
      path: "/admin/banned",
      icon: Ban,
      label: "Banned Items",
    },
    {
      path: "/admin/settings",
      icon: Settings,
      label: "Settings",
    },
  ];

  const isActive = (path: string) => {
    if (path === "/admin" && location.pathname === "/admin") {
      return true;
    }
    return location.pathname.startsWith(path) && path !== "/admin";
  };

  return (
    <div className="bg-white w-64 min-h-screen shadow-lg flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold">Admin Panel</span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() => setShowUserSubmenu(!showUserSubmenu)}
                    className={`w-full flex items-center justify-between p-2 rounded-md ${
                      isActive(item.path)
                        ? "bg-blue-50 text-blue-600"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center">
                      <item.icon className="h-5 w-5 mr-3" />
                      <span>{item.label}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${showUserSubmenu ? "rotate-180" : ""}`}
                    />
                  </button>
                  {showUserSubmenu && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="ml-8 mt-2 space-y-1"
                    >
                      {item.submenu.map((subItem) => (
                        <li key={subItem.path}>
                          <Link
                            to={subItem.path}
                            className={`block p-2 rounded-md ${
                              location.pathname === subItem.path
                                ? "bg-blue-50 text-blue-600"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center justify-between p-2 rounded-md ${
                    isActive(item.path)
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                      {item.badge}
                    </span>
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={() => dispatch(logOut())}
          className="flex items-center text-gray-600 hover:text-gray-900 w-full"
        >
          <LogOut className="h-5 w-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

