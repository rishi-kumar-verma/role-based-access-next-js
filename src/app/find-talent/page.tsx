import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Search, Star, Filter, ArrowUpDown } from "lucide-react"

export default function FindTalent() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[300px_1fr] lg:gap-12">
              {/* Filters Sidebar */}
              <div className="space-y-6">
                <div className="rounded-lg border bg-card p-4">
                  <h3 className="mb-4 text-lg font-medium">Filters</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 text-sm font-medium">Category</h4>
                      <div className="space-y-2">
                        {[
                          "Web Development",
                          "Design",
                          "Writing",
                          "Marketing",
                          "Video & Animation",
                          "Music & Audio",
                        ].map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox id={`category-${category}`} />
                            <label
                              htmlFor={`category-${category}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-medium">Price Range</h4>
                      <div className="space-y-4">
                        <Slider defaultValue={[50]} max={100} step={1} />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">$10</span>
                          <span className="text-sm">$1000+</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-medium">Rating</h4>
                      <div className="space-y-2">
                        {[4, 3, 2, 1].map((rating) => (
                          <div key={rating} className="flex items-center space-x-2">
                            <Checkbox id={`rating-${rating}`} />
                            <label
                              htmlFor={`rating-${rating}`}
                              className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {Array(rating)
                                .fill(0)
                                .map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                ))}
                              {Array(5 - rating)
                                .fill(0)
                                .map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-muted-foreground" />
                                ))}
                              <span className="ml-1">& Up</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-medium">Experience Level</h4>
                      <div className="space-y-2">
                        {["Entry", "Intermediate", "Expert"].map((level) => (
                          <div key={level} className="flex items-center space-x-2">
                            <Checkbox id={`level-${level}`} />
                            <label
                              htmlFor={`level-${level}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {level}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full">Apply Filters</Button>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <h1 className="text-3xl font-bold tracking-tight">Find Talent</h1>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <Filter className="h-4 w-4" />
                      Filters
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ArrowUpDown className="h-4 w-4" />
                      Sort
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search for freelancers..."
                    className="w-full pl-8 rounded-md border bg-background"
                  />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Alex Johnson",
                      title: "Web Developer",
                      rating: 4.9,
                      reviews: 127,
                      hourlyRate: "$45",
                      description: "Full-stack developer with 5+ years of experience in React, Node.js, and MongoDB.",
                      image: "https://source.unsplash.com/iFgRcqHznqg",
                    },
                    {
                      name: "Sarah Williams",
                      title: "Graphic Designer",
                      rating: 4.8,
                      reviews: 93,
                      hourlyRate: "$35",
                      description: "Creative designer specializing in brand identity, logos, and marketing materials.",
                      image: "https://source.unsplash.com/O3ymvT7Wf9U",
                    },
                    {
                      name: "Michael Chen",
                      title: "Content Writer",
                      rating: 4.7,
                      reviews: 85,
                      hourlyRate: "$30",
                      description: "SEO-focused content writer with expertise in technology and business niches.",
                      image: "https://source.unsplash.com/sibVwORYqs0",
                    },
                    {
                      name: "Jessica Lee",
                      title: "Digital Marketer",
                      rating: 4.9,
                      reviews: 112,
                      hourlyRate: "$50",
                      description:
                        "Digital marketing specialist with proven results in PPC, social media, and email campaigns.",
                      image: "https://source.unsplash.com/7ydep8OEvbc",
                    },
                    {
                      name: "David Smith",
                      title: "Video Editor",
                      rating: 4.8,
                      reviews: 76,
                      hourlyRate: "$40",
                      description:
                        "Professional video editor with experience in commercials, social media content, and short films.",
                      image: "https://source.unsplash.com/d1UPkiFd04A",
                    },
                    {
                      name: "Emily Brown",
                      title: "UI/UX Designer",
                      rating: 4.9,
                      reviews: 104,
                      hourlyRate: "$55",
                      description: "User-centered designer creating intuitive and engaging digital experiences.",
                      image: "https://source.unsplash.com/IF9TK5Uy-KI",
                    },
                  ].map((freelancer) => (
                    <Card key={freelancer.name} className="overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <Image
                            src={
                              freelancer.image ||
                              `/placeholder.svg?height=80&width=80&text=${freelancer.name.charAt(0)}`
                            }
                            alt={freelancer.name}
                            width={80}
                            height={80}
                            className="rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-bold">
                              <Link
                                href={`/freelancer/${freelancer.name.toLowerCase().replace(" ", "-")}`}
                                className="hover:underline"
                              >
                                {freelancer.name}
                              </Link>
                            </h3>
                            <p className="text-sm text-muted-foreground">{freelancer.title}</p>
                            <div className="flex items-center gap-1 mt-1">
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <span className="text-sm font-medium">{freelancer.rating}</span>
                              <span className="text-sm text-muted-foreground">({freelancer.reviews} reviews)</span>
                            </div>
                          </div>
                        </div>
                        <p className="mt-4 text-sm">{freelancer.description}</p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="font-medium">{freelancer.hourlyRate}/hr</span>
                          <Button size="sm">Contact</Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center gap-2 mt-8">
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <Button key={page} variant={page === 1 ? "default" : "outline"} size="sm" className="w-9">
                      {page}
                    </Button>
                  ))}
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

