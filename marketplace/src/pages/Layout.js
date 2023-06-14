import { Outlet, Link } from "react-router-dom";
import './Layout.css';
const Layout = () => {
  return (
    <>
      <nav>
        <div> <Link to="/">Home</Link></div>
        <div> <Link to="/blogs">Blogs</Link></div>
        <div> <Link to="/contact">Contact</Link></div>

      </nav>

      <Outlet />
    </>
  )
};

export default Layout;