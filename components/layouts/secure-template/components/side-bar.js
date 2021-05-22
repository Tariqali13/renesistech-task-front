// @flow
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SideBar = () => {
  const router = useRouter();
  const [isCollapse, setIsCollapse] = useState(false);
  useEffect(() => {
    if (isCollapse) {
      document.body.classList.add('iconic-sidebar');
    } else {
      document.body.classList.remove('iconic-sidebar');
    }
  }, [isCollapse]);
  return (
    <React.Fragment>
      <aside id="sidebar" className="sidebar-primary">
        <div className="sidebar-header d-flex align-items-center">
          <a href="#" className="brand">
            Social Task
          </a>
          <button type="button" className="btn p-0 ml-auto" id="hideSidebar">
            <i className="ion-md-arrow-back h3" />
          </button>
          <button
            type="button"
            className="btn toggle-menu"
            id="toggleSidebar"
            onClick={() => setIsCollapse(!isCollapse)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav className="navbar">
          <ul
            className="navbar-nav"
            data-scrollable="true"
            style={{
              overflowX: 'hidden',
              maxHeight: '500px',
            }}
          >
              <li className="nav-item nav-header">Browse</li>
              <li className="nav-item">
                <Link href="/" as="/">
                  <a
                    className={`nav-link ${router.pathname === '/' &&
                      'active'}`}
                  >
                    <i className="la la-home" />
                    <span>Home</span>
                  </a>
                </Link>
              </li>
          </ul>
        </nav>
      </aside>
    </React.Fragment>
  );
};
export { SideBar };
