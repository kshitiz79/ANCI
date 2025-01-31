import BannerSection from "@/components/blog/BannerSection";
import AboutUs from "@/components/Home/AboutUs";
import OurAchievements from "@/components/Home/Achivements";
import WhyChooseUs from "@/components/Home/ChooseUs";
import ContactUs from "@/components/Home/ContactUs";

import OurExpertise from "@/components/Home/Expertise";
import Hero from "@/components/Home/Hero";
import ISOCertifications from "@/components/Home/ISOCertificate";



import OurServices from "@/components/Home/Service";
import Testimonials from "@/components/Home/Testimonials";
import OurWorks from "@/components/Home/Work";


export default function Home() {










  return (
    <div>
       <Hero/>
       <BannerSection/>
     <AboutUs/>
       <OurServices/>
       <OurWorks/>
       <OurExpertise/>
   
       <WhyChooseUs/>
       <ISOCertifications/>

   
       <OurAchievements/>
 
    <Testimonials/>
    <ContactUs/> 
    </div>
  );
}
