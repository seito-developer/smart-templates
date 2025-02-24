import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
  } from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

interface Template {
  title: string;
  url: string;
}

interface Cat {
  title: string;
  templates: Template[];
}
  
interface CatSidebarProps {
  cats: Cat[];
}

export function CatSidebar({ cats }: CatSidebarProps) {
  return (
    <Sidebar>
      <SidebarContent>
        {cats.map((catItem) => (
          <SidebarMenu key={catItem.title}>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    {catItem.title}
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {catItem.templates.map((templateItem) => (
                    <SidebarMenuSub key={templateItem.title}>
                      <SidebarMenuSubItem>
                        <SidebarMenuButton>
                          {templateItem.title}
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  ))}
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}