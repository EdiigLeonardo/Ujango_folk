import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Humaanss from "./Humaanss.svg";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth); //  testing
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  return (
    <div className="dashboard form-display d-flex flex-row mx-auto p-5 m-5 justify-content-center shadow-5">
      <img src={Humaanss} alt="Login Image" />
      <div className="dashboard__container form-group mt-3">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button
          className="form-control btn btn-primary rounded-pill 
                d-grid gap-2 mt-3 dashboard__btn m-1"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
export default Dashboard;
