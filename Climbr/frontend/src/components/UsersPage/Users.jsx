import React from "react";

import UserSearchForm from "./UserSearchForm";

function Users() {
  return (
    <div className="users-page-wrapper">
      <div className="users-page-header">
        <h1 className="users-page-title">Who's Your Next Partner?</h1>
        <UserSearchForm />
      </div>
    </div>
  );
}

export default Users;
