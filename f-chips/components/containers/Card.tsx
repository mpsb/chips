import { NextPage } from 'next';

type Props = {
    children: any;
};

const Card: NextPage<Props> = (props) => {
    return(
        <div className="shadow-lg rounded-[20px] p-[16px] min-h-[238px]">
            {props.children}
        </div>
    );
};

export default Card;