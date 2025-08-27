import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Find the perfect freelance services for your business
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Connect with talented freelancers and get your projects done quickly and efficiently.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for services..."
                className="w-full pl-8 rounded-md border bg-background"
              />
            </div>
            <Button>Search</Button>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            Popular:
            <Link href="#" className="underline hover:text-primary">
              Web Design
            </Link>
            <Link href="#" className="underline hover:text-primary">
              Logo Design
            </Link>
            <Link href="#" className="underline hover:text-primary">
              Content Writing
            </Link>
          </div>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <Image
            src="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Freelancers working"
            width={550}
            height={550}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </div>
  </section>
  )
} 