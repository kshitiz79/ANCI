
"use client";



import OurWorksSection from '@/components/About/Client'
import ProfileCards from '@/components/About/Projile'
import WhoWeAreSection from '@/components/About/Top'
import OurAchievements from '@/components/Home/Achivements'
import React from 'react'

const page = () => {
  return (
    <div>
    <WhoWeAreSection/>
    <OurWorksSection/>

    <ProfileCards/>
    <OurAchievements/>
    </div>
  )
}

export default page