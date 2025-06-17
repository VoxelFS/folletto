import Hero from "@/components/home/Hero";
import StandardLayout from "@/components/layouts/StandardLayout";
import InfoBanner from "@/components/home/InfoBanner";
import AboutUs from "@/components/home/AboutUs";
import FollettoFeatures from "@/components/home/FollettoFeatures";
import Menu from "@/components/home/Menu";
import Contact from "@/components/home/Contact";
import Banner from "@/components/ui/Banner";

export default function Home() {
  return (
      <StandardLayout>
          <Hero/>
          <section className="responsive-fullwidth mt-20 bg-background-black py-10 px-22">
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
              <Banner
                  title={"LOOKING TO BECOME A FRANCHISEE?"}
                  description={"Join a revolutionary shift in cafe services. Explore the possibilities of owning your own robotic cafe," +
                      " where innovation and automation translate into high returns on investment and unparalleled profits" +
                      " that many businesses aspire to achieve."}
                  link={"Get Folletto"}
                  href={"/franchise"}
                  img={"/images/hero/coffee_mug.png"}
                  alt={"coffee mug"}
              />
          </section>

          <section className="mb-20">
              <Contact />
          </section>
      </StandardLayout>
);
}
