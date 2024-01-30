import { Icon } from "@iconify/react";

const IconText=({IconName,displayText,active})=>{

    return (<div className="flex  px-5 py-3 cursor-pointer ">
        <div className="px-4">
            <Icon  icon={IconName} 
            color={active? "white":"gray"} 
            fontSize={25} 
            
            />
        </div>
        <div className={`sm font-semibold ${active? "text-white":"text-gray-400"} hover:text-white `}>{displayText}</div>
    </div>);
   
};

export default IconText;