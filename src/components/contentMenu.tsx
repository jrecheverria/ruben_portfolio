const items = [
    "ABOUT",
    "EXPERIENCE",
    "PROJECTS",
    "BLOG"
]

export default function ContentMenu() {
    return (
        <div className="mt-10">
            {items.map((item, index) => (
                <div className="flex items-center justify-left w-60">
                    <div className="flex items-center space-x-2 cursor-pointer my-3 hover:w-40 ">
                        <div className="border-t border-slate-500 w-10 transition-all flex-grow"></div>
                        <p className="text-xs font-bold text-slate-500">{item}</p>
                    </div>
                </div>
            ))}
            
        </div>
    )
}
