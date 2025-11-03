import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TitleCards({ title, category = "popular", ...props }) {
    const [apiData, setApiData] = useState([]);
    // Ссылка на элемент который будет прокручиваться
    const cardsRef = useRef();

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODJkODdjNTI5ZjI1YmFkYzA5OWM4ODY1MmRmNGI3YiIsIm5iZiI6MTc2MTQxODA0NS41Mywic3ViIjoiNjhmZDFiM2RkOTI3YjY4YmIwOTI2ZDNjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.h3FWVRJCQxxWq6lKgNSj_jFIzZnCq3Fl8eolVf59iGE",
            },
        };

        fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
            .then((res) => res.json())
            .then((res) => {
                setApiData(res.results);
            })
            .catch((err) => console.error(err));
    }, [category]);

    const handleWheel = (e) => {
        e.preventDefault();
        // преобразует вертикальную прокрутку (deltaY) в горизонтальную (scrollLeft)
        cardsRef.current.scrollLeft += e.deltaY;
    };

    useEffect(() => {
        const cardsElement = cardsRef.current;
        cardsElement.addEventListener("wheel", handleWheel);

        // cleanup — удаляем слушатель при размонтировании или перед повторным добавлением
        return () => {
            cardsElement.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <div className="mb-8" {...props}>
            <h2 className="mb-2 sm:text-2xl max-sm:text-lg">{title ? title : "Popular on Netflix"}</h2>
            <div
                className="flex gap-2.5 max-sm:gap-2 overflow-x-scroll [&::-webkit-scrollbar]:hidden
             "
                ref={cardsRef}
            >
                {apiData.map((card, index) => (
                    <Link
                        to={`/player/${card.id}`}
                        key={index}
                        className="shrink-0 max-sm:w-35 relative cursor-pointer transition-transform hover:scale-105 duration-200"
                    >
                        <img
                            src={
                                card.backdrop_path
                                    ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
                                    : ""
                            }
                            alt={card.original_title}
                            className="w-60 rounded-sm"
                        />
                        <p className="absolute bottom-2.5 right-2.5 max-sm:text-xs ">{card.original_title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
