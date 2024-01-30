import spotify_logo from "../assets/imgs/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextHover from "../components/shared/TextHover";

const spotify_data = [{
    title: "Peaceful Piano",
    desc: "This is the desc of piano",
    img: "https://i.scdn.co/image/ab67706f00000003ca5a7517156021292e5663a6"
}, {
    title:"Deep Focus",
     desc:"This is the desc of piano",
    img:"https://i.scdn.co/image/ab67706f00000003e4eadd417a05b2546e866934"
}, {
    title:"Instrumental Study",
    desc:"This is the desc of piano", 
    img:"https://th.bing.com/th/id/OIP.0I1yWCSxzj5jFgJs01bcjQAAAA?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7"
}, {
    title:"Focus Flow",
     desc:"This is the desc of piano",
      img:"https://i.scdn.co/image/ab67706f00000003724554ed6bed6f051d9b0bfc"
}, {
    title:"Beats to think",
     desc:"This is the desc of piano",
      img:"https://i.scdn.co/image/ab67706f00000003d90c4ce9bd5b6ebcf01ae8ec"
      
}];

const HomeComponent = () => {

    return (
        <div className="w-full h-full flex position: fixed">
            <div className="h-full w-1/5 bg-black ">
                <div className="logo-div  p-6">
                    <img src={spotify_logo} alt="logo" width={110} />

                </div>
                <div >
                    <IconText IconName={"ion:home"} displayText={"Home"} active />
                    <IconText IconName={"iconamoon:search-bold"} displayText={"Search"} />
                    <IconText IconName={"fluent:library-32-filled"} displayText={"Your Library"} />

                </div>
                <div className="mt-9">
                    <IconText IconName={"gridicons:add"} displayText={"Create Playlist"} />
                    <IconText IconName={"mdi:heart"} displayText={"Liked Songs"} />
                </div>

            </div>
            <div className="h-full w-4/5 bg-app-black overflow-auto ">
                <div className="navbar  h-1/10 bg-black text-white bg-opacity-30 flex items-center justify-end ">
                    <div className="flex mr-4">
                        <TextHover displayText={"Premium"} />
                        <TextHover displayText={"Support"} />
                        <TextHover displayText={"Download"} />
                    </div>
                    <div className=" h-2/3 border-r border-white">

                    </div>

                    <div>
                        <TextHover displayText={"Sign up"} />
                    </div>

                    <div className="bg-white px-7 mr-3 h-2/3 flex items-center justify-center text-black font-semibold rounded-full cursor-pointer ">
                        Log in
                    </div>
                </div>


                <div className="content ">
                    <div className="">
                        <PlayListView titleText="Focus" cardsData={spotify_data}/>
                        <PlayListView titleText="Spotify Playlist" cardsData={spotify_data} />
                        <PlayListView titleText="Sound of India" cardsData={spotify_data} />
                    </div>
                </div>
            </div>


        </div>
    );
};

const PlayListView = ({ titleText, cardsData }) => {

    return (
        <div className="">
            <div className="text-white text-xl p-5 font-semibold ">{titleText}</div>
            <div className="flex justify-around space-x-3 ">

                {
                    cardsData && cardsData.map((item) => {
                        return (
                            <Cards title={item.title}
                                desc={item.desc}
                                img={item.img} />
                        );


                    })
                };

                {/*   
                //<Cards
                    title="Peaceful Piano" desc="This is the desc of piano" img="https://i.scdn.co/image/ab67706f00000003ca5a7517156021292e5663a6" />
                <Cards
                    title="Deep Focus" desc="This is the desc of piano"  img="https://i.scdn.co/image/ab67706f00000003e4eadd417a05b2546e866934"/>
                <Cards
                    title="Instrumental Study" desc="This is the desc of piano" img="https://th.bing.com/th/id/OIP.0I1yWCSxzj5jFgJs01bcjQAAAA?w=202&h=202&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
                <Cards
                    title="Focus Flow" desc="This is the desc of piano" img="https://i.scdn.co/image/ab67706f00000003724554ed6bed6f051d9b0bfc"/>
                <Cards
                    title="Beats to think" desc="This is the desc of piano" img="https://i.scdn.co/image/ab67706f00000003d90c4ce9bd5b6ebcf01ae8ec"/> */}

            </div>
        </div>

    );
};

function Cards({ title, desc, img }) {

    return (
        <div className="bg-black w-1/5 p-5 ">
            <img src={img} alt="img" />
            <div className="text-white  font-bold py-2">{title}</div>
            <div className="text-gray-500 text-sm font-bold">{desc}</div>
        </div>
    );
}

export default HomeComponent;