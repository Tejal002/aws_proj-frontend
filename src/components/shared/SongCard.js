import { Background } from "@cloudinary/url-gen/qualifiers";
import { useContext, useState } from "react";
import songContext from './Context/songContext'


const SongCard = ({info,playSound }) => {

    const {currentSong,setCurrentSong}=useContext(songContext);

    return (
        
        <div className=" flex space-x-2 hover:bg-gray-400  hover:bg-opacity-20 rounded-sm ml-5 p-2"
         onClick={()=>{setCurrentSong(info)}}>
            <div className="w-12 h-12 bg-cover bg-center " style={
                {
                    backgroundImage: `url("${info.thumbnail}")`
                }
            }>
            </div>
            <div className="flex w-5/6 ">
                <div className="text-white flex flex-col justify-center  ">
                    <div className="font-semibold cursor-pointer hover:underline">{info.name}</div>
                    <div className="text-gray-400  font-semibold text-xs cursor-pointer hover:underline">{info.artist.firstName+" "+info.artist.lastName}</div>
                </div>
            </div>
            <div className="w-1/6  text-gray-400 fonr-semibold flex justify-start items-center">
               3.33
            </div>
        </div>
       

    )
}

export default SongCard;