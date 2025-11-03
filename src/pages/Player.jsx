import React, { useEffect, useState } from "react";
import backArrowIcon from "../assets/back_arrow_icon.png";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Player() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        typeof: "",
    });

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODJkODdjNTI5ZjI1YmFkYzA5OWM4ODY1MmRmNGI3YiIsIm5iZiI6MTc2MTQxODA0NS41Mywic3ViIjoiNjhmZDFiM2RkOTI3YjY4YmIwOTI2ZDNjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.h3FWVRJCQxxWq6lKgNSj_jFIzZnCq3Fl8eolVf59iGE",
            },
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then((res) => res.json())
            .then((res) => setApiData(res.results[0]))
            .catch((err) => console.error(err));
    }, [id]);

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <img
                src={backArrowIcon}
                alt=""
                className="absolute top-5 left-5 w-13 cursor-pointer"
                onClick={() => navigate(-1)}
            />
            <iframe
                src={`https://www.youtube.com/embed/${apiData.key}`}
                width={"85%"}
                height={"90%"}
                title="Trailer"
                frameBorder="0"
                allowFullScreen
                className="rounded-2xl border-2 border-white/30 py-1"
            ></iframe>
            <div className="flex center justify-between w-[85%] mt-4">
                <p>{apiData.published_at.slice(0, 10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>
            </div>
        </div>
    );
}
