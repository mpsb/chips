import { NextPage } from "next";

type Props = {
  children: any;
};

const PrimaryButton: NextPage<Props> = (props) => {
  return (
    <button className="bold rounded-[20px] px-[36px] py-[8px] bg-primary-blue transition-colors ease-in-out hover:bg-dark-blue duration-300">
      <span className="text-white text-[14px] font-medium">
        {props.children}
      </span>
    </button>
  );
};

export default PrimaryButton;
