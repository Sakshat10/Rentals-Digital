import BallonCont from "./BallonContact"
import CloudCont from "./CloudCont"
import ContactForm from "./ContactForm"
import PlaneCont from "./PlaneCont"


function ContactSection() {
  return (
    <div>
        <ContactForm/>
        <CloudCont/>
        <PlaneCont/>
        <BallonCont/>
    </div>
  )
}

export default ContactSection
