import React, { useState } from "react";
import UserCard from "../components/userBoard/UserCard";
import CreateBlog from "../components/createBlog/CreateBlog";
import BlogsList from "../components/createBlog/BlogsList";
import "./UserDashboard.scss";
import { useAuth } from "../providers/authProvider";
import EditBlog from "../components/createBlog/EditBlog";

export default function UserDashboard() {
  const [showEdit, setshowEdit] = useState(false);
  const { loggedUser } = useAuth();


  function handleEdit() {
    setshowEdit(true);
  }

  function handleEditClose() {
    setshowEdit(false)
  }



  return (
    <div className="user-dashboard-container">
      <header className="user-dashboard-header">
        <h2>{loggedUser.userName}'s Dashboard</h2>
      </header>
      <section className="user-dashboard-components">
        <UserCard />
        <CreateBlog />
        <BlogsList handleEdit={handleEdit} showEdit={showEdit} setshowEdit={setshowEdit} />
      </section>
      {showEdit && <EditBlog handleEditClose={handleEditClose}/>}
    </div>
  );
}
