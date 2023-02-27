import { Suspense } from "react";
import { Outlet,NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <nav className="bg-slate-100 drop-shadow-md mb-4 py-2 px-4">
        <NavLink to={"/"}>Home</NavLink> 
        <NavLink to={"/store"}>Store</NavLink> 
        <NavLink to={"/about"}>About</NavLink>
      </nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
