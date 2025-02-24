import {
    Sidebar,
    SidebarContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
import { cats } from "@/data/cats"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
      <SidebarMenu>
              {cats.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>

      </SidebarContent>
    </Sidebar>
  )
}
