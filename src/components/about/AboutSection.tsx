import AboutDesc from "./AboutDesc"
import AboutImg from "./AboutImg"
import RevenueModel from "./RevenueModel"
import RevenueModelDesc from "./RevenueModelDesc"
import SolutionDesc from "./SolutionDesc"
import SolutionImg from "./SolutionImg"
import TokenomicsSection from "./tokenomics/TokenomicsSection"


function AboutSection() {
  return (
    <div className="min-h-screen py-7">
        <div className="flex justify-around items-center flex-wrap gap-6 py-16 px-5 md:px-4">
            <AboutDesc/>
            <AboutImg/>
        </div>
        <RevenueModelDesc/>
        <RevenueModel/>
        <TokenomicsSection/>
        <div className="flex justify-around items-center flex-wrap gap-6 py-16 px-5 lg:mt-2 md:px-4">
            <SolutionImg/>
            <SolutionDesc/>
        </div>
    </div>
  )
}

export default AboutSection
