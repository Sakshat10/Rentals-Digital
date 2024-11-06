import Button from "../shared/Button"


function PlatHeroDesc() {
  return (
    <div className="flex flex-col gap-6 justify-center  w-full md:w-[45vw] lg:w-[35vw]"> 
      <h1 className="md:text-5xl text-3xl  text-white">Redefining Travel with Crypto</h1>
      <p className="text-white">Your journey, rewarded. Explore a crypto-powered ecosystem that lets you pay, earn, and travel.</p>
      <Button className="md:w-1/2 w-full">Buy token now</Button>
    </div>
  )
}

export default PlatHeroDesc
