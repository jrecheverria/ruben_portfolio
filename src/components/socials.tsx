import { IconType } from "react-icons"
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'

interface SocialObject {
    link: string,
    icon: IconType
}

const socials = [
    {
        link: "https://github.com/jrecheverria?tab=repositories",
        icon: <AiOutlineGithub className="w-8 h-8 cursor-pointer text-slate-500 hover:text-white"/>
    },
    {
        link: "https://www.instagram.com/rubenecheverria/",
        icon: <AiOutlineInstagram className="w-8 h-8 cursor-pointer text-slate-500 hover:text-white"/>
    },
    {
        link: "https://www.linkedin.com/in/javier-echeverria-780617195/",
        icon: <AiOutlineLinkedin className="w-8 h-8 cursor-pointer text-slate-500 hover:text-white"/>
    }
]

export default function Socials() {
    return (
        <div className="flex mt-40">
        {socials.map((social, index) => (
            <div className="mr-4">
                <a href={social.link} target="_blank">{social.icon}</a>
            </div>
        ))}
        </div>
    )
}