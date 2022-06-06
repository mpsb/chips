import type { NextPage } from "next";
import Card from "../components/containers/Card";
import InputField from "../components/inputs/InputField";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Flexbox from "../components/containers/Flexbox";

const Home: NextPage = () => {
  return (
    <Flexbox additionalProps="flex-row flex-wrap m-[32px]">
      <Card additionalProps="mr-[8px] mb-[8px]">
        <InputField placeholder="Amount" type="number" min="0.1" />
        <br></br>
        <br></br>
        <PrimaryButton>Transfer</PrimaryButton>
      </Card>
      <Card>
        <InputField placeholder="Amount" type="number" min="0.1" />
        <br></br>
        <br></br>
        <PrimaryButton>Transfer</PrimaryButton>
      </Card>
    </Flexbox>
  );
};

export default Home;
