import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tippy';

const Header = () => {
  return (
    <>
      {/* add new one */}
      <div className='md:px-32'>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              {/* toggle button in small screen */}
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <NavLink
                    to="/recipes"
                    className={({ isActive, isPending }) =>
                      isActive ? "font-bold decoration-stone-950" : ""
                    }
                  >
                    Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive, isPending }) =>
                      isActive ? "font-bold decoration-stone-950" : ""
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl md:text-3xl">
              The Recipe Room
            </Link>
          </div>
          {/* center buttons in large screen */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/recipes"
                  className={({ isActive, isPending }) =>
                    isActive ? "font-bold decoration-stone-950" : ""
                  }
                >
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive, isPending }) =>
                    isActive ? "font-bold decoration-stone-950" : ""
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn btn-ghost px-5 py-0">Log in</a>
          </div>
          {/* profile picture start */}
          <Tooltip title="Hello, user!">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/51StNHm/Lobster-Risotto.jpg" />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
          </Tooltip>
          {/* profile picture end */}
        </div>
      </div >
    </>
  );
};

export default Header;