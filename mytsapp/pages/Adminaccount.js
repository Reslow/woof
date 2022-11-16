import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import router from "next/router";
import Layout from "../components/minSida/admin/Layout";

export default function Adminaccount() {
  const [adminData, setAdminData] = useState([]);

  useEffect(() => {
    async function getAdmin() {
      try {
        const response = await fetch("http://localhost:3005/api/admin", {
          withCredntials: true,
          credentials: "include",
        });
        const data = await response.json();
        console.log(data);
        setAdminData(data);
      } catch (error) {
        router.push("/");
      }
    }
    getAdmin();
  }, []);
  return (
    <>
      <div>
        <Layout adminData={adminData} />
      </div>
    </>
  );
}
