import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-6">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
