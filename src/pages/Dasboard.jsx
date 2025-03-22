import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";

const Dasboard = () => {
  const { loading: authLoading } = useSelector((state) => state.auth);
  const { loading: prfileLoading } = useSelector((state) => state.profile);
  const { loading } = useSelector((state) => state.auth);

  if (prfileLoading || authLoading) {
    return <div>Loading...</div>;
  }

  return loading ? (
    <div className="loader"></div>
  ) : (
    <div className="relative flex min-h-[calc(100vh-3.5rem)]">
      <Sidebar />
      <div className="flex-1 ">
        <div className="py-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
