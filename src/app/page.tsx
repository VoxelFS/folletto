import Image from "next/image";
import Hero from "@/components/home/Hero";
import StandardLayout from "@/components/layouts/StandardLayout";

export default function Home() {
  return (
      <StandardLayout>
          <Hero />
      </StandardLayout>
  );
}
