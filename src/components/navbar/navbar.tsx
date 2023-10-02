import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
        <nav className="fixed left-0 top-0 w-full bg-slate-700 pt-4 pb-4 z-10">
            <ul className="flex ps-8">
                <li className="px-3 text-white"><Link to='/'>Home</Link></li>
                <li className="px-3 text-white"><Link to='/search'>Search</Link></li>
                <li className="px-3 text-white"><Link to='/mylist'>My List</Link></li>
            </ul>
        </nav>
    </>
  );
}

export default NavBar;