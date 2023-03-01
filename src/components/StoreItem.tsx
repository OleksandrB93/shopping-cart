import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: Props) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <div className="relative pb-12">
      <img
        className="w-full h-[200px] rounded-md object-cover"
        src={imgUrl}
        alt="item"
      />
      <div className="flex justify-between p-2">
        <p>{name}</p>
        <p>{formatCurrency(price)}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-12 flex justify-center">
        {quantity === 0 ? (
          <button
            onClick={() => increaseCartQuantity(id)}
            className="w-full h-8  bg-sky-700 text-sky-50 rounded-md mx-4"
          >
            + Add To Cart
          </button>
        ) : (
          <div className="flex justify-center items-center flex-col">
            <div className="flex">
              <button
                onClick={() => decreaseCartQuantity(id)}
                type="button"
                className="bg-sky-700 text-sky-50 rounded-md px-[10px] mr-2"
              >
                -
              </button>
              <div>
                <span className="text-sm">{quantity}</span>
                <span className="text-sm"> in cart</span>
              </div>
              <button
                onClick={() => increaseCartQuantity(id)}
                type="button"
                className="bg-sky-700 text-sky-50 rounded-md px-2 ml-2"
              >
                +
              </button>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => removeFromCart(id)}
                type="button"
                className="text-xs bg-rose-700 text-sky-50 rounded-md  px-2"
              >
                remove
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
