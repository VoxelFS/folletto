import Image from "next/image";
import Hero from "@/components/home/Hero";
import StandardLayout from "@/components/layouts/StandardLayout";
import InfoBanner from "@/components/home/InfoBanner";

export default function Home() {
  return (
      <StandardLayout>
          <Hero />
          <InfoBanner />
      </StandardLayout>
  );
}
