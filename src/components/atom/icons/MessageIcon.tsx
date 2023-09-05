import React from "react";
import { IIconProps } from "../../../types/MainTypes";
import '../../../assets/css/common/icons/message-icon.scss';

const MessageIcon: React.FC<IIconProps> = ({ className = 'message-icon', onClick }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
            <path className="primary" fillRule="evenodd" clipRule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6V18.5C22 19.3284 21.3284 20 20.5 20H3.5C2.67157 20 2 19.3284 2 18.5V6ZM4 7V8.35013L12 12.9057L20 8.35013V7H4ZM20 10.5388L12.6092 14.8236C12.2214 14.9959 11.7786 14.9959 11.3908 14.8236L4 10.5388V18H20V10.5388Z" />
        </svg>

    );
};

export default MessageIcon;