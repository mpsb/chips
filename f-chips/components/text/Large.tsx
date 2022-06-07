import { NextPage } from "next";

type Props = {
  children: any;
  additionalProps?: string;
};

const Large: NextPage<Props> = (props) => {
  return (
    <span className={`text-[18px] block ${props.additionalProps}`}>
      {props.children}
    </span>
  );
};

export default Large;
