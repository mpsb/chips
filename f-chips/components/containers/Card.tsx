import { NextPage } from "next";

type Props = {
  children: any;
  additionalProps?: string;
};

const Card: NextPage<Props> = (props) => {
  return (
    <div
      className={`shadow-lg rounded-[20px] p-[24px] ${props.additionalProps}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
