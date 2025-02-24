import { CatSidebar } from '@/components/CatSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { cats } from '@/data/cats'

export default function Templates() {
  return (
  <SidebarProvider>
    <CatSidebar cats={cats} />
    <main className="flex min-h-screen justify-center p-4">
      
    
    </main>
    </SidebarProvider>
  )
}

