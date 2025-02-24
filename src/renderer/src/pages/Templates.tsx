import { AppSidebar } from '@/components/AppSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export default function Templates() {
  return (
<SidebarProvider>
    <AppSidebar />
    <main className="flex min-h-screen justify-center p-4">
      <SidebarTrigger />
    
    </main>
    </SidebarProvider>
  )
}

