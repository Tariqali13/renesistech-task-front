// @flow
import React, { useState, useLayoutEffect } from 'react';
import Router from 'next/router';
import { getLocalStorageValues } from '@/constants/local-storage';
import DropDown from '@/components/inputs/drop-downs';

const SearchHeader = () => {
  const {
    first_name,
    last_name,
  } = getLocalStorageValues();
  let userName = '';
  if (!last_name) {
    userName = first_name;
  } else {
    userName = `${first_name} ${last_name}`;
  }
  const [isScroll, setIsScroll] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);
  const toggleUserOpen = () => setUserDropDown(!userDropDown);
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    Router.push('/login', '/login', { shallow: true });
  };
  return (
    <header id="header" className={`bg-primary ${isScroll && 'scrolled'}`}>
      <div className="d-flex align-items-center">
        <button type="button" className="btn toggle-menu mr-3" id="openSidebar">
          <span />
          <span />
          <span />
        </button>

        <form action="#" id="searchForm">
            <span className="btn ion-ios-search" />
            <input
              type="text"
              placeholder="Search..."
              id="searchInput"
              className="form-control"
            />
        </form>

        <ul className="header-options d-flex align-items-center">
          <DropDown
            dropDownOpen={userDropDown}
            toggleDropDown={toggleUserOpen}
            value={
              <span className="d-flex align-items-center py-2">
                <div className="avatar avatar-sm avatar-circle">
                  <img src="/images/users/thumb.jpg" alt="user" />
                </div>
                <span className="pl-2">{userName}</span>
              </span>
            }
            iconDropDown={true}
            placeHolder="Select"
          >
            <li className={`dropdown fade-in ${userDropDown && 'show'}`}>
              <div
                className={`dropdown-menu dropdown-menu-right ${userDropDown &&
                  'show'}`}
                aria-labelledby="userMenu"
              >
                <div className="dropdown-divider" />
                <div className="px-4 py-2">
                  <a
                    href="#"
                    className="btn btn-sm btn-air btn-pill btn-danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </a>
                </div>
              </div>
            </li>
          </DropDown>
        </ul>
      </div>
    </header>
  );
};
export default SearchHeader;
