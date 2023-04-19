import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../../components/Wrapper/Wrapper'
import SlideList from '../../components/SliceList/SlideList'
import ListArtist from '../../components/ListArtist/ListArtist'
import TopAlbum from '../../components/TopAlbum/TopAlbum'

interface Props { }

const Home = (props: Props) => {
    return (
        <>
            <div className='
            w-full h-80 bg-hero bg-cover bg-center relative
            after:content-[""] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t
            after:from-[#fff] after:to-[#ffffff3b] ' ></div>
            <Wrapper>
                {/* chart */}
                <div >
                    <div className='relative -mt-12 mb-8'>
                        <div className='uppercase text-body-color font-semibold text-xs mb-1'>LISTEN TOP CHARTS</div>
                        <h3 className='flex items-center'>
                            <div className='grow basis-0 text-[28px] font-bold capitalize'>
                                <span className='text-dark font-roboto'>Top </span>
                                <span className='text-primary'>Charts</span>
                            </div>
                            <Link to="#" className='
                        font-semibold text-[13px] text-primary uppercase pb-0.5 relative
                        before:content-[""] before:absolute before:w-full before:h-[2px] before:bottom-0 before:bg-primary'>VIEW ALL</Link>
                        </h3>
                    </div>
                    <SlideList />
                </div>

                {/* new release */}
                <div className='mt-32'>
                    <div className='relative -mt-12 mb-8'>
                        <div className='uppercase text-body-color font-semibold text-xs mb-1'>new to listen</div>
                        <h3 className='flex items-center'>
                            <div className='grow basis-0 text-[28px] font-bold capitalize'>
                                <span className='text-dark font-roboto'>New </span>
                                <span className='text-primary'>Release</span>
                            </div>
                            <Link to="#" className='
                        font-semibold text-[13px] text-primary uppercase pb-0.5 relative
                        before:content-[""] before:absolute before:w-full before:h-[2px] before:bottom-0 before:bg-primary'>VIEW ALL</Link>
                        </h3>
                    </div>
                    <SlideList />
                </div>
                {/* artists */}
                <div className='mt-32'>
                    <div className='relative -mt-12 mb-8'>
                        <div className='uppercase text-body-color font-semibold text-xs mb-1'>Best to listen</div>
                        <h3 className='flex items-center'>
                            <div className='grow basis-0 text-[28px] font-bold capitalize'>
                                <span className='text-dark font-roboto '>featured </span>
                                <span className='text-primary'>Artists</span>
                            </div>
                            <Link to="#" className='
                        font-semibold text-[13px] text-primary uppercase pb-0.5 relative
                        before:content-[""] before:absolute before:w-full before:h-[2px] before:bottom-0 before:bg-primary'>VIEW ALL</Link>
                        </h3>
                    </div>
                    <ListArtist />
                </div>
                {/* album */}
                <div className='mt-32'>
                    <div className='relative -mt-12 mb-8'>
                        <div className='uppercase text-body-color font-semibold text-xs mb-1'>TRENDING TO LISTEN</div>
                        <h3 className='flex items-center'>
                            <div className='grow basis-0 text-[28px] font-bold capitalize'>
                                <span className='text-dark font-roboto '>top </span>
                                <span className='text-primary'>albums</span>
                            </div>
                            <Link to="#" className='
                        font-semibold text-[13px] text-primary uppercase pb-0.5 relative
                        before:content-[""] before:absolute before:w-full before:h-[2px] before:bottom-0 before:bg-primary'>VIEW ALL</Link>
                        </h3>
                    </div>
                    <TopAlbum />
                </div>
            </Wrapper>
        </>
    )
}



export default Home