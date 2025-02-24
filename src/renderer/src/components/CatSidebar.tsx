import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
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
        <Collapsible defaultOpen className="group/collapsible">
          {cats.map((catItem) => (
            <SidebarGroup key={catItem.title}>
              <SidebarGroupLabel asChild>
                  <CollapsibleTrigger>
                    {catItem.title}
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                {catItem.templates.map((templateItem) => (
                  <SidebarGroupContent key={templateItem.title}>
                    <SidebarMenuItem key={templateItem.title}>
                      <SidebarMenuButton asChild>
                          <span>{templateItem.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarGroupContent>
                ))}
              </CollapsibleContent>
            </SidebarGroup>
          ))}
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  )
}