import Reviews from "./Sections/reviews"
import About from "./Sections/AboutUs"
import Banner from "./Sections/Banner"
import ContactForm from "./Sections/ContactForm"
import Footer from "./Sections/Footer"
import Project from "./Sections/Project"
import Services from "./Sections/Services"
import Testimonials from "./Sections/Testimonials"
function App() {
  return (
    <>
      <Banner></Banner>
      <Reviews></Reviews>
      <Services></Services>
      <About></About>
      <Testimonials></Testimonials>
      {/* <ContactForm></ContactForm> */}
      <Footer></Footer>
    </>
  )
}

export default App
