import AcquisitionForm from "./AcquisitionForm"
import CloudAcquisition from "./CloudAcquisition"
import LocationAcquisition from "./LocationAcquisition"
import PlaneAcquisition from "./PlaneAcquisition"
import TopDarkCloud from "./TopDarkCloud"
import TopLightCloud from "./TopLightCloud"


function AcquisitionSection() {
  return (
    <div>
        <AcquisitionForm/>
        <CloudAcquisition/>
        <PlaneAcquisition/>
        <TopDarkCloud/>
        <TopLightCloud/>
        <LocationAcquisition/>
    </div>
  )
}

export default AcquisitionSection
