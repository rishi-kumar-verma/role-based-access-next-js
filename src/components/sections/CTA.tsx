import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to get started?</h2>
            <p className="max-w-[600px] md:text-xl">
              Join thousands of clients and freelancers who are already working together.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button variant="secondary">Find Talent</Button>
            <Button variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground">
              Find Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 