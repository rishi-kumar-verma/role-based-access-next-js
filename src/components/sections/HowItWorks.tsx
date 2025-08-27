import { Briefcase, Users, MessageSquare } from "lucide-react"

const steps = [
  {
    icon: <Briefcase className="h-10 w-10" />,
    title: "Post a Job",
    description: "Create a detailed job posting to attract the right freelancers for your project.",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Choose Freelancers",
    description: "Review proposals, portfolios, and ratings to find the perfect match for your needs.",
  },
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "Collaborate & Pay",
    description: "Work together through our platform and pay securely when the job is done right.",
  },
]

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get your project done in just a few simple steps
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 