import { useSelector } from "react-redux/es/hooks/useSelector";
import data from "../data.ts"
import { RootState } from '../features/store';
import { useState, useEffect } from 'react';



export default function Footer() {
  const [total, setTotal] = useState(0);
  const { items } = useSelector((state: RootState) => state.cart)
  useEffect(() => {
    const currentTotal = items.reduce((current, item) => {
      const totalPrice = +data[item.id - 1].price;
      // const totalDiscount = +data[item.id - 1].discount;
      return current + (totalPrice) * item.quantity;
    }, 0);

    setTotal(currentTotal);
  }, [items]);
  // Giả sử bạn đã import mảng Items vào từ data.ts
  // import Items from './data.ts';


  return (
    <div className="container">
      <div className="shopping-cart-footer">
        <div className="column">
          <form className="coupon-form" method="post">
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Coupon code"
            />
            <button className="btn btn-outline-primary btn-sm" type="submit">
              Apply Coupon
            </button>
          </form>
        </div>
        <div className="column text-lg">
          Subtotal: <span className="text-medium">${total}</span>
        </div>
      </div>

      <div className="shopping-cart-footer">
        <div className="column">
          <a className="btn btn-outline-secondary" href="#">
            <i className="icon-arrow-left" />
            &nbsp;Back to Shopping
          </a>
        </div>
        <div className="column">
          <a
            className="btn btn-primary"
            href="#"
            data-toast=""
            data-toast-type="success"
            data-toast-position="topRight"
            data-toast-icon="icon-circle-check"
            data-toast-title="Your cart"
            data-toast-message="is updated successfully!"
          >
            Update Cart
          </a>
          <a className="btn btn-success" href="#">
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
}
