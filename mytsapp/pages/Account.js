import { useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import router from "next/router";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function Account() {
  const currentUser = useSelector((state) => state.login);
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();
    axios
      .get(
        "http://localhost:3005/api/logout",

        {
          withCredentials: true,
        }
      )
      .then(() => {
        dispatch(logout());
        router.push("/Login");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <>
      <h1>profil</h1>
      <button
        onClick={(e) => handleLogout()}
        type="button"
        className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span>Logga ut</span>
      </button>
      <h2>{currentUser.username}</h2>
      <h2>{currentUser.role}</h2>
      <h2>{currentUser.email}</h2>

      {currentUser.role === "CREATER_USER" && (
        <>
          <h1>EDIT PROFILE</h1>

          <span>Profil</span>
          <Link
            href="http://localhost:3000/kennel/[id]"
            as={`/kennel/${currentUser.userId}`}
          >
            <a>profil</a>
          </Link>
        </>
      )}
    </>
  );
}
