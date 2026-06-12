import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice/cartSlice";
import { RootState } from "../store/store";
import { useEffect } from "react";

interface ButtonProps {
  className?: string;
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity: number;
  };
  disabled?: () => boolean;
}

export default function Button({ className, product }: ButtonProps) {

  const cart = useSelector((state: RootState) => state.cart.cart);
  const total = useSelector((state: RootState) => state.cart.total);
  // const quantity = useSelector((state: RootState) => state.cart.quantity);

  const dispatch = useDispatch();

  const isInCart = cart.some((item) => item.id === product.id);
  // console.log('main product', product);

  // const disableBtn = () => quantity === 0;

  const addProductToCart = () => {
    if (!isInCart) {
      dispatch(addToCart(product));
      // console.log('product', product);
      // console.log(total);
      // console.log('cart', cart);
    }
  };

  useEffect(() => {
    // console.log('addding to cart', cart);
    // console.log('total', total);
  }, [cart, total]);

  return (
    <button
      // disabled={disableBtn()}
      className={`bg-[#C3E3F1] capitalize border-none rounded-md text-[#3084A9] py-1 px-3 ${className}`}
      onClick={addProductToCart}
    >
      {isInCart ? "In Cart" : "Add to Cart"}
    </button>
  );
}
