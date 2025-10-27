import React from "react";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search_icon.svg";
import bellIcon from "../assets/bell_icon.svg";
import profileImg from "../assets/profile_img.png";
import caretIcon from "../assets/caret_icon.svg";

export default function Navbar() {
    return (
        <div
            className="flex p-[20px_6%] justify-between text-[#e5e5e5] text-[14px] 
            gradient-overlay z-1"
        >
            <div className="flex items-center gap-[50px]">
                <img src={logo} alt="LOGO" className="w-[90px] " />
                <ul className="flex list-none gap-5 [&_li]:cursor-pointer">
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="flex gap-5 items-center [&_img]:cursor-pointer">
                <img src={searchIcon} alt="" className="w-5" />
                <p>Children</p>
                <img src={bellIcon} alt="" className="w-5" />
                <div className="flex items-center gap-2.5 cursor-pointer relative group">
                    <img src={profileImg} alt="" className="rounded-sm w-[35px]" />
                    <img src={caretIcon} alt="" />
                    <div
                        className="hidden absolute group-hover:block top-full right-0 w-max bg-[#191919] p-[18px_22px] 
                        rounded-xs underline z-1"
                    >
                        <p className="text-sm cursor-pointer">Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
