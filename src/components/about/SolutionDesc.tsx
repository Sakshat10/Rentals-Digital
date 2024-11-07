import Button from "../shared/Button"


function SolutionDesc() {
  return (
    <div className="flex flex-col items-start lg:w-[40vw] gap-5 text-white">
      <h1 className="md:text-6xl text-3xl  font-semibold">Solution by Rentals</h1>
      <p className="text-justify">Rentals is a revolutionary platform that integrates all aspects of the travel experience into a single ecosystem.  </p>
      <p className="text-justify">Leveraging blockchain technology and cryptocurrencies, Rentals streamlines the reservation and payment process, ensures transparency through genuine customer reviews, and rewards users for their activities and interactions on the platform.</p>
      <Button>Buy Token Now</Button>
    </div>
  )
}

export default SolutionDesc
