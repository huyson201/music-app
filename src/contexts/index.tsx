import React from 'react'
import SidebarProvider from './SidebarContext'

const ContextProvider = ({ children }: ContextProviderProps) => {
    return (
        <>
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </>
    )
}


export default ContextProvider