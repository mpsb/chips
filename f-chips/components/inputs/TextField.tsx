import { NextPage } from 'next';

type Props = {
    placeholder: string;
};

const TextField: NextPage<Props> = (props) => {
    return(
        <input type="text" className="border-solid border-1 border-black/[0.25] rounded-[20px]" placeholder={props.placeholder}/>
    );
};

export default TextField;