import {
  Bell,
  CircleArrowLeft,
  Hospital,
  Link,
  Settings,
  User,
  UserRoundCog,
} from "lucide-react";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./dashstyle.css";
import DashbordSidebarLayout from "../../components/Siedbar/Dshbordsiedbar";
export default function Dashbord() {
  const navto = useNavigate();
  return (
    <>
      <div className="bg-slate-400 flex">
        {/* siedpar */}
        <DashbordSidebarLayout />
        {/* actiones */}

        {/* content */}
        <div className="flex-1 p-4 bg-gray-100 transition-all duration-300>">
          <div className="flex justify-between">
            <div className="flex items-center ">
              {" "}
              <span className="text-blue-600 ">
                {" "}
                <Hospital />
              </span>
              <span className="ms-3 text-lg">Hospital</span>
            </div>
            <div className="flex text-lg">
              <button className="mx-2">
                <User />
              </button>
              <button>
                <Bell />{" "}
              </button>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
