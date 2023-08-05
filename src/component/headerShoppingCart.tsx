
import { useDispatch } from "react-redux";
import { removeAll } from "../features/shoppingCart.slide";



export default function HeaderShoppingCart() {
  const dispatch = useDispatch();



  return (
    <thead>
      <tr>
        <th>Product Name</th>
        <th className="text-center">Quantity</th>
        <th className="text-center">Subtotal</th>
        <th className="text-center">Discount</th>
        <th className="text-center">
          <a className="btn btn-sm btn-outline-danger" onClick={() => dispatch(removeAll())}>
            Clear Cart
          </a>
        </th>
      </tr>
    </thead>
  );
}
