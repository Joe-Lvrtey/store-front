import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/cartSlice/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import Checkout from "./Checkout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";
import { setActive } from "../../store/logsSlice/logSlice";

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [step, setStep] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  const dispatch = useDispatch();

  const handleDelete = (item: any) => dispatch(deleteItem(item));
  const handleIncreaseQuantity = (itemId: number) =>
    dispatch(increaseQuantity(itemId));
  const handleDecreaseQuantity = (itemId: number) =>
    dispatch(decreaseQuantity(itemId));

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(Boolean(user));
    });

    return () => unsubscribe();
  }, []);

  const goToNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleProceedToCheckout = () => {
    if (!isAuthenticated) {
      dispatch(setActive());
      return;
    }

    goToNextStep();
  };

  const goToPrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="w-[85%] mx-auto my-0">

      <div className="my-10 flex items-center gap-2">
        {step > 1 && (
          <button
            onClick={goToPrevStep}
            className="flex items-center gap-2 text-[#9B9B9B] hover:text-[#292D32] transition-colors"
          >
            <ArrowLeft className="text-[#292D32]" />
            <span className="font-['DM-Sans'] text-sm md:text-base">Back</span>
          </button>
        )}
      </div>

      {/* Stepper */}
      <div className="text-center mb-8">
        <header>
          <h3 className="text-[#000000] font-semibold text-xl md:text-4xl mb-6">
            {step === 1 && "Shopping Cart"}
            {step === 2 && "Checkout Details"}
            {step === 3 && "Order Complete"}
          </h3>
        </header>
        <div className="flex justify-center items-center gap-6 md:gap-10">
          {[1, 2, 3].map((currentStep) => (
            <div key={currentStep} className="flex flex-col items-center gap-2">
              <span
                className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium ${step === currentStep ? "bg-black text-white" : "bg-[#B1B5C3] text-white"
                  }`}
              >
                {currentStep}
              </span>
              <span
                className={`text-sm ${step === currentStep ? "text-black font-semibold" : "text-[#B1B5C3]"
                  }`}
              >
                {currentStep === 1
                  ? "Shopping Cart"
                  : currentStep === 2
                    ? "Checkout Details"
                    : "Order Complete"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      {step === 1 && (
        <div className="w-[83%] my-0 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.5fr_1.5fr] gap-4">
          {/* Cart Items Table */}
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="relative min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                        Product
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Quantity
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Price
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.length === 0 ? (
                      <tr>
                        <td
                          colSpan={4}
                          className="py-8 text-center text-gray-500"
                        >
                          Your cart is empty
                        </td>
                      </tr>
                    ) : (
                      cart.map((item) => (
                        <tr key={item.id} className="even:bg-gray-50">
                          <td className="py-4 pr-3 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-3">
                            <div className="flex gap-2 items-center">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div className="flex flex-col gap-2">
                                <span className="text-[#6C7275]">
                                  {item.name}
                                </span>
                                {item.description && (
                                  <span className="text-sm text-gray-500">
                                    {item.description}
                                  </span>
                                )}
                                <button
                                  onClick={() => handleDelete(item)}
                                  className="text-red-500 hover:text-red-700 text-left w-fit"
                                >
                                  X Remove
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                            <div className="rounded gap-2 flex items-center border py-2 px-4 w-fit border-gray-300">
                              <button
                                onClick={() => handleDecreaseQuantity(item.id)}
                              >
                                <FaMinus />
                              </button>
                              <span className="mx-2">{item.quantity || 1}</span>
                              <button
                                onClick={() => handleIncreaseQuantity(item.id)}
                              >
                                <FaPlus />
                              </button>
                            </div>
                          </td>
                          <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                            ${item.price?.toFixed(2) || "0.00"}
                          </td>
                          <td className="px-3 py-4 text-sm whitespace-nowrap text-gray-500">
                            $
                            {(item.price * item.quantity)?.toFixed(2) || "0.00"}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="p-8 border border-gray-300 rounded-lg space-y-6">
            <h5 className="text-[#141718] font-semibold text-lg mb-4">
              Cart Summary
            </h5>

            <div className="space-y-3">
              <label className="flex justify-between items-center border border-gray-300 rounded-md p-3 cursor-pointer hover:border-gray-500 transition">
                <div className="flex items-center gap-2">
                  <input type="radio" name="shipping" defaultChecked />
                  <span className="text-sm text-[#141718]">Free Shipping</span>
                </div>
                <span className="text-sm font-medium text-[#141718]">
                  $0.00
                </span>
              </label>
            </div>

            <div className="flex justify-between items-center border-t border-gray-200 pt-4">
              <span className="text-sm text-[#6C7275]">Subtotal</span>
              <span className="text-sm font-medium text-[#141718]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between items-center border-t border-gray-200 pt-2">
              <span className="text-base font-semibold text-[#141718]">
                Total
              </span>
              <span className="text-base font-semibold text-[#141718]">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleProceedToCheckout}
              disabled={isAuthenticated === null}
              className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-[#333] transition disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              {isAuthenticated === null ? "Checking account..." : "Proceed to Checkout"}
            </button>
            {!isAuthenticated && isAuthenticated !== null && (
              <p className="text-sm text-red-500">
                Please sign in to continue to checkout.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Step 2: Checkout Details */}
      {step === 2 && (
        <div className="my-16">
          <Checkout />
        </div>
      )}
      {/* Step 3: Order Complete */}
      {step === 3 && (
        <div className="text-center py-20 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Order Complete</h2>
          <p>
            Thank you for your order! Your order has been successfully placed.
          </p>
        </div>
      )}
    </div>
  );
}
