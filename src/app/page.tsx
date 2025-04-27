
import Banner from "../../Components/Home/Banner";
import Hero from "../../Components/Home/Hero";
import ProjectsGrid from "../../Components/Home/project-grid";

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
  </div>
  );
}
