const PasswordText=({label,placeholder,value,setValue})=>{

    return(
        <div className="textInputDiv w-full flex flex-col space-y-2 mb-3">
        <label for={label} className="font-semibold ">{label}</label>
        <input type="text" 
        placeholder={placeholder}
        className="w-full p-2 border border-gray-600 rounded placeholder-gray-500 "
        id={label}
        value={value} 
        onChange={(e)=>{
            setValue(e.target.value);
        }} />
        </div>
    );
   
};

export default PasswordText;