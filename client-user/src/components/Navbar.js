import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="border-b border-black py-4">
      <div className="px-24 mx-auto grid grid-cols-2 items-center justify-between">
        <div>
          <div className="text-5xl font-bold text-sky-800 mb-1">
          <Link to={'/'}>
            Science News
          </Link>
          </div>
          <div className="text-sm font-sans">
            INDEPENDENT JOURNALISM SINCE 1921
          </div>
        </div>
        <ul className="flex justify-end gap-8 font-sans text-md">
          <li>ALL TOPICS</li>
          <li>LIFE</li>
          <li>HUMANS</li>
          <li>EARTH</li>
          <li>SPACE</li>
          <li>CORONAVIRUS</li>
        </ul>
        <div></div>
      </div>
    </div>
  );
}
