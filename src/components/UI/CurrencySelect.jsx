import React from "react";
import Select from "react-select";

const CurrencySelect = ({ baseCurrency, onCurrencyChange, label }) => {
  // Options for currency selection
  const options = [
    { value: "USD", label: "USD - United States Dollar" },
    { value: "EUR", label: "EUR - Euro" },
    { value: "MMK", label: "MMK - Myanmar Kyat" },
    { value: "THB", label: "THB - Thai Baht" },
    // Add more currency options as needed
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: 260,
    }),
  };
  return (
    <div className="mb-4 ">
      <label htmlFor="currencySelect" className="block font-medium text-white">
        {label}
      </label>
      <Select
        id="currencySelect"
        options={options}
        value={{
          value: baseCurrency,
          label: `${baseCurrency} `,
        }}
        onChange={onCurrencyChange}
        className="mt-1 "
        styles={customStyles}
      />
    </div>
  );
};

export default CurrencySelect;
