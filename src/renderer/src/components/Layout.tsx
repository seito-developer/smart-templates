import React from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import { CatSidebar } from '@/components/CatSidebar'
import { cats } from '@/data/cats'
import Headline from './Headline'

export default function Layout({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <SidebarProvider>
      <div className="flex-1">
        <CatSidebar cats={cats} />
      </div>
      <main className="p-4 flex-3">
        <Headline>{title}</Headline>
        {children}
      </main>
    </SidebarProvider>
  )
}
