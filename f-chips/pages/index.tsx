import type { NextPage } from "next";
import Card from "../components/containers/Card";
import InputField from "../components/inputs/InputField";
import PrimaryButton from "../components/buttons/PrimaryButton";

const Home: NextPage = () => {
  return (
    <Card>
      <InputField placeholder="Amount" type="number" min="0.1" />
      <br></br>
      <br></br>
      <PrimaryButton>Transfer</PrimaryButton>
    </Card>
  );
};

export default Home;
