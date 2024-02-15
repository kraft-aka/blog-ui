import React, { useState, useEffect } from "react";
import UserCard from "../components/userBoard/UserCard";
import CreateBlog from "../components/createBlog/CreateBlog";
import BlogsList from "../components/createBlog/BlogsList";
import "./UserDashboard.scss";
import { useAuth } from "../providers/authProvider";

export default function UserDashboard() {
  const { loggedUser } = useAuth();

  return (
    <div className="user-dashboard-container">
      <header className="user-dashboard-header">
        <h2>{loggedUser.userName}'s Dashboard</h2>
      </header>
      <section className="user-dashboard-components">
        <UserCard />
        <CreateBlog />
        <BlogsList />
      </section>
    </div>
  );
}
