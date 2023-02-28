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
    increseCartQuantity,
    decreseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <div className="pb-2">
      <img
        className="w-full h-[200px] rounded-md object-cover"
        src={imgUrl}
        alt="item"
      />
      <div className="flex justify-between p-2">
        <p>{name}</p>
        <p>{formatCurrency(price)}</p>
      </div>
      <div className="flex justify-center">
        {quantity === 0 ? (
          <button onClick={()=>increseCartQuantity(id)} className="w-full  bg-sky-700 text-sky-50 rounded-md mx-4">
            + Add To Cart
          </button>
        ) : (
          <div className="flex justify-center items-center flex-col">
            <div className="flex">
              <button
              onClick={()=>decreseCartQuantity(id)} 
                type="button"
                className="bg-sky-700 text-sky-50 rounded-md px-[10px] mr-2"
              >
                -
              </button>
              <div>
                <span>{quantity}</span>in cart
              </div>
              <button
              onClick={()=>increseCartQuantity(id)} 
                type="button"
                className="bg-sky-700 text-sky-50 rounded-md px-2 ml-2"
              >
                +
              </button>
            </div>
            <div className="mt-2">
              <button
              onClick={()=>removeFromCart(id)} 
                type="button"
                className=" bg-rose-700 text-sky-50 rounded-md px-2"
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
