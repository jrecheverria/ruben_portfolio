'use client'
import { useState } from "react";
import JobHistory from "../data/JobHistory.json";

export default function ExperienceCard() {
    const [hoverIndex, setHoverIndex] = useState(null);
    const handleMouseEnter = (index: Number) => {
        setHoverIndex(index);
    }
    const handleMouseLeave = () => {
        setHoverIndex(null);
    }

    return (
            <>
            {JobHistory.map((job, index) => (
                <div className="grid grid-cols-2 h-fit mb-10 cursor-pointer rounded-md hover:bg-gray-800  hover:backdrop-blur-xl p-4" 
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}>

                    <p className="text-xs font-smibold text-slate-500">{job.date}</p>
                    
                    <div className="flex-col">
                        
                        <div className="flex">
                            <p className={`text-md font-normal ${hoverIndex == index ? 'text-teal-500' : 'text-white'}`}>{job.title}</p>
                            <p className={`text-md font-normal mx-2 ${hoverIndex == index ? 'text-teal-500' : 'text-white'}`}>@</p>
                            <p className={`text-md font-normal ${hoverIndex == index ? 'text-teal-500' : 'text-white'}`}>{job.company}</p>
                        </div>
                        <p className="text-md font-light text-slate-400 my-3">{job.location}</p>
                        <p className="text-sm font-light text-slate-400 my-3">{job.summary}</p>
                        
                        <div className="flex flex-row overglow-hidden">
                            {job.skills.map((skill, index) => (
                            <div className="flex"><p className="rounded-full text-xs bg-teal-950 backdrop-blur-xl text-teal-400 p-2 mr-2">{skill}</p></div>
                            ))}
                        </div>

                    </div>
                </div>
            ))}
            </>
        
    )
}