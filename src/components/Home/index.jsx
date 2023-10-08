import React, { useState, useRef } from "react";
import { fetchExchangeRates } from "../../api";
import ExchangeRateList from "../UI/ExchangeRateList";
import AmountInput from "../UI/AmountInput";
import CurrencySelect from "../UI/CurrencySelect";

function Home() {
  const [baseCurrency, setBaseCurrency] = useState("MMK");
  const [changeCurrency, setChangeCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [exchangeRates, setExchangeRates] = useState({});
  const [error, setError] = useState();
  const amountInputRef = useRef(null);
  const fetchData = async () => {
    const newAmount = amountInputRef.current.value;
    setAmount(newAmount);
    try {
      const rates = await fetchExchangeRates(
        changeCurrency,
        baseCurrency,
        newAmount
      );
      setExchangeRates(rates);
    } catch (error) {
      setError(error);
    }
  };

  const handleCurrencyChange = (selectedCurrency) => {
    setChangeCurrency(selectedCurrency?.value);
  };

  const handleBaseCurrencyChange = (selectedCurrency) => {
    setBaseCurrency(selectedCurrency?.value);
  };
  return (
    <div className="w-screen  flex flex-col items-center justify-center bg-site h-screen bg-no-repeat bg-cover overflow-hidden">
      <p className="text-[30px] text-accent font-bold mb-4">
        Exchange Rate Calculator
      </p>
      <CurrencySelect
        baseCurrency={changeCurrency}
        onCurrencyChange={handleCurrencyChange}
        label={"Select Currency You want to change"}
      />
      <CurrencySelect
        baseCurrency={baseCurrency}
        onCurrencyChange={handleBaseCurrencyChange}
        label={"Select Your Currency"}
      />
      <AmountInput amount={amount} ref={amountInputRef} />
      <button
        onClick={fetchData}
        className="btn text-white font-medium px-4 py-3 rounded-full w-[260px] my-4 active:scale-105 active:-translate-y-1 transition-all"
      >
        Click to change
      </button>
      {exchangeRates?.source && (
        <ExchangeRateList
          baseCurrency={exchangeRates?.source}
          amount={amount}
          exchangeRates={exchangeRates?.quotes}
        />
      )}
      {error && (
        <p className="text-red-500 font-bold text-lg ">Something went wrong!</p>
      )}
    </div>
  );
}

export default Home;
