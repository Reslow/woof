import React, { useEffect, useState } from "react";
import router from "next/router";
import HittaHundContainer from "../components/HittaKennel/HittaHundContainer";
export default function HittaKennel() {
  const [kenneldb, setKenneldb] = useState([]);
  const [breedsdb, setBreedsdb] = useState([]);
  const [groupdb, setGroupdb] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("http://localhost:3005/api/kennels", {
          withCredntials: true,
          credentials: "include",
        });
        const data = await res.json();
        console.log(data);
        setKenneldb(data.kennel);
        setBreedsdb(data.breeds);
        setGroupdb(data.groups);
      } catch (e) {
        router.push("/");
        console.log(e.message);
      }
    }
    getData();
  }, []);

  return (
    <>
      <HittaHundContainer
        kennelList={kenneldb}
        breedList={breedsdb}
        groupList={groupdb}
      />
    </>
  );
}
