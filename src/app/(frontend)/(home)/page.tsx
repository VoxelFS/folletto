import Hero from "@/app/(frontend)/(home)/_components/Hero";
import StandardLayout from "@/components/layouts/StandardLayout";
import InfoBanner from "@/app/(frontend)/(home)/_components/InfoBanner";
import AboutUs from "@/app/(frontend)/(home)/_components/AboutUs";
import FollettoFeatures from "@/app/(frontend)/(home)/_components/FollettoFeatures";
import Menu from "@/app/(frontend)/(home)/_components/Menu";
import Contact from "@/app/(frontend)/(home)/_components/Contact";
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
