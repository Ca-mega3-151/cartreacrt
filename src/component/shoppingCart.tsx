
import HeaderShoppingCart from "./headerShoppingCart"
import ListCartItems from "./listCart"

export default function ShoppingCart(){

    return (
        <div className="table-responsive container shopping-cart">
        <table className="table">
          <HeaderShoppingCart />
          <tbody>
            <ListCartItems />
       
          </tbody>
        </table>
      </div>
    )
}