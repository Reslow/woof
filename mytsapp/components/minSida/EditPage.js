import EditTheme from "./creator/panel/menu/Theme/EditTheme";
import { useState } from "react";
import { update } from "../../store/profileSlice";
export default function EditPage() {
  const [title, setTitle] = useState("");
  const [presentation, setPresentation] = useState("");
  const [bg, setBg] = useState("");
  const [textColor, setTextColor] = useState("");
  const [font, setFont] = useState("");
  const [theme, setTheme] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3005/api/saveProfile",
        {
          title: title,
          presentation: presentation,
          bg: theme.bgColor,
          textColor: theme.textColor,
          font: theme.selectedFont,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch(update(res.data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <>
      <form className="space-y-6" action="#" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Rubrik
          </label>
          <div className="mt-1">
            <input
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              autoComplete=""
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="Text"
            className="block text-sm font-medium text-gray-700"
          >
            presentation
          </label>
          <div className="mt-1">
            <textarea
              id="presentation"
              name="presentation"
              type="presentation"
              value={presentation}
              onChange={(e) => setPresentation(e.target.value)}
              required
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <EditTheme setTheme={setTheme} />
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            klar
          </button>
        </div>
      </form>
    </>
  );
}
