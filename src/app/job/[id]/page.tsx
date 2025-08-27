import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Clock, DollarSign, MapPin, Calendar, User, Flag, Share2, Bookmark } from "lucide-react"

export default function JobDetails({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the job data based on the ID
  const job = {
    id: params.id,
    title: "Full-Stack Web Developer Needed for E-commerce Site",
    company: "TechRetail Inc.",
    companyLogo: "/placeholder.svg?height=80&width=80&text=TR",
    location: "Remote (United States)",
    budget: "$3,000 - $5,000",
    type: "Fixed Price",
    duration: "2-3 months",
    experience: "Intermediate",
    posted: "2 days ago",
    description:
      "We're looking for an experienced full-stack developer to build an e-commerce platform with React, Node.js, and MongoDB. The project includes user authentication, product catalog, shopping cart, and payment integration.",
    responsibilities: [
      "Design and develop a responsive e-commerce website using React for the frontend and Node.js for the backend",
      "Implement user authentication and authorization",
      "Create a product catalog with search and filter functionality",
      "Develop a shopping cart and checkout process",
      "Integrate with payment gateways (Stripe and PayPal)",
      "Ensure the application is secure, scalable, and performs well",
      "Write clean, maintainable code with appropriate documentation",
      "Collaborate with our design team to implement UI/UX designs",
    ],
    requirements: [
      "3+ years of experience in full-stack web development",
      "Strong proficiency in React, Node.js, Express, and MongoDB",
      "Experience with RESTful APIs and GraphQL",
      "Knowledge of payment gateway integrations",
      "Understanding of security best practices",
      "Excellent problem-solving skills and attention to detail",
      "Good communication skills and ability to work independently",
      "Experience with e-commerce platforms is a plus",
    ],
    skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "RESTful API", "Payment API", "E-commerce"],
    aboutCompany:
      "TechRetail Inc. is a growing e-commerce solutions provider specializing in custom online shopping experiences for small to medium-sized businesses. We combine cutting-edge technology with user-centered design to create engaging and profitable online stores.",
    proposals: 12,
    clientInfo: {
      name: "John Smith",
      title: "Project Manager at TechRetail Inc.",
      location: "San Francisco, CA",
      memberSince: "March 2021",
      projectsPosted: 15,
      hireRate: "85%",
      totalSpent: "$45,000+",
    },
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
            {/* Main Content */}
            <div className="space-y-6">
              {/* Job Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-3xl font-bold">{job.title}</h1>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <Badge variant="outline" className="text-sm font-normal">
                    {job.type}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Posted {job.posted}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                    <span>{job.proposals} proposals</span>
                  </div>
                </div>
              </div>

              {/* Job Details */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-4 sm:flex-nowrap">
                      <div className="flex items-center gap-2 min-w-[150px]">
                        <DollarSign className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Budget</p>
                          <p>{job.budget}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 min-w-[150px]">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Duration</p>
                          <p>{job.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 min-w-[150px]">
                        <User className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">Experience</p>
                          <p>{job.experience}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-2">Project Description</h2>
                      <p className="mb-4">{job.description}</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-2">Responsibilities</h2>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-2">Requirements</h2>
                      <ul className="list-disc pl-5 space-y-1">
                        {job.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-2">Skills Required</h2>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-2">About the Client</h2>
                      <p>{job.aboutCompany}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-between">
                <Button variant="outline" className="gap-2">
                  <Flag className="h-4 w-4" />
                  Report Job
                </Button>
                <Button size="lg">Submit a Proposal</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={job.companyLogo || "/placeholder.svg"}
                      alt={job.company}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">{job.company}</h3>
                      <p className="text-sm text-muted-foreground">{job.location}</p>
                    </div>
                  </div>
                  <Button className="w-full">Visit Company Profile</Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">About the Client</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{job.clientInfo.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{job.clientInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Member since {job.clientInfo.memberSince}</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Projects Posted</span>
                        <span className="text-sm font-medium">{job.clientInfo.projectsPosted}</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">Hire Rate</span>
                        <span className="text-sm font-medium">{job.clientInfo.hireRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Total Spent</span>
                        <span className="text-sm font-medium">{job.clientInfo.totalSpent}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Similar Jobs</h3>
                  <div className="space-y-4">
                    {[
                      "React Developer for Web App",
                      "MERN Stack Developer Needed",
                      "E-commerce Website Development",
                    ].map((title, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="block border-b pb-3 last:border-0 last:pb-0 hover:text-primary"
                      >
                        <div className="font-medium">{title}</div>
                        <div className="text-sm text-muted-foreground">Fixed Price - Posted 3 days ago</div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

