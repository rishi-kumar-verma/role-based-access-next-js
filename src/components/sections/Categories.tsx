import Link from "next/link"
import Image from "next/image"
import { Briefcase } from "lucide-react"

export function Categories() {
  const categories = [
    { icon: "web", title: "Web Development", image: "https://source.unsplash.com/xkBaqlcqeb4" },
    { icon: "design", title: "Design & Creative", image: "https://source.unsplash.com/MrWOCGKFVDg" },
    { icon: "writing", title: "Writing & Translation", image: "https://source.unsplash.com/wX2L8L-fGeA" },
    { icon: "marketing", title: "Digital Marketing", image: "https://source.unsplash.com/Oalh2MojUuk" },
    { icon: "video", title: "Video & Animation", image: "https://source.unsplash.com/LqKhnDzSF-8" },
    { icon: "music", title: "Music & Audio", image: "https://source.unsplash.com/vigB1HZ1T1M" },
    { icon: "business", title: "Business", image: "https://source.unsplash.com/sEaOqtC4eSg" },
    { icon: "tech", title: "Programming & Tech", image: "https://source.unsplash.com/m_HRfLhgABo" },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Popular Categories</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Browse our most in-demand services
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              href="#"
              className="group relative overflow-hidden rounded-lg border bg-background p-2 hover:border-primary"
            >
              <div className="flex h-full flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted p-3">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold">{category.title}</h3>
                </div>
              </div>
              <div className="absolute inset-0 -z-10 opacity-10 transition-opacity group-hover:opacity-20">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 