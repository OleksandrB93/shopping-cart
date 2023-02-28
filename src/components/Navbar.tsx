import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div>
      <nav className="flex sticky top-0 items-center bg-slate-100 drop-shadow-md mb-4 py-2 px-6">
        <NavLink className="mx-4  ml-0" to={"/"}>
          Home
        </NavLink>
        <NavLink className="mx-4" to={"/store"}>
          Store
        </NavLink>
        <NavLink className="mx-4" to={"/about"}>
          About
        </NavLink>

        <div className="relative ml-auto">
          {cartQuantity > 0 && (
            <button
              onClick={openCart}
              type="button"
              className="hover:bg-sky-700 hover:text-white border-solid border-[1px] border-sky-700 rounded-full p-2"
            >
              <SlBasket size={25} className="text-white-900 " />
            </button>
          )}
          <div className="absolute text-white top-6 left-6 bg-rose-600 border-[1px] border-rose-700 rounded-full py-0 px-2">
            {cartQuantity}
          </div>
        </div>
      </nav>
      <main className="px-4 py-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
