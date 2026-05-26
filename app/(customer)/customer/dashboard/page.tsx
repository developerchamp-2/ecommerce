import { ChartAreaInteractive } from '@/components/chart-area-interactive'
import { DataTable } from '@/components/data-table'
import { SectionCards } from '@/components/section-cards'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowUpRight, ShoppingBag, DollarSign, Users } from 'lucide-react'
import React from 'react'
import data from './data.json'

const CustomerDashboardPage = () => {
  return (
    <div className="min-h-screen bg-background px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto space-y-8">
        <section className="rounded-3xl border border-border bg-card p-6 shadow-sm shadow-muted/5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Customer dashboard
              </p>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-6">
                <div>
                  <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    Welcome back, Alex
                  </h1>
                  <p className="max-w-2xl text-sm text-muted-foreground">
                    Review orders, growth, and customer behavior at a glance.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button>View reports</Button>
                  <Button variant="secondary">Manage orders</Button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              <CardStat label="Orders" value="4,320" delta="+8.5%" icon={ShoppingBag} />
              <CardStat label="Revenue" value="$128.3k" delta="+12.1%" icon={DollarSign} />
              <CardStat label="Customers" value="8,750" delta="+6.2%" icon={Users} />
              <CardStat label="Avg. order" value="$59.60" delta="+3.4%" icon={ArrowUpRight} />
            </div>
          </div>
        </section>

        <SectionCards />

        <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
          <div className="space-y-6">
            <ChartAreaInteractive />
            <div className="rounded-3xl border border-border bg-card p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold">Recent highlights</h2>
                  <p className="text-sm text-muted-foreground">
                    Latest insights from the store, curated for your customer dashboard.
                  </p>
                </div>
                <Badge variant="secondary">Updated</Badge>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Highlight label="Repeat purchase rate" value="26.4%" />
                <Highlight label="Cart abandonment" value="12.7%" />
                <Highlight label="Site conversion" value="3.9%" />
                <Highlight label="Return rate" value="2.0%" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Customer health</p>
                  <h2 className="text-xl font-semibold">Top performing segments</h2>
                </div>
                <Badge variant="outline">Live</Badge>
              </div>
              <div className="mt-6 grid gap-4">
                <SegmentCard title="New subscribers" value="1,820" change="+18%" />
                <SegmentCard title="VIP shoppers" value="520" change="+9%" />
                <SegmentCard title="Pending orders" value="34" change="-4%" />
              </div>
            </div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

function CardStat({
  label,
  value,
  delta,
  icon: Icon,
}: {
  label: string
  value: string
  delta: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}) {
  return (
    <div className="rounded-3xl border border-border bg-background p-4 shadow-sm shadow-muted/5">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="text-2xl font-semibold tracking-tight text-foreground">{value}</p>
        </div>
        <div className="rounded-2xl bg-primary/10 p-2 text-primary">
          <Icon className="size-5" />
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{delta} vs last period</p>
    </div>
  )
}

function Highlight({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-border bg-background p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p>
    </div>
  )
}

function SegmentCard({
  title,
  value,
  change,
}: {
  title: string
  value: string
  change: string
}) {
  return (
    <div className="rounded-3xl border border-border bg-background p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-1 text-xl font-semibold tracking-tight">{value}</p>
        </div>
        <Badge variant="outline">{change}</Badge>
      </div>
    </div>
  )
}

export default CustomerDashboardPage
