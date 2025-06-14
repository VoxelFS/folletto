import Hero from "@/components/home/Hero";
import StandardLayout from "@/components/layouts/StandardLayout";
import InfoBanner from "@/components/home/InfoBanner";
import AboutUs from "@/components/home/AboutUs";

export default function Home() {
  return (
      <StandardLayout>
          <Hero/>
          <div className="responsive-fullwidth mt-75 sm:mt-55 bg-background-black py-10 px-22">
              <InfoBanner/>
          </div>

          <div className="mb-50">
              <AboutUs />
          </div>
      </StandardLayout>
);
}
