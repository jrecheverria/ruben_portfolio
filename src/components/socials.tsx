import { IconType } from "react-icons"
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

interface SocialObject {
    link: string,
    icon: IconType
}

const socials = [
    {
        link: "https://github.com/jrecheverria",
        icon: <AiOutlineGithub className="w-7 h-7 cursor-pointer text-slate-500 hover:text-orange-600"/>
    },
    {
        link: "https://www.instagram.com/rubenecheverria/",
        icon: <AiOutlineInstagram className="w-7 h-7 cursor-pointer text-slate-500 hover:text-orange-600"/>
    },
    {
        link: "https://www.linkedin.com/in/javier-echeverria-780617195/",
        icon: <AiOutlineLinkedin className="w-7 h-7 cursor-pointer text-slate-500 hover:text-orange-600"/>
    }
]

export default function Socials() {
    return (
        <div className="flex">
        {socials.map((social, index) => (
            <div key={index} className="mr-4">
                <a href={social.link} target="_blank">{social.icon}</a>
            </div>
        ))}
        </div>
    )
}