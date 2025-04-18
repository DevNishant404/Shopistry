function Cart() {
    return (
        <div className="md:px-30 px-3 py-1">
          <p className="text-xl font-semibold mb-2">Shopping Cart</p>
          <div className="flex sm:flex-row flex-col gap-4  ">
            <div className="lg:w-[60%] sm:w-[70%] border w-full border-gray-200 shadow"></div>
            <div className="border border-gray-200 shadow w-full sm:w-[40%] p-2">
              <h3 className="font-semibold mb-1 ">Order summary</h3>
              <div className="flex justify-between text-sm text-gray-700 mb-1">
                <p>Sub Total</p>
                <p>Total Amount</p>
              </div>
              <div className="flex justify-between text-sm text-gray-700 mb-2">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <p className="text-sm font-semibold">Total Price</p>
              <p className="text-sm text-gray-700">Proceed to Checkout</p>
            </div>
          </div>
        </div>
      );
}

export default Cart;