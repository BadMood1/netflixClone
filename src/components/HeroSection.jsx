import React from "react";
import heroBanner from "../assets/hero_banner.jpg";
import heroTitle from "../assets/hero_title.png";
import playIcon from "../assets/play_icon.png";
import infoIcon from "../assets/info_icon.png";
import TitleCards from "./TitleCards";

const HeroSection = () => {
    return (
        <div>
            <img
                src={heroBanner}
                alt=""
                className="w-full mask-[linear-gradient(to_right,transparent,black_75%)]"
            />
            <div className="absolute w-full pl-[6%] bottom-0">
                <img src={heroTitle} alt="" className="w-[90%] max-w-[420px] mb-7.5" />
                <p className="max-w-[700px] md:text-[18px] mb-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nesciunt commodi nisi
                    autem nihil, omnis fugiat incidunt error placeat dolorem!
                </p>
                <div className="flex gap-2.5 mb-[50px] [&_img]:w-6 [&_button]:hover:opacity-80">
                    <button className="p-[8px_20px] inline-flex items-center text-sm text-black gap-2 font-semibold bg-white rounded-sm cursor-pointer">
                        <img src={playIcon} alt="" />
                        Play
                    </button>
                    <button className="p-[8px_20px] inline-flex items-center text-sm gap-2 font-semibold bg-[#6d6d6eb3] rounded-sm cursor-pointer text-white">
                        <img src={infoIcon} alt="" className="" />
                        More Info
                    </button>
                </div>
                <TitleCards />
            </div>
            <div className="pl-[6%]">
                <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
                <TitleCards title={"Only on Netflix"} category={"popular"} />
                <TitleCards title={"Upcoming"} category={"upcoming"} />
                <TitleCards title={"Top Pics for You"} category={"now_playing"} />
            </div>
        </div>
    );
};

export default HeroSection;
