"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { GalleryVerticalEndIcon, AudioLinesIcon, TerminalIcon, TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon, ShoppingBagIcon, ChartBarBigIcon } from "lucide-react"
// use lucide icons for consistent sizing
import { NavSecondary } from "./nav-secondary"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: (
        <GalleryVerticalEndIcon
        />
      ),
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: (
        <AudioLinesIcon
        />
      ),
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: (
        <TerminalIcon
        />
      ),
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Order",
      url: "#",
      icon: (
        <BookOpenIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "Order",
          url: "/admin/order",
        },
      ],
    },
    {
      title: "Product",
      url: "#",
      icon: (
        <ShoppingBagIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "Products",
          url: "/admin/product",
        },
        {
          title: "Add Product",
          url: "/admin/product/create",
        },
      ],
    },
    {
      title: "Category",
      url: "#",
      icon: (
        <ChartBarBigIcon
        />
      ),
      isActive: true,
      items: [
        {
          title: "Categories",
          url: "#",
        },
        {
          title: "Add Category",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Configuration",
      url: "/admin/configuration",
      icon: <Settings2Icon />,
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
