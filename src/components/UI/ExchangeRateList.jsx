import React from "react";

const ExchangeRateList = ({ baseCurrency, amount, exchangeRates = {} }) => {
  return (
    <div className="text-white my-5">
      <p className="text-2xl font-medium mb-2">
        Exchange Rates for{" "}
        <span className="text-accent">&ldquo;{baseCurrency}&rdquo;</span>
      </p>
      {Object?.keys(exchangeRates)?.map((currency) => (
        <p key={currency} className="mb-1 font-medium text-lg">
          {amount + " " + baseCurrency} ={" "}
          {(amount * exchangeRates[currency])?.toFixed(2)}{" "}
          {currency.match(/[A-Z]{3}/g)[1]}
        </p>
      ))}
    </div>
  );
};

export default ExchangeRateList;
