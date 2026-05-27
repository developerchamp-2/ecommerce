"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  ChevronRightIcon,
  LayoutDashboardIcon,
  Package2Icon,
  ShoppingBagIcon,
  SparklesIcon,
  TagIcon,
  UserIcon,
} from "lucide-react"

type NavigationSubItem = {
  title: string
  href: string
  description: string
}

type NavigationItem = {
  title: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  hint: string
  subItems?: NavigationSubItem[]
}

const navigationGroups: {
  label: string
  items: NavigationItem[]
}[] = [
  {
    label: "Sidebar",
    items: [
      {
        title: "Dashboard",
        href: "/admin/dashboard",
        icon: LayoutDashboardIcon,
        hint: "Today",
      },
    ],
  },
  {
    label: "Management",
    items: [
      {
        title: "Orders",
        href: "/admin/order",
        icon: ShoppingBagIcon,
        hint: "Live",
        subItems: [
          {
            title: "All Orders",
            href: "/admin/order?view=all",
            description: "Complete order list",
          },
          {
            title: "Pending",
            href: "/admin/order?view=pending",
            description: "Awaiting confirmation",
          },
          {
            title: "Shipped",
            href: "/admin/order?view=shipped",
            description: "Already dispatched",
          },
          {
            title: "Returns",
            href: "/admin/order?view=returns",
            description: "Return and refund queue",
          },
        ],
      },
      {
        title: "Products",
        href: "/admin/product",
        icon: Package2Icon,
        hint: "Catalog",
        subItems: [
          {
            title: "All Products",
            href: "/admin/product?view=all",
            description: "Browse every SKU",
          },
          {
            title: "Featured",
            href: "/admin/product?view=featured",
            description: "Homepage highlights",
          },
          {
            title: "Drafts",
            href: "/admin/product?view=drafts",
            description: "Unpublished items",
          },
          {
            title: "Low Stock",
            href: "/admin/product?view=low-stock",
            description: "Needs replenishment",
          },
        ],
      },
      {
        title: "Categories",
        href: "/admin/category",
        icon: TagIcon,
        hint: "Browse",
        subItems: [
          {
            title: "All Categories",
            href: "/admin/category?view=all",
            description: "Full taxonomy",
          },
          {
            title: "Featured",
            href: "/admin/category?view=featured",
            description: "Homepage collection links",
          },
          {
            title: "Seasonal",
            href: "/admin/category?view=seasonal",
            description: "Temporary campaigns",
          },
          {
            title: "Archived",
            href: "/admin/category?view=archived",
            description: "Hidden from storefront",
          },
        ],
      },
      {
        title: "Users",
        href: "/admin/user",
        icon: UserIcon,
        hint: "Manage",
        subItems: [
          {
            title: "All Users",
            href: "/admin/user?view=all",
            description: "Everyone with access",
          },
          {
            title: "Admins",
            href: "/admin/user?view=admins",
            description: "Full dashboard access",
          },
          {
            title: "Customers",
            href: "/admin/user?view=customers",
            description: "Store account holders",
          },
          {
            title: "Support Team",
            href: "/admin/user?view=support",
            description: "Help desk staff",
          },
        ],
      },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const { isMobile, state } = useSidebar()
  const [hoveredItemHref, setHoveredItemHref] = React.useState<string | null>(
    null
  )

  const expandedItem =
    navigationGroups
      .flatMap((group) => group.items)
      .find((item) => item.href === hoveredItemHref) ?? null

  const isExpandedPanelVisible =
    !!expandedItem?.subItems?.length && !isMobile && state === "expanded"

  return (
    <Sidebar
      collapsible="icon"
      className="border-none bg-transparent p-2"
      style={
        {
          "--sidebar-width": isExpandedPanelVisible ? "28rem" : "16rem",
        } as React.CSSProperties
      }
      {...props}
    >
      <SidebarHeader className="rounded-[24px] border border-white/45 bg-white/18 px-4 py-4 shadow-[0_18px_48px_-34px_rgba(35,45,24,0.35)] backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(15,118,110,0.92),rgba(56,189,248,0.9))] text-white shadow-[0_12px_32px_-18px_rgba(14,116,144,0.7)]">
            <SparklesIcon className="size-5" />
          </div>
          <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
            <p className="truncate text-sm font-semibold tracking-[0.01em] text-slate-900">
              Admin Studio
            </p>
            <p className="truncate text-xs text-slate-500">
              Calm control for your store
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent
        className="mt-3 min-h-0 flex-1 overflow-hidden rounded-[24px] border border-white/40 bg-white/10 shadow-[0_22px_56px_-36px_rgba(35,45,24,0.28)] backdrop-blur-2xl"
        onMouseLeave={() => setHoveredItemHref(null)}
      >
        <div className="flex h-full min-h-0">
          <div className="min-h-0 flex-1 overflow-y-auto px-3 py-4">
            {navigationGroups.map((group) => (
              <SidebarGroup key={group.label} className="p-0 not-last:mb-3">
                <SidebarGroupLabel className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {group.label}
                </SidebarGroupLabel>
                <SidebarMenu className="gap-1">
                  {group.items.map((item) => (
                    <SidebarNavigationItem
                      key={item.href}
                      item={item}
                      isActive={pathname === item.href}
                      isExpanded={expandedItem?.href === item.href}
                      isMobile={isMobile}
                      onHover={() => setHoveredItemHref(item.href)}
                    />
                  ))}
                </SidebarMenu>
              </SidebarGroup>
            ))}
          </div>

          {isExpandedPanelVisible ? (
            <div className="hidden h-full w-[12rem] shrink-0 border-l border-white/35 bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(247,250,242,0.14))] md:flex md:flex-col">
              <div className="border-b border-white/35 px-4 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {expandedItem.title}
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Sample subcategories
                </p>
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto p-3">
                <div className="space-y-1">
                  <Link
                    href={expandedItem.href}
                    className="flex rounded-2xl border border-transparent px-3 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-white/55 hover:bg-white/40 hover:text-slate-950"
                  >
                    Overview
                  </Link>

                  {expandedItem.subItems?.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block rounded-2xl border border-transparent px-3 py-3 text-slate-700 transition-all duration-200 hover:border-white/55 hover:bg-white/40 hover:text-slate-950"
                    >
                      <p className="text-sm font-medium">{subItem.title}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {subItem.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  )
}

function SidebarNavigationItem({
  item,
  isActive,
  isExpanded,
  isMobile,
  onHover,
}: {
  item: NavigationItem
  isActive: boolean
  isExpanded: boolean
  isMobile: boolean
  onHover: () => void
}) {
  const Icon = item.icon

  if (!item.subItems?.length || isMobile) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          isActive={isActive}
          tooltip={item.title}
          className="h-11 rounded-2xl px-3 text-slate-600 transition-all duration-200 hover:bg-white/32 hover:text-slate-950 data-[active=true]:border data-[active=true]:border-white/50 data-[active=true]:bg-white/42 data-[active=true]:text-slate-950"
        >
          <Link href={item.href}>
            <Icon className="size-4" />
            <span className="font-medium">{item.title}</span>
            <span className="ml-auto text-[11px] text-slate-400 group-data-[collapsible=icon]:hidden">
              {item.hint}
            </span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem onMouseEnter={onHover}>
      <SidebarMenuButton
        asChild
        isActive={isActive || isExpanded}
        tooltip={item.title}
        className="h-11 rounded-2xl px-3 text-slate-600 transition-all duration-200 hover:bg-white/32 hover:text-slate-950 data-[active=true]:border data-[active=true]:border-white/50 data-[active=true]:bg-white/42 data-[active=true]:text-slate-950"
      >
        <Link href={item.href}>
          <Icon className="size-4" />
          <span className="font-medium">{item.title}</span>
          <span className="ml-auto flex items-center gap-2 group-data-[collapsible=icon]:hidden">
            <span className="text-[11px] text-slate-400">{item.hint}</span>
            <ChevronRightIcon
              className={`size-4 text-slate-400 transition-transform duration-200 ${
                isExpanded ? "translate-x-0.5" : ""
              }`}
            />
          </span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
