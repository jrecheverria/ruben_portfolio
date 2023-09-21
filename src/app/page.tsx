import Biography from '@/components/biography'
import Experience from '@/components/experience'
import Navbar from '@/components/navbar'
import Socials from '@/components/socials'


export default function Home() {
  return (
    <main className="flex flex-col items-center pt-10 bg-background h-max w-screen">
      <Navbar />
      <Biography />
      <Experience />
    </main>
  )
}
