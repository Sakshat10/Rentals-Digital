import AboutDesc from "./AboutDesc"
import AboutImg from "./AboutImg"
import RevenueModel from "./RevenueModel"
import RevenueWork from "./RevenueWork"


function AboutSection() {
  return (
    <div className="min-h-screen py-7">
        <div className="flex justify-around items-center flex-wrap gap-6 py-16 px-5 md:px-4">
            <AboutDesc/>
            <AboutImg/>
        </div>
        <RevenueModel/>
        <RevenueWork/>
    </div>
  )
}

export default AboutSection
