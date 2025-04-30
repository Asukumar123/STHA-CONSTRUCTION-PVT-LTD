
import Banner from "../../Components/Home/Banner";
import Hero from "../../Components/Home/Hero";
import ProjectsGrid from "../../Components/Home/project-grid";
import SupportedBy from "../../Components/Home/supported";
import Testimonials from "../../Components/Home/testimonial";
import Contactus from "../../Components/Home/Contactus";

export default function Home() {
  return (
    <div>
      
    <Hero />
    <section className="container mx-auto ">
    <ProjectsGrid />
   
  </section>
  <section className="container  ">
  <Banner />
  </section>
  <Testimonials />
  <SupportedBy />\
  <section className="container   ">
  <Contactus />
</section>
  </div>
  );
}
