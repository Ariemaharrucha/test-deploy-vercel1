"use client"

import type * as React from "react"
import {
  History,
  Home,
  Settings,
  StickyNote,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { UserNav } from "./user-nav"

type NavigationItem = {
  title: string
  url: string
  icon: React.ComponentType<any>
  isActive?: boolean
  badge?: string
}

type NavigationSection = {
  title: string
  items: NavigationItem[]
}

// Navigation data
const navigationItems: NavigationSection[] = [
  {
    title: "Features",
    items: [
      {
        title: "Cover Letter",
        url: "/dashboard/cover-letter",
        icon: StickyNote,
        isActive: true,
      },
      {
        title: "History",
        url: "/dashboard/history",
        icon: History,
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
      },
    ],
  }
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 py-2">
          <div className="flex p-2 items-center justify-center rounded-lg bg-navy-900">
            <Home className="h-4 w-4 text-orange-500" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold text-navy-900">Dashboard</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {navigationItems.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel className="text-navy-700 font-medium">{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive}
                      className="hover:bg-orange-50 hover:text-orange-600 data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700"
                    >
                      <a href={item.url} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-medium text-white">
                            {item.badge}
                          </span>
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}

        {/* <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="hover:bg-gray-100">
                  <a href="/dashboard/settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}
      </SidebarContent>

      {/* <SidebarFooter>
        <UserNav />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}