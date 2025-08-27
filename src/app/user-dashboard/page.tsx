import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Clock, DollarSign, FileText, MessageSquare, Star } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>Post a Job</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="jobs">My Jobs</TabsTrigger>
            <TabsTrigger value="proposals">Proposals</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">+1 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Proposals</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+5 since last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Unread Messages</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground">+2 since yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,234</div>
                  <p className="text-xs text-muted-foreground">+$2,100 from last month</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "New proposal received",
                        description: "Sarah Williams submitted a proposal for your web development project",
                        time: "2 hours ago",
                      },
                      {
                        title: "Message from Alex Johnson",
                        description:
                          "I've completed the first milestone of the project. Please review when you have time.",
                        time: "Yesterday",
                      },
                      {
                        title: "Payment sent",
                        description: "You sent a payment of $750 to Michael Chen",
                        time: "2 days ago",
                      },
                      {
                        title: "Job completed",
                        description: "Your logo design project has been marked as completed",
                        time: "1 week ago",
                      },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="rounded-full bg-primary/10 p-2">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Top Freelancers</CardTitle>
                  <CardDescription>Freelancers you've worked with recently</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Alex Johnson",
                        title: "Web Developer",
                        rating: 4.9,
                        image: "https://source.unsplash.com/iFgRcqHznqg",
                      },
                      {
                        name: "Sarah Williams",
                        title: "Graphic Designer",
                        rating: 4.8,
                        image: "https://source.unsplash.com/O3ymvT7Wf9U",
                      },
                      {
                        name: "Michael Chen",
                        title: "Content Writer",
                        rating: 4.7,
                        image: "https://source.unsplash.com/sibVwORYqs0",
                      },
                    ].map((freelancer, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <Image
                          src={freelancer.image || "/placeholder.svg"}
                          alt={freelancer.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">{freelancer.name}</p>
                          <p className="text-xs text-muted-foreground">{freelancer.title}</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-primary text-primary" />
                          <span className="ml-1 text-sm font-medium">{freelancer.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="jobs" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Jobs</CardTitle>
                <CardDescription>Manage your active and completed jobs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Full-Stack Web Developer for E-commerce Site",
                      status: "Active",
                      proposals: 12,
                      budget: "$3,000 - $5,000",
                      posted: "2 days ago",
                    },
                    {
                      title: "Logo and Brand Identity Design",
                      status: "Active",
                      proposals: 24,
                      budget: "$800 - $1,200",
                      posted: "1 day ago",
                    },
                    {
                      title: "Content Writer for Technology Blog",
                      status: "Completed",
                      proposals: 18,
                      budget: "$30 - $50 per hour",
                      posted: "3 weeks ago",
                    },
                  ].map((job, index) => (
                    <div
                      key={index}
                      className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:justify-between sm:space-y-0"
                    >
                      <div className="space-y-1">
                        <p className="font-medium">{job.title}</p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Badge variant={job.status === "Active" ? "default" : "secondary"}>{job.status}</Badge>
                          <span>{job.proposals} proposals</span>
                          <span>{job.budget}</span>
                          <span>Posted {job.posted}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="proposals" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Proposals</CardTitle>
                <CardDescription>Review proposals for your jobs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Alex Johnson",
                      title: "Web Developer",
                      job: "Full-Stack Web Developer for E-commerce Site",
                      bid: "$4,500",
                      rating: 4.9,
                      image: "https://source.unsplash.com/iFgRcqHznqg",
                      status: "New",
                    },
                    {
                      name: "Sarah Williams",
                      title: "Graphic Designer",
                      job: "Logo and Brand Identity Design",
                      bid: "$950",
                      rating: 4.8,
                      image: "https://source.unsplash.com/O3ymvT7Wf9U",
                      status: "Interviewed",
                    },
                    {
                      name: "Michael Chen",
                      title: "Content Writer",
                      job: "Content Writer for Technology Blog",
                      bid: "$40/hr",
                      rating: 4.7,
                      image: "https://source.unsplash.com/sibVwORYqs0",
                      status: "Hired",
                    },
                  ].map((proposal, index) => (
                    <div key={index} className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-y-0">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={proposal.image || "/placeholder.svg"}
                          alt={proposal.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="space-y-1">
                          <p className="font-medium">{proposal.name}</p>
                          <p className="text-sm text-muted-foreground">{proposal.title}</p>
                        </div>
                      </div>
                      <div className="flex-1 sm:ml-4">
                        <p className="text-sm">{proposal.job}</p>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <span>Bid: {proposal.bid}</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 fill-primary text-primary" />
                            <span className="ml-1">{proposal.rating}</span>
                          </div>
                          <Badge
                            variant={
                              proposal.status === "New"
                                ? "default"
                                : proposal.status === "Interviewed"
                                  ? "outline"
                                  : "secondary"
                            }
                          >
                            {proposal.status}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="sm:ml-auto">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="messages" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>Your recent conversations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Alex Johnson",
                      message: "I've completed the first milestone of the project. Please review when you have time.",
                      time: "2 hours ago",
                      unread: true,
                      image: "https://source.unsplash.com/iFgRcqHznqg",
                    },
                    {
                      name: "Sarah Williams",
                      message: "Thank you for the feedback! I'll make those revisions and send you an updated version.",
                      time: "Yesterday",
                      unread: true,
                      image: "https://source.unsplash.com/O3ymvT7Wf9U",
                    },
                    {
                      name: "Michael Chen",
                      message: "I've sent over the first draft of the blog posts. Let me know what you think!",
                      time: "2 days ago",
                      unread: false,
                      image: "https://source.unsplash.com/sibVwORYqs0",
                    },
                  ].map((message, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <Image
                        src={message.image || "/placeholder.svg"}
                        alt={message.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{message.name}</p>
                          <p className="text-xs text-muted-foreground">{message.time}</p>
                        </div>
                        <p className="text-sm">{message.message}</p>
                      </div>
                      {message.unread && <div className="h-2 w-2 rounded-full bg-primary"></div>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

