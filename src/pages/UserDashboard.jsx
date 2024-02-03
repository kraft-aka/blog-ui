import React from "react";
import UserCard from "../components/userBoard/UserCard";
import UserCardUpdate from "../components/userBoard/UserCardUpdate";
import CreateBlog from "../components/createBlog/CreateBlog";
import BlogsList from "../components/createBlog/BlogsList";
import "./UserDashboard.scss";

export default function UserDashboard() {
  return (
    <div className="user-dashboard-container">
      <header className="user-dashboard-header">
        <h2>User's Dashboard</h2>
      </header>
      <section className="user-dashboard-components">
        <UserCard />
        <CreateBlog />
        <BlogsList />
        <UserCardUpdate />
      </section>
    </div>
  );
}
