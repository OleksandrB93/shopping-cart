import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
<div>
<div className="flex items-center m-2">
      <img
        className="w-[110px] h-[75px] object-cover"
        src={item.imgUrl}
        alt="cart"
      />
      <div className="pl-2">
        <div className="text-sm">
          {item.name}
          {"  "}
          {quantity > 1 && (
            <span className="">
              <span className="text-xs text-zinc-600"> x</span>
              <span className="text-xs">{quantity}</span>
            </span>
          )}
        </div>
        <div className="text-xs text-zinc-600">
          {formatCurrency(item.price)}
        </div>
      </div>
      <div className="flex items-center ml-auto">
        <div className="text-xs">{formatCurrency(item.price * quantity)}</div>
        <button
          className=" bg-slate-400 rounded-md px-2 ml-[2px]"
          onClick={() => removeFromCart(item.id)}
        >
          X
        </button>
      </div>
           
    </div>
</div>
  );
}
