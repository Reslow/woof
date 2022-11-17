import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import EditPage from "../../components/minSida/EditPage";
export default function kennel() {
  const router = useRouter();
  const { id } = router.query;
  const currentUser = useSelector((state) => state.login);
  axios
    .get(
      "http://localhost:3005/api/getprofile",
      { params: { id: id } },
      {
        withCredentials: true,
        credentials: "include",
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.message);
    });

  return (
    <>
      {currentUser.userId === parseInt(id) && (
        <div>
          <EditPage />
        </div>
      )}
      <h1>profile</h1>
      <div id="uppgifter">
        <h1>KennelNamn</h1>
        <h1>ort</h1>
        <h1>Ras</h1>
      </div>
      <div id="About">
        <h1>Om oss</h1>
        <p>En massa text</p>
      </div>
      <div id="Våra hundar">
        <h1>title</h1>
        <p>En massa text</p>
      </div>
    </>
  );
}
