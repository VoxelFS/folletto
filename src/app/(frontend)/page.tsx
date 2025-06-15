import Hero from "@/components/home/Hero";
import StandardLayout from "@/components/layouts/StandardLayout";
import InfoBanner from "@/components/home/InfoBanner";
import AboutUs from "@/components/home/AboutUs";
import FollettoFeatures from "@/components/home/FollettoFeatures";
import Menu from "@/components/home/Menu";

export default function Home() {
  return (
      <StandardLayout>
          <Hero/>
          <div className="responsive-fullwidth mt-75 sm:mt-55 bg-background-black py-10 px-22">
              <InfoBanner/>
          </div>
          <AboutUs />
          <div className="responsive-fullwidth my-32">
              <FollettoFeatures />
          </div>
          <div className="responsive-fullwidth mb-32 mx-auto">
              <Menu />
          </div>
      </StandardLayout>
);
}
