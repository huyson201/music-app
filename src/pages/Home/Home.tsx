import classNames from 'classnames'
import React from 'react'
import { useSidebar } from '../../contexts/SidebarContext'

interface Props { }

const Home = (props: Props) => {
    const sidebar = useSidebar()
    return (
        <div className={classNames('w-full lg:w-[calc(100%_-_var(--close-sidebar-width))] [&.side-open]:lg:w-[calc(100%_-_var(--sidebar-width))] h-100vh ml-auto', { "side-open": !sidebar.isClose })}>

        </div>
    )
}

export default Home