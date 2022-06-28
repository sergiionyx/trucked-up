import JobList from "../components/JobList";
import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_PROJECTS } from "../utils/queries";
import Auth from "../utils/auth";
// import JobForm from "../components/ThoughtForm";

const Dashboard = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_PROJECTS);
  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  //   const { data: userData } = useQuery(QUERY_ME_BASIC);
//   if (data) {

// }
const projects = data?.getProjects || [];
console.log(projects);
const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {/* {loggedIn && (
          <div className="col-12 mb-3">
            <JobForm />
          </div>
        )} */}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <JobList projects={projects} title="Some Feed for Thought(s)..." />
          )}
        </div>
        {/* {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null} */}
      </div>
    </main>
  );
};

export default Dashboard;