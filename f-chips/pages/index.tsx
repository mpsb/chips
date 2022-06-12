import { useState, ChangeEvent } from "react";
import type { NextPage } from "next";
import Card from "../components/containers/Card";
import InputField from "../components/inputs/InputField";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Flexbox from "../components/containers/Flexbox";
import Large from "../components/text/Large";
import DropdownField from "../components/inputs/DropdownField";

const testOptions = [
  { value: "HKD", label: "HKD" },
  { value: "USD", label: "USD" },
  { value: "PHP", label: "PHP" },
];

const Home: NextPage = () => {
  const [amount, setAmount] = useState(0);
  const [receivingAmount, setReceivingAmount] = useState(0);
  const [currency, setCurrency] = useState("HKD");
  const [receivingCurrency, setReceivingCurrency] = useState("HKD");

  const handleDropdownFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const handleReceivingDropdownFieldChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    // api call to currency conversion ()
    setReceivingCurrency(event.target.value);
  };

  const handleInputFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  return (
    <Flexbox additionalProps="flex-row flex-wrap m-[32px] justify-center gap-[16px]">
      <Card>
        <Large additionalProps="pb-[8px]">You are sending:</Large>
        <InputField
          placeholder="Amount"
          type="number"
          min="0.1"
          handleChange={handleInputFieldChange}
          value={amount}
          additionalProps="text-[18px] mr-[8px] mb-[8px]"
        />
        <DropdownField
          dropdownOptions={testOptions}
          handleChange={handleDropdownFieldChange}
          value={currency}
          additionalProps="text-[18px]"
        />
        <Large>
          {amount} {currency}
        </Large>
      </Card>
      <Card>
        <Large additionalProps="pb-[8px]">Recipient will receive:</Large>
        <Large additionalProps="font-semibold inline-block mr-[8px]">
          {receivingAmount}
        </Large>
        <DropdownField
          dropdownOptions={testOptions}
          additionalProps="text-[18px]"
          value={receivingCurrency}
        />
        <br></br>
        <br></br>
        <PrimaryButton>Transfer</PrimaryButton>
      </Card>
    </Flexbox>
  );
};

export default Home;
