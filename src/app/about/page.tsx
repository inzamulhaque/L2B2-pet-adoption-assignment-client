import CoreValues from "@/components/About/CoreValues";
import Impact from "@/components/About/Impact";
import MissionVision from "@/components/About/MissionVision";
import OurTeam from "@/components/About/OurTeam";
import StorySection from "@/components/About/StorySection";
import VolunteerSection from "@/components/About/VolunteerSection";
import HeroSection from "@/components/Home/HeroSection";

import React from "react";

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Our Story Section */}
      <StorySection />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Impact Statistics */}
      <Impact />

      {/* Core Values */}
      <CoreValues />

      {/* Meet Our Team */}
      <OurTeam />

      {/* Volunteer Section */}
      <VolunteerSection />
    </>
  );
};

export default page;
