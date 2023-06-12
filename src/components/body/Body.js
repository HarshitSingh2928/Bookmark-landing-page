import React from 'react'
import FirstSection from './firstSection/FirstSection'
import FeaturesSection from './featuresSection/FeaturesSection'
import ExtensionSection from './extensionSection/ExtensionSection'
import FaqSection from './faqSection/FaqSection'
import BottomSection from './bottomSection/BottomSection'

const Body = () => {
  return (
    <div>
       <FirstSection/>
       <FeaturesSection/>
       <ExtensionSection/>
       <FaqSection/>
       <BottomSection/>
    </div>
  )
}

export default Body