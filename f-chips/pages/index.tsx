import type { NextPage } from "next";
import Card from "../components/containers/Card";
import TextField from "../components/inputs/TextField";

const Home: NextPage = () => {
  return (
    <Card>
      <TextField placeholder="Amount" />
    </Card>
  );
};

export default Home;
