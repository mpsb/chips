import { NextPage } from 'next';

type Props = {
    placeholder: string;
};

const TextField: NextPage<Props> = (props) => {
    return(
        <input type="text" className="border-solid border border-black border-opacity-25 rounded-[20px] px-[8px] py-[4px]" placeholder={props.placeholder}/>
    );
};

export default TextField;