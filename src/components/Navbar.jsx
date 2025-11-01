import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import searchIcon from "../assets/search_icon.svg";
import bellIcon from "../assets/bell_icon.svg";
import profileImg from "../assets/profile_img.png";
import caretIcon from "../assets/caret_icon.svg";
import { logout } from "../firebase";

export default function Navbar() {
    const navRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 80) {
                navRef.current.classList.add("bg-[#141414]");
            } else {
                navRef.current.classList.remove("bg-[#141414]");
            }
        });
    }, []);
    return (
        <div
            ref={navRef}
            className="flex p-[20px_6%] justify-between text-[#e5e5e5] text-[14px] 
            gradient-overlay z-1 fixed w-full transition-bg duration-200"
        >
            <div className="flex items-center gap-[50px]">
                <img src={logo} alt="LOGO" className="w-[90px] " />
                <ul
                    className="flex list-none gap-5 [&_li]:cursor-pointer [&_li:hover]:text-[#e50914] [&_li]:transition-colors duration-75
                "
                >
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
                        <p className="text-sm cursor-pointer" onClick={() => logout()}>
                            Sign Out of Netflix
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
