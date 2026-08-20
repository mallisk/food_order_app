import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

function cart(){
   const cartItems = useSelector((store) => store.cart.items);
   const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
   
   const dispatch = useDispatch();
   const handlClick = () => {
    dispatch(clearCart());
   }
return(
    <div className="mx-auto max-w-2xl p-6">
        <h1 className="text-2xl font-bold">Your cart</h1>
        {cartItems.length === 0 ? <p className="mt-4 text-gray-600">Your cart is empty. Add a dish from a restaurant menu.</p> : <>
        <button className="mt-4 rounded bg-red-500 px-4 py-2 text-white" onClick={handlClick}>
            Clear cart
            </button>
        <ul className="mt-4 divide-y divide-gray-200 rounded border border-gray-200 p-4">
            {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between py-3">
                  <span>{item.name} <span className="text-gray-500">× {item.quantity}</span></span>
                  <span className="font-semibold">₹{((item.price * item.quantity) / 100).toFixed(0)}</span>
                </li>
            ))}
        </ul>
        <p className="mt-4 text-right text-lg font-bold">Total: ₹{(cartTotal / 100).toFixed(0)}</p>
        </>}
    </div>
)
}

export default cart;
