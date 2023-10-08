import React, { forwardRef } from "react";

const AmountInput = forwardRef((_, ref) => {
  return (
    <div className="mb-4">
      <label htmlFor="amountInput" className="block font-medium text-white">
        Enter Amount
      </label>
      <input
        ref={ref}
        type="number"
        id="amountInput"
        placeholder="Enter amount..."
        className="mt-1 p-2 border rounded-md w-[260px]"
      />
    </div>
  );
});

export default AmountInput;
