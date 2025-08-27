import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Calendar, CheckCircle, Download, MessageSquare } from "lucide-react"

interface Freelancer {
  name: string;
  title: string;
  location: string;
  memberSince: string;
  lastActive: string;
  rating: number;
  reviewCount: number;
  completedProjects: number;
  hourlyRate: string;
  image: string;
  description: string;
  skills: string[];
  education: {
    degree: string;
    school: string;
    year: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    year: string;
  }[];
  portfolio: {
    title: string;
    description: string;
    image: string;
  }[];
  reviews: {
    name: string;
    rating: number;
    date: string;
    comment: string;
  }[];
}

export default function FreelancerProfile({ params }: { params: { slug: string } }) {
  const freelancer: Freelancer = {
    name: "Ahmed Mansour",
    title: "Full-Stack Developer & UI/UX Designer",
    location: "Egypt",
    memberSince: "2018",
    lastActive: "Just now",
    rating: 5.0,
    reviewCount: 150,
    completedProjects: 120,
    hourlyRate: "$50",
    image: "https://x069my5u3k.ufs.sh/f/2FLtVr6zCdoRbTs7k1KmRXDavhSOKYAZI5iGU6lktweLHu0g",
    description:
      "I'm a full-stack developer with expertise in React, Next.js, Firebase, and Node.js. I specialize in building modern web and mobile applications with a focus on performance and UI/UX design. I have worked on various projects, including e-commerce platforms, sales management software, and custom dashboards.",
    skills: [
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Firebase",
      "MongoDB",
      "TypeScript",
      "GraphQL",
      "Tailwind CSS",
      "UI/UX Design",
    ],
    education: [
      {
        degree: "B.S. Computer Science",
        school: "Cairo University",
        year: "2014-2018",
      },
    ],
    certifications: [
      {
        name: "Google Mobile Web Specialist",
        issuer: "Google",
        year: "2021",
      },
      {
        name: "React Developer Certification",
        issuer: "Meta",
        year: "2022",
      },
    ],
    portfolio: [
      {
        title: "E-commerce Website",
        description:
          "Developed a modern e-commerce platform with React, Next.js, and Firebase, featuring seamless payment integration and real-time order tracking.",
        image: "https://x069my5u3k.ufs.sh/f/2FLtVr6zCdoRK05TW7qB7OUMZtxrCNYPdm1jSLEswGTiIlb2",
      },
      {
        title: "Social Media App",
        description:
          "Built a feature-rich social media platform with real-time messaging, notifications, and media uploads using Firebase and React Native.",
        image: "https://x069my5u3k.ufs.sh/f/2FLtVr6zCdoRAmeQXtkymEZzoMdGi8Tpnwhcv0e4KDJyfabV",
      },
      {
        title: "Admin Dashboard",
        description:
          "Created a custom admin dashboard with analytics, user management, and dynamic charts using React and Recharts.",
        image: "https://x069my5u3k.ufs.sh/f/2FLtVr6zCdoR0lK4v3DQohwCv8xU3aqilXJ6RNLc5n2frDBH",
      },
    ],
    reviews: [
      {
        name: "Omar A.",
        rating: 5,
        date: "February 10, 2024",
        comment:
          "Ahmed delivered an amazing project ahead of schedule. His attention to detail and understanding of UI/UX is top-notch!",
      },
      {
        name: "Sara M.",
        rating: 5,
        date: "January 5, 2024",
        comment:
          "Fantastic developer! Ahmed went above and beyond to ensure our website was perfect. Highly recommended!",
      },
      {
        name: "Mohamed K.",
        rating: 5,
        date: "December 20, 2023",
        comment:
          "Professional, talented, and easy to work with. Will definitely hire again!",
      },
    ],
  };


  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container px-4 py-12 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
            {/* Main Content */}
            <div className="space-y-6">
              {/* Profile Header */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <Image
                  src={freelancer.image || `/placeholder.svg?height=150&width=150&text=${freelancer.name.charAt(0)}`}
                  alt={freelancer.name}
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold">{freelancer.name}</h1>
                  <p className="text-xl">{freelancer.title}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{freelancer.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-primary text-primary" />
                      <span className="ml-1 font-medium">{freelancer.rating}</span>
                      <span className="ml-1 text-muted-foreground">({freelancer.reviewCount} reviews)</span>
                    </div>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>{freelancer.completedProjects} jobs completed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="about">About</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-6 pt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">About Me</h2>
                      <p>{freelancer.description}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {freelancer.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Featured Work</h2>
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {freelancer.portfolio.slice(0, 3).map((item, index) => (
                          <div key={index} className="overflow-hidden rounded-lg border">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={300}
                              height={200}
                              className="aspect-video w-full object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-bold">{item.title}</h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="portfolio" className="space-y-6 pt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Portfolio</h2>
                      <div className="grid gap-6 sm:grid-cols-2">
                        {freelancer.portfolio.map((item, index) => (
                          <div key={index} className="overflow-hidden rounded-lg border">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              width={300}
                              height={200}
                              className="aspect-video w-full object-cover"
                            />
                            <div className="p-4">
                              <h3 className="font-bold">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="reviews" className="space-y-6 pt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Client Reviews</h2>
                      <div className="space-y-6">
                        {freelancer.reviews.map((review, index) => (
                          <div key={index} className="border-b pb-6 last:border-0 last:pb-0">
                            <div className="flex items-center justify-between">
                              <h3 className="font-bold">{review.name}</h3>
                              <span className="text-sm text-muted-foreground">{review.date}</span>
                            </div>
                            <div className="flex items-center my-2">
                              {Array(review.rating)
                                .fill(0)
                                .map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                                ))}
                              {Array(5 - review.rating)
                                .fill(0)
                                .map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-muted-foreground" />
                                ))}
                            </div>
                            <p className="text-sm">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="about" className="space-y-6 pt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Education</h2>
                      <div className="space-y-4">
                        {freelancer.education.map((edu, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-2">
                              <Calendar className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-bold">{edu.degree}</h3>
                              <p className="text-sm">{edu.school}</p>
                              <p className="text-sm text-muted-foreground">{edu.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-xl font-bold mb-4">Certifications</h2>
                      <div className="space-y-4">
                        {freelancer.certifications.map((cert, index) => (
                          <div key={index} className="flex items-start gap-4">
                            <div className="rounded-full bg-primary/10 p-2">
                              <CheckCircle className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-bold">{cert.name}</h3>
                              <p className="text-sm">{cert.issuer}</p>
                              <p className="text-sm text-muted-foreground">{cert.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">{freelancer.hourlyRate}/hr</h3>
                    </div>
                    <Button className="w-full gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Contact Me
                    </Button>
                    <Button variant="outline" className="w-full gap-2">
                      <Download className="h-4 w-4" />
                      Download Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Availability</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Response Time</span>
                      <span className="text-sm font-medium">Within 2 hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Availability</span>
                      <span className="text-sm font-medium">Full-time</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Member Since</span>
                      <span className="text-sm font-medium">{freelancer.memberSince}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Last Active</span>
                      <span className="text-sm font-medium">{freelancer.lastActive}</span>
                    </div>
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
