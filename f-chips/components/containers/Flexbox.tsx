import { NextPage } from "next";

type Props = {
  children: any;
  additionalProps?: string;
};

const Flexbox: NextPage<Props> = (props) => {
  return (
    <div className={`flex ${props.additionalProps}`}>{props.children}</div>
  );
};

export default Flexbox;
