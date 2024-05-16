import React from 'react'

const Thumbnail = () => {
    return (
        <>
            <div className="bg-white h-screen">
                <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                            <div>
                                <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">A Online Shop For EveryOne</p>
                                <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Connect & Explore What We Offer To You</h1>
                                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Visit and Buy</p>
                            </div>
                            <div>
                                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Thumbnail