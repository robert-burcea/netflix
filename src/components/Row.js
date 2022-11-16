import axios from 'axios';
import {FaHeart, FaRegHeart } from 'react-icons/fa'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import React, { useEffect, useRef, useState } from 'react'
import requests from "../Requests";
import Movie from './Movie';

const Row = ({title, fetchURL}) => {
    const [movies, setMovies] = useState([])
    const scrollerRef = useRef(null);
 
    useEffect(() => {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results)
        })
    },[fetchURL])

    const slideLeft = (ref) => {
        ref.scrollLeft = ref.scrollLeft - 500;
    }
    const slideRight = (ref) => {
        ref.scrollLeft = ref.scrollLeft + 500;
    }

  return (
    <div>
        <h2 className="text-white font-bold md:text-xl p-3">{title}</h2>
        <div className="relative flex items-center group">
            <MdChevronLeft onClick={() => {slideLeft(scrollerRef.current)}} className="bg-white left-0 rounded-full text-black absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
            <div id='slider' ref={scrollerRef} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                {movies?.map((item,id) => {
                    return <Movie movie={item} id={id}/>
                })}
            </div>
            <MdChevronRight onClick={() => {slideRight(scrollerRef.current)}} className="bg-white right-0 rounded-full text-black absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" size={40}/>
        </div>
    </div>
  )
}

export default Row