import Biography from '@/components/biography'
import ContentMenu from '@/components/contentMenu'
import ExperienceCard from '@/components/experienceCard'
import Socials from '@/components/socials'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 bg-background">

      <div className="grid gap-4 grid-cols-2 grid-rows-2">
        <div className='sticky top-24'>
          <h1 className='text-5xl font-bold w-4/6'>Javier Ruben Echeverria</h1>
          <h2 className='text-lg font-normal my-4'>Full Stack Software Engineer</h2>
          <h3 className='text-md font-light text-slate-400'>I build scalable, resilliant applications for the web.</h3>

          <ContentMenu />
          <Socials />

        </div>

        <div>
          <Biography />
          <ExperienceCard />
          <p>View Full Resume</p>
        </div>
        
        
      </div>
    </main>
  )
}
