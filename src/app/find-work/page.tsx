import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ArrowUpDown, Briefcase, Clock, DollarSign } from "lucide-react"

export default function FindWork() {
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
                      <h4 className="mb-2 text-sm font-medium">Budget Range</h4>
                      <div className="space-y-4">
                        <Slider defaultValue={[50]} max={100} step={1} />
                        <div className="flex items-center justify-between">
                          <span className="text-sm">$100</span>
                          <span className="text-sm">$10,000+</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-medium">Project Type</h4>
                      <div className="space-y-2">
                        {["Fixed Price", "Hourly Rate"].map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox id={`type-${type}`} />
                            <label
                              htmlFor={`type-${type}`}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {type}
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
                  <h1 className="text-3xl font-bold tracking-tight">Find Work</h1>
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
                    placeholder="Search for jobs..."
                    className="w-full pl-8 rounded-md border bg-background"
                  />
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Full-Stack Web Developer Needed for E-commerce Site",
                      company: "TechRetail Inc.",
                      budget: "$3,000 - $5,000",
                      type: "Fixed Price",
                      duration: "2-3 months",
                      posted: "2 days ago",
                      description:
                        "We're looking for an experienced full-stack developer to build an e-commerce platform with React, Node.js, and MongoDB. The project includes user authentication, product catalog, shopping cart, and payment integration.",
                      skills: ["React", "Node.js", "MongoDB", "Express", "Payment API"],
                      proposals: 12,
                    },
                    {
                      title: "Logo and Brand Identity Design for Startup",
                      company: "GreenFuture",
                      budget: "$800 - $1,200",
                      type: "Fixed Price",
                      duration: "2 weeks",
                      posted: "1 day ago",
                      description:
                        "Our eco-friendly startup needs a complete brand identity package including logo, color palette, typography, and basic brand guidelines. We want a modern, clean design that communicates sustainability and innovation.",
                      skills: ["Logo Design", "Branding", "Adobe Illustrator", "Typography"],
                      proposals: 24,
                    },
                    {
                      title: "Content Writer for Technology Blog",
                      company: "TechInsights",
                      budget: "$30 - $50 per hour",
                      type: "Hourly Rate",
                      duration: "Ongoing",
                      posted: "3 days ago",
                      description:
                        "We're seeking a knowledgeable technology writer to create engaging blog posts about the latest tech trends, product reviews, and industry news. Must have excellent research skills and the ability to explain complex topics in an accessible way.",
                      skills: ["Content Writing", "SEO", "Technology", "Research"],
                      proposals: 18,
                    },
                    {
                      title: "Social Media Marketing Campaign",
                      company: "FashionForward",
                      budget: "$1,500 - $2,500",
                      type: "Fixed Price",
                      duration: "1 month",
                      posted: "5 hours ago",
                      description:
                        "We need a social media expert to plan and execute a campaign for our new summer collection across Instagram, Facebook, and TikTok. The ideal candidate will have experience in fashion marketing and creating engaging visual content.",
                      skills: ["Social Media Marketing", "Content Creation", "Fashion", "Analytics"],
                      proposals: 9,
                    },
                    {
                      title: "Mobile App UI/UX Design",
                      company: "HealthTrack",
                      budget: "$4,000 - $6,000",
                      type: "Fixed Price",
                      duration: "1-2 months",
                      posted: "1 week ago",
                      description:
                        "We're developing a health and fitness tracking app and need a skilled UI/UX designer to create an intuitive, engaging user interface. The project includes wireframes, user flows, and high-fidelity mockups for iOS and Android.",
                      skills: ["UI/UX Design", "Mobile App Design", "Figma", "User Testing"],
                      proposals: 15,
                    },
                  ].map((job, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div>
                            <div className="flex items-start justify-between">
                              <h3 className="font-bold text-lg">
                                <Link href={`/job/${index + 1}`} className="hover:underline">
                                  {job.title}
                                </Link>
                              </h3>
                              <Badge variant="outline" className="ml-2">
                                {job.type}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{job.company}</p>
                          </div>
                          <p className="text-sm">{job.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4 text-muted-foreground" />
                              <span>{job.budget}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>{job.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4 text-muted-foreground" />
                              <span>{job.proposals} proposals</span>
                            </div>
                            <div className="text-muted-foreground">Posted {job.posted}</div>
                          </div>
                          <div className="flex justify-end">
                            <Button>Apply Now</Button>
                          </div>
                        </div>
                      </CardContent>
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

