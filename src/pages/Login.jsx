import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Login() {
    const [isNewUser, setIsNewUser] = useState(true);

    return (
        <div className="h-screen bg-[url('./assets/background_banner.jpg')]">
            <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/50">
                <img src={logo} className="w-[150px] mt-8 ml-20" />
                <div className="w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded-lg p-15 mx-auto">
                    <h1 className="text-3xl font-semibold mb-7">{isNewUser ? "Sign Up" : "Sign In"}</h1>
                    <form
                        action=""
                        className="[&_input]:w-full [&_input]:p-[16px_20px] [&_input]:m-[12px_0] [&_input]:rounded-sm
                        [&_input]:bg-[#333] [&_input]:text-white [&_input]:outline-none"
                    >
                        {isNewUser && <input type="text" placeholder="Your Name..." />}
                        <input type="text" placeholder="Your E-Mail..." />
                        <input type="password" placeholder="Your Password..." />
                        <button
                            className="w-full bg-[#e50914] p-4 mt-6 rounded-sm font-semibold cursor-pointer
                        "
                        >
                            {isNewUser ? "Sign Up" : "Sign In"}
                        </button>
                        <div className=" flex items-center justify-between text-sm text-gray-500 mt-4">
                            <div className="flex gap-2 whitespace-nowrap items-center ">
                                <input
                                    type="checkbox"
                                    id="rememberme"
                                    className="w-4.5! h-4.5! accent-[#e50914] cursor-pointer"
                                />
                                <label htmlFor="rememberme" className="cursor-pointer">
                                    Remember Me
                                </label>
                            </div>
                            <p className="cursor-pointer">Need Help?</p>
                        </div>
                    </form>
                    <div className="mt-10 text-gray-300 text-sm [&_span]:text-white [&_span]:ml-1 [&_span]:cursor-pointer">
                        {isNewUser ? (
                            <p>
                                Already have account?{" "}
                                <span onClick={() => setIsNewUser(false)}>Sign In Now</span>
                            </p>
                        ) : (
                            <p>
                                New to Netflix? <span onClick={() => setIsNewUser(true)}>Sign Up Now</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
