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
  return (
    <Flexbox additionalProps="flex-row flex-wrap m-[32px] justify-center gap-[16px]">
      <Card>
        <Large additionalProps="pb-[8px]">You are sending:</Large>
        <InputField
          placeholder="Amount"
          type="number"
          min="0.1"
          additionalProps="text-[18px] mr-[8px] mb-[8px]"
        />
        <DropdownField
          dropdownOptions={testOptions}
          additionalProps="text-[18px]"
        />
      </Card>
      <Card>
        <Large additionalProps="pb-[8px]">Recipient will receive:</Large>
        <Large additionalProps="font-semibold inline-block mr-[8px]">100</Large>
        <DropdownField
          dropdownOptions={testOptions}
          additionalProps="text-[18px]"
        />
        <br></br>
        <br></br>
        <PrimaryButton>Transfer</PrimaryButton>
      </Card>
    </Flexbox>
  );
};

export default Home;
