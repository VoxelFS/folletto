import Hero from "@/components/home/Hero";
import StandardLayout from "@/components/layouts/StandardLayout";
import InfoBanner from "@/components/home/InfoBanner";
import AboutUs from "@/components/home/AboutUs";
import FollettoFeatures from "@/components/home/FollettoFeatures";
import Menu from "@/components/home/Menu";
import Franchisee from "@/components/home/Franchisee";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
      <StandardLayout>
          <Hero/>
          <section className="responsive-fullwidth mt-75 sm:mt-55 bg-background-black py-10 px-22">
              <InfoBanner/>
          </section>

          <AboutUs />

          <section className="responsive-fullwidth my-32">
              <FollettoFeatures />
          </section>

          <section className="responsive-fullwidth mb-48 mx-auto">
              <Menu />
          </section>

          <section className="responsive-fullwidth mb-20">
              <Franchisee />
          </section>

          <section className="mb-20">
              <Contact />
          </section>
      </StandardLayout>
);
}
