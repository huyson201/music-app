import classNames from 'classnames'
import React, { MouseEvent, useRef, useState } from 'react'
import { RiHeartLine, RiMoreFill, RiPlayFill, RiVipCrownFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

type Props = {}

type TabItem = "Recent" | "Trending" | "International"
const TrendingTrackTab = (props: Props) => {
    const tabIndicator = useRef<HTMLSpanElement>(null)
    const [currentTab, setCurrentTab] = useState<TabItem>("Recent")
    const handleSelectTab = (tab: TabItem) => {
        return (e: MouseEvent<HTMLLIElement>) => {
            setCurrentTab(tab)
            if (!tabIndicator.current) return
            tabIndicator.current.style.left = e.currentTarget.offsetLeft + "px"
            tabIndicator.current.style.width = e.currentTarget.offsetWidth + "px"
        }
    }
    return (
        <div className='mt-16'>
            <div className='relative'>
                <ul className='flex gap-x-2 border-b border-[#eff2f5]'>
                    <li onClick={handleSelectTab("Recent")} className={classNames('p-2 capitalize cursor-pointer text-dark [&.active]:text-primary text-sm font-medium text-center ', { active: currentTab === "Recent" })}>Recent</li>
                    <li onClick={handleSelectTab("Trending")} className={classNames('p-2 capitalize cursor-pointer text-dark [&.active]:text-primary text-sm font-medium text-center ', { active: currentTab === "Trending" })}>Trending</li>
                    <li onClick={handleSelectTab("International")} className={classNames('p-2 capitalize cursor-pointer text-dark [&.active]:text-primary text-sm font-medium text-center ', { active: currentTab === "International" })}>international</li>
                </ul>
                <span ref={tabIndicator} className='transition-all duration-300 absolute bottom-0 left-0 h-0.5 w-16 bg-primary'></span>
            </div>
            <div>
                {
                    new Array(5).fill(0).map((_, index) => {
                        return (
                            <TabItem key={index.toString()} />
                        )
                    })
                }
            </div>
        </div>
    )
}

const TabItem = () => {
    return (
        <div className='w-full flex items-center p-2 hover:bg-bg-sidebar transition-all duration-300 rounded-lg '>
            <div className='flex  grow basis-0 items-center'>
                <div className='relative w-12 h-12 group'>
                    <img className=' w-full h-full object-cover rounded-lg' src="/images/recent-2.jpg" alt="album" />
                    <button className='absolute hidden  group-hover:flex items-center justify-center rounded-full w-8 h-8 bg-white top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                        <RiPlayFill className='text-2xl text-dark' />
                    </button>
                </div>
                <div className='ml-4 grow basis-0'>
                    <Link to={"#"}>
                        <div className='text-sm text-dark'>Mummy</div>
                        <div className='text-[13px] text-[#8c9095]'>Arebica Luna</div>
                    </Link>
                </div>

            </div>
            <div className='flex gap-x-4 items-center'>
                <span className='w-6 h-6 rounded-full flex items-center justify-center text-white text-sm bg-[#00dee3]'><RiVipCrownFill /></span>
                <button className='text-2xl'><RiHeartLine /></button>
                <span className='text-sm'>03:24</span>
                <button className='text-2xl'><RiMoreFill /></button>
            </div>
        </div>
    )
}
export default TrendingTrackTab