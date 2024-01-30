
const TextHover=({displayText,active})=>{

    return (<div className="flex  px-5 py-3 cursor-pointer ">
      
        <div className={`sm font-semibold ${active? "text-white":"text-gray-400"} hover:text-white `}>{displayText}</div>
    </div>);
   
};

export default TextHover;