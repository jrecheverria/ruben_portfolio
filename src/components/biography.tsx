import Socials from "./socials";

export default function Biography() {
    return (
        <div className="flex flex-col pt-10 w-11/12 sm:w-6/12">
            <h1 className="font-ibm text-3xl sm:text-5xl font-bold">Ruben Echeverria</h1>
            <p className="font-ibm text-md font-light pt-9">
            Hey 👋 Im Ruben Echeverria, a software engineer who is deeply passionate about all things coding. Currently,
            Im working at CitiBank managing their artifact management platform and designing micro-services in Java ☕️.
            This portfolio website serves as a platform to showcase my projects and share things Im currently learning. 
            </p>
            
            <div className="flex items-center content-center">
                <p className="font-ibm text-md font-light pt-5">Social Links:</p>
                <Socials />
            </div>
            
            <p className="font-ibm text-md font-light pt-5">Currently Learning / Reading: <span className="font-medium">Creating SQLite from Scratch - CodeCrafters</span></p>
            <p className="font-ibm text-md font-light pt-5">Currently Listening To: <span className="font-medium">Mansard Roof - Vampire Weekend</span></p>
            <p className="font-ibm text-md font-light pt-5">Actively Working On: <span className="font-medium">This Portfolio Site</span></p>
            <hr className="h-px my-8 bg-orange-600 border-0"></hr>
        </div>
    )
}