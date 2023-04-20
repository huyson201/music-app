import classNames from 'classnames'
import React, { CSSProperties, ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react'
import Wrapper from '../Wrapper/Wrapper'
import { useSidebar } from '../../contexts/SidebarContext'
import { RiMore2Fill, RiPauseFill, RiPlayFill, RiPlayListFill, RiRepeat2Fill, RiShuffleFill, RiSkipBackMiniFill, RiSkipForwardMiniFill, RiVolumeDownFill } from 'react-icons/ri'
import VolumeSlice from './VolumeSlice/VolumeSlice'

type Props = {}

export interface MyCustomCSS extends CSSProperties {
    '--progress-pos': number;
}

const MusicPlayer = (props: Props) => {
    const sidebar = useSidebar()
    const timelineRef = useRef<HTMLDivElement>(null)
    const timelineContainer = useRef<HTMLDivElement>(null)






    const handleClickTimeline = (event: MouseEvent<HTMLDivElement>) => {
        if (!timelineRef.current) return
        const rect = timelineRef.current.getBoundingClientRect()
        const distance = event.clientX - rect.left
        const percent = Math.min(Math.max(0, distance), rect.width) / rect.width

        timelineRef.current.style.setProperty("--progress-pos", percent + "")
    }

    useEffect(() => {
        if (!timelineRef.current) return
        let isMouseDown: boolean = false
        const handleMousedown = () => {
            isMouseDown = true
        }
        const handleMouseUp = () => {
            isMouseDown = false
            if (timelineContainer.current?.classList.contains("moving")) {
                timelineContainer.current.classList.remove("moving")
            }

        }

        const handleMouseMove = (e: any) => {
            if (!timelineRef.current || !isMouseDown) return
            timelineContainer.current?.classList.add("moving")
            const rect = timelineRef.current.getBoundingClientRect()
            const distance = e.clientX - rect.left
            const percent = Math.min(Math.max(0, distance), rect.width) / rect.width
            timelineRef.current.style.setProperty("--progress-pos", percent + "")

        }

        timelineRef.current.addEventListener("mousedown", handleMousedown)
        window.addEventListener("mouseup", handleMouseUp)
        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            timelineRef.current?.removeEventListener("mousedown", handleMousedown)
            window.removeEventListener("mouseup", handleMouseUp)
        }
    }, [])

    return (
        <header className={classNames(`
            fixed bottom-0 left-0 w-full  py-4 z-[2]
            transition-all duration-300
            lg:right-0 lg:left-auto
            lg:w-[calc(100%_-_var(--close-sidebar-width))] [&.side-open]:lg:w-[calc(100%_-_var(--sidebar-width))]
        `, { "side-open": !sidebar.isClose })}>

            <Wrapper>
                <div className='relative group moving' ref={timelineContainer} draggable={false}>
                    {/* timeline */}
                    <div style={{ "--progress-pos": 0 } as MyCustomCSS} onClick={handleClickTimeline} ref={timelineRef} className='absolute bottom-full cursor-pointer  w-[calc(100%_-_12px)] bg-white  z-[1] left-1.5 h-1'>
                        <div className='
                             absolute bg-primary/50 transition-all duration-200 w-full top-0 left-0 h-0.5 group-hover:h-full
                             group-[.moving]:h-full
                             after:content-[""] after:bg-primary
                             after:absolute after:top-0  after:left-0 after:right-[calc(100%_-_var(--progress-pos,.25)_*_100%)] after:bottom-0
                        '
                        >
                        </div>
                        <div className='scale-0 -translate-x-2/4 group-[.moving]:scale-150 group-hover:scale-150 transition duration-200 absolute h-2 w-2  top-2/4 left-[calc(var(--progress-pos,0.25)_*_100%)] -translate-y-2/4 bg-primary rounded-full'></div>

                    </div>
                    {/* controller */}
                    <div className='flex items-center relative bg-white shadow-md  rounded-lg ' draggable={false}>
                        <div className='flex items-center w-1/4'>
                            <div className='w-[4.5rem] h-[4.5rem]'>
                                <img draggable={false} className='w-full rounded-tl-lg rounded-bl-lg h-full object-cover' src="/images/recent-2.jpg" alt="cover" />
                            </div>
                            <div className='ml-4 w-[calc(100%_-_5.5rem)]'>
                                <div className='text-sm font-semibold text-dark overflow-hidden text-ellipsis'>Mummy</div>
                                <div className='text-[13px] text-[#8c9095]'>Arebica Luna</div>
                            </div>
                        </div>

                        <div className='w-2/4 flex items-center justify-center'>
                            <button className='w-10 h-10 flex items-center justify-center text-dark text-base mr-2'><RiRepeat2Fill /></button>
                            <button className='w-10 h-10 flex items-center justify-center text-dark text-2xl'><RiSkipBackMiniFill /></button>
                            <button className='w-10 h-10 flex items-center justify-center bg-white
                        text-dark text-2xl rounded-full shadow-[0px_2px_4px_0px_rgba(0,0,0,0.2)]
                        hover:bg-primary hover:text-white transition-all duration-300
                        [&.playing]:bg-primary group [&.playing]:text-white  '>
                                <RiPlayFill className='group-[.playing]:hidden' />
                                <RiPauseFill className='group-[.playing]:block hidden' />
                            </button>
                            <button className='w-10 h-10 flex items-center justify-center text-dark text-2xl'><RiSkipForwardMiniFill /></button>
                            <button className='w-10 h-10 flex items-center justify-center text-dark text-base ml-2'><RiShuffleFill /></button>
                        </div>
                        <div className='w-1/4 flex items-center justify-end pr-4'>
                            <div className='mr-6 text-sm'>
                                <span>00:00</span>
                                <span>/</span>
                                <span>00:00</span>
                            </div>
                            <VolumeSlice />
                            <div>
                                <button className='p-2 text-xl text-dark'><RiMore2Fill /></button>
                            </div>
                            <div>
                                <button className='p-2 text-xl text-dark'><RiPlayListFill /></button>
                            </div>
                        </div>
                    </div>

                </div>
            </Wrapper>
        </header>
    )
}

export default MusicPlayer