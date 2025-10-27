import React from "react";
import youtubeIcon from "../assets/youtube_icon.png";
import twitterIcon from "../assets/twitter_icon.png";
import instagramIcon from "../assets/instagram_icon.png";
import facebookIcon from "../assets/facebook_icon.png";

const Footer = () => {
    return (
        <div className="p-[30px_4%] max-w-[1000px] mx-auto">
            <div className="flex gap-5 my-10 [&_img]:w-7.5 cursor-pointer">
                <img src={facebookIcon} alt="" />
                <img src={instagramIcon} alt="" />
                <img src={twitterIcon} alt="" />
                <img src={youtubeIcon} alt="" />
            </div>
            <ul className="grid grid-cols-4 gap-3 mb-10">
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Cards</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Contact Us</li>
            </ul>
            <p className="text-gray-500 text-[14px]">© 1997-2025 Netflix Clone, Inc.</p>
        </div>
    );
};

export default Footer;
