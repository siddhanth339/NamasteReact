import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-center m-4 p-4 text-xl fond-bold">Cart</h1>
        <button
          className="bg-black rounded-lg p-2 m-2 text-white h-10"
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </button>
      </div>
      <div className="m-4 p-4">
        {cartItems.length === 0 ? (
          <h1>Cart is empty :(</h1>
        ) : (
          <CartItem menuDetails={cartItems}></CartItem>
        )}
      </div>
    </div>
  );
};

export default Cart;
