import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full flex justify-between items-center gap-4">
      <p className="text-3xl text-bold">Task Web</p>
      <div className="flex justify-center items-center gap-8">
        <Link to="/" className="hover:text-red-500">
          Home
        </Link>
        <Link to="/task" className="hover:text-red-500">
          Task
        </Link>
      </div>
    </div>
  );
}

export default Header;
