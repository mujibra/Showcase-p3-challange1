import logo from "../button.png";

export default function Navbar() {
  return (
    <div>
      <div className="flex w-full justify-center">
        <img className="h-24" src={logo} alt="" />
      </div>
      <button
        type="button"
        className="ml-5 bg-white py-2 px-3 rounded-md text-sm leading-4 font-medium text-gray-700 hover:bg-cyan-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Dashboard
      </button>
      <button
        type="button"
        className="ml-5 bg-white py-2 px-3 rounded-md text-sm leading-4 font-medium text-gray-700 hover:bg-cyan-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Categories
      </button>
      <button
        type="button"
        className="ml-5 bg-white py-2 px-3 rounded-md text-sm leading-4 font-medium text-gray-700 hover:bg-cyan-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Register Admin
      </button>
      <button
        type="button"
        className="ml-5 bg-white py-2 px-3 rounded-md text-sm leading-4 font-medium text-gray-700 hover:bg-cyan-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Sign Out
      </button>
    </div>
  );
}
