import { HeroDesc, HeroTabs } from "@/components"


function Home() {
  return (
    <div className="flex justify-around items-start bg-red-600 py-10">
      <HeroDesc/>
      <HeroTabs/>
    </div>
  )
}

export default Home
