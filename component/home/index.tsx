import React from 'react'
import BannerSection from './BannerSection'
import Feature from './Feature'
import GetStarted from './GetStarted'
import GetWork from './GetWork'
import NativePrototype from './NativePrototype'
import PricePlan from './PricePlan'
import ResponsiveDna from './ResponsiveDna'

export default function Home() {
    return (
        <div>
            <BannerSection />
            <Feature />
            <GetStarted />
            <ResponsiveDna />
            <NativePrototype />
            <PricePlan />
            <GetWork />
        </div>
    )
}
