import React from "react";
import youtubeIcon from "../assets/youtube_icon.png";
import twitterIcon from "../assets/twitter_icon.png";
import instagramIcon from "../assets/instagram_icon.png";
import facebookIcon from "../assets/facebook_icon.png";

const Footer = () => {
    return (
        <div className="p-[30px_4%] max-sm:p-[15px_4%] max-w-[1000px] mx-auto">
            <div className="flex gap-5 my-10 [&_img]:w-7.5 cursor-pointer [&_img]:hover:scale-110 [&_img]:transition-transform [&_img]:duration-200">
                <img src={facebookIcon} alt="" />
                <img src={instagramIcon} alt="" />
                <img src={twitterIcon} alt="" />
                <img src={youtubeIcon} alt="" />
            </div>
            <ul
                className="grid grid-cols-4 gap-3 mb-10 [&_span]:hover:border-b-2   [&_span]:pb-1 [&_span]:cursor-pointer text-gray-400
                [&_span]:hover:text-[#e50914] [&_span]:transition-colors [&_span]:duration-200
                [&_li]:text-sm max-sm:grid-cols-2
            "
            >
                <li>
                    <span>Audio Description</span>
                </li>
                <li>
                    <span>Help Center</span>
                </li>
                <li>
                    <span>Gift Cards</span>
                </li>
                <li>
                    <span>Media Center</span>
                </li>
                <li>
                    <span>Investor Relations</span>
                </li>
                <li>
                    <span>Jobs</span>
                </li>
                <li>
                    <span>Terms of Use</span>
                </li>
                <li>
                    <span>Privacy</span>
                </li>
                <li>
                    <span>Legal Notices</span>
                </li>
                <li>
                    <span>Cookie Preferences</span>
                </li>
                <li>
                    <span>Contact Us</span>
                </li>
            </ul>
            <p className="text-gray-500 text-[14px]">© 1997-2025 Netflix Clone, Inc.</p>
        </div>
    );
};

export default Footer;
