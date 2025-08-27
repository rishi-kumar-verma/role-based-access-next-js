import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"
import type { Freelancer } from "@/types"
import { freelancers } from "@/data/freelancers"

export function Freelancers() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Top Rated Freelancers</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Work with talented professionals from around the world
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {freelancers.map((freelancer) => (
            <FreelancerCard key={freelancer.name} freelancer={freelancer} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button variant="outline" className="gap-1">
            View All Freelancers <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function FreelancerCard({ freelancer }: { freelancer: Freelancer }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-2 hover:border-primary">
      <div className="flex h-full flex-col justify-between rounded-md p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20">
              <Image
                src={freelancer.image}
                alt={freelancer.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold">{freelancer.name}</h3>
              <p className="text-sm text-muted-foreground">{freelancer.title}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-medium">{freelancer.rating}</span>
                <span className="text-sm text-muted-foreground">({freelancer.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
        <Button variant="outline" className="mt-4 w-full">
          View Profile
        </Button>
      </div>
    </div>
  )
} 