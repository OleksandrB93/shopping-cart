import { IoMdClose } from "react-icons/io";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json"

type Props = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: Props) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div>
      <div
        onClick={closeCart}
        className={`${
          isOpen
            ? "fixed inset-0 backdrop-blur-sm bg-white/30 scrollbar-hide"
            : "hidden"
        } transition duration-500  `}
      ></div>
      {isOpen && (
        <div>
          <div className="absolute w-[300px] bg-zinc-300  shadow-xl top-0 right-0 h-screen transition duration-500 pt-6">
            <div className="p-2 pt-[45px] flex justify-between items-center ">
              Cart
              <button
                onClick={closeCart}
                className=" w-6 h-6 flex justify-center items-center rounded-full cursor-pointer transition duration-300 hover:bg-zinc-400"
              >
                <IoMdClose size={22} />
              </button>
            </div>
            <div>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
      <div className="flex justify-end ms-auto fw-bold fs-5 mr-4">
        Total{" "}
        {formatCurrency(
          cartItems.reduce((total, cartItem) => {
            const item = storeItems.find((i) => i.id === cartItem.id);
            return total + (item?.price || 0) * cartItem.quantity;
          }, 0)
        )}
      </div>
          </div>
        </div>
      )}
    </div>
  );
}
