import Button from "../shared/Button"


function AboutDesc() {
  return (
    <div className="flex flex-col items-start text-white lg:w-[40vw] gap-5">
      <h1 className="md:text-7xl text-4xl  font-bold">About Rentals</h1>
      <p className="text-justify">Rentals is a revolutionary platform that integrates all aspects of the travel experience into a single ecosystem. </p>
      <p className="text-justify">Leveraging blockchain technology and cryptocurrencies, Rentals streamlines the reservation and payment process, ensures transparency through genuine customer reviews, and rewards users for their activities and interactions on the platform.</p>
      <Button>Buy Token Now</Button>
    </div>
  )
}

export default AboutDesc
