import { Outlet, Link, redirect } from "react-router-dom";
import './Layout.css';
const Layout = () => {
  return (
    <>
      <nav>
        <div> <Link to="/" className="red">Home</Link></div>
        <div> <Link to="/blogs" className="red">Blogs</Link></div>
        <div> <Link to="/contact" style={{textDecoration:'none'}} className="red" >Contact</Link></div>

      </nav>

      <Outlet />
    </>
  )
};

export default Layout;