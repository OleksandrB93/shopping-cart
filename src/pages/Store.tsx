import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

export function Store() {
  return (
    <ul className=" md:columns-2 lg:columns-4">
      {storeItems.map((item) => (
        <li key={item.id} className="bg-zinc-300 rounded-md mb-4">
            <StoreItem {...item}/>
        </li>
      ))}
    </ul>
  );
}
