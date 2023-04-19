
interface ContextProviderProps {
    children: any | any[]
}
interface SidebarContext {
    isClose: boolean,
    closeSidebar: () => void
    openSidebar: () => void,
    toggle: () => void
}