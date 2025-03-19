import Action from "@/components/Home/Action";
import HeroSection from "@/components/Home/HeroSection";
import MeetPet from "@/components/Home/MeetPet";
import Stories from "@/components/Home/Stories";
import Works from "@/components/Home/Works";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MeetPet />
      <Works />
      <Stories />
      <Action />
    </>
  );
}
