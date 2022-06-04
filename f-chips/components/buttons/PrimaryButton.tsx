import { NextPage } from "next";

type Props = {
  children: any;
};

const PrimaryButton: NextPage<Props> = (props) => {
  return (
    <button className="bold rounded-[20px] px-[36px] py-[8px] bg-primary-blue">
      <span className="text-white text-[12px] font-semibold">
        {props.children}
      </span>
    </button>
  );
};

export default PrimaryButton;
