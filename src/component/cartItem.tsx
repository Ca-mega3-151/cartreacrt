

import Items from "../data";
import {  removeItem, changeQuantity } from "../features/shoppingCart.slide";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { RootState } from "../features/store";

export default function CartItem() {
  const itemsCart = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()
  return (
    <>
      {itemsCart.map(item => (
        <tr key={Items[item.id - 1].id}>
          <td>
            <div className="product-item">
              <a className="product-thumb" href="#">
                <img
                  src={Items[item.id - 1].src}
                  alt="Product"
                />
              </a>
              <div className="product-info">
                <h4 className="product-title">
                  <a href="#">{Items[item.id - 1].title}</a>
                </h4>
                <span>
                  <em>Size:</em> {Items[item.id - 1].size}
                </span>
                <span>
                  <em>Color:</em> {Items[item.id - 1].color}
                </span>
              </div>
            </div>
          </td>
          <td className="text-center">
            <div className="count-input">
              <select className="form-control"
                onChange={(e) => dispatch(changeQuantity({ id: item.id, quantity: +e.target.value }))}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </td>
          <td className="text-center text-lg text-medium">${+Items[item.id - 1].price * item.quantity}</td>
          <td className="text-center text-lg text-medium">${Items[item.id - 1].discount}</td>
          <td className="text-center">
            <a
              className="remove-from-cart"
              href="#"
              data-toggle="tooltip"
              title=""
              data-original-title="Remove item"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Delete
            </a>
          </td>
        </tr>
      ))}
    </>
  );
}
