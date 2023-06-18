import { Outlet, Link, redirect } from "react-router-dom";
import './Layout.css';
const Layout = () => {
  return (
    <div className="divParent">
      <div className="divChild"><img src="https://github.com/amantalreja/verbwireCommerce/blob/main/marketplace/src/pages/lgoo.png?raw=true"/></div>
      <nav>
        <div> <Link to="/"  style={{textDecoration:'none'}} className="red">Home</Link></div>
        <div> <Link to="/blogs" style={{textDecoration:'none'}} className="red">Blogs</Link></div>
        <div> <Link to="/contact" style={{textDecoration:'none'}} className="red" >About Us</Link></div>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;