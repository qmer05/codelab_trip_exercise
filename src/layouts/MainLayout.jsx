import { Link, NavLink, Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="container">
      <header className="header"></header>
      <div className="content">
        <nav className="sidebar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/trips">Trips</NavLink>
            </li>
            <li>
              <NavLink to="/guides">Guides</NavLink>
            </li>
            <li>
              <NavLink to="/trip">Trip</NavLink>
            </li>
          </ul>
        </nav>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      <footer className="footer">
        {" "}
        <p>&copy; 2024 Team B. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainLayout;
