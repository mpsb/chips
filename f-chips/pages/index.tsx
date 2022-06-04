import type { NextPage } from "next";
import Card from "../components/containers/Card";
import TextField from "../components/inputs/TextField";
import PrimaryButton from "../components/buttons/PrimaryButton";

const Home: NextPage = () => {
  return (
    <Card>
      <TextField placeholder="Amount" />
      <PrimaryButton>Transfer</PrimaryButton>
    </Card>
  );
};

export default Home;
