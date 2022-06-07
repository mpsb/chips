import type { NextPage } from "next";
import Card from "../components/containers/Card";
import InputField from "../components/inputs/InputField";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Flexbox from "../components/containers/Flexbox";
import Large from "../components/text/Large";

const Home: NextPage = () => {
  return (
    <Flexbox additionalProps="flex-row flex-wrap m-[32px]">
      <Card additionalProps="mr-[16px]">
        <Large additionalProps="pb-[8px]">Input amount to send:</Large>
        <InputField placeholder="Amount" type="number" min="0.1" additionalProps="text-[18px]"/>
      </Card>
      <Card>
        <Large>Recipient will receive:</Large>
        <br></br>
        <Large additionalProps="font-semibold">100 USD</Large>
        <br></br>
        <br></br>
        <PrimaryButton>Transfer</PrimaryButton>
      </Card>
    </Flexbox>
  );
};

export default Home;
