import { IoMdClose } from "react-icons/io";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

type Props = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: Props) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <div
      onClick={closeCart}
      className={`${
        isOpen ? "fixed inset-0 backdrop-blur-sm bg-white/30 z-10" : "hidden"
      }transition duration-500  `}
    >
      <div className="absolute w-[300px] bg-zinc-300  shadow-xl right-0 h-screen transition duration-500 ">
        <div className="p-4 flex justify-between items-center">
            Cart
          <button
            onClick={closeCart}
            className=" w-6 h-6 flex justify-center items-center rounded-full cursor-pointer transition duration-300 hover:bg-zinc-400"
          >
            <IoMdClose size={22} />
          </button>
        </div>
      <div>
        {cartItems.map((item)=>(
            <CartItem key={item.id} {...item} />
        ))}
      </div>
      </div>
    </div>
  );
}
