import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-background text-text px-6 sm:px-8 lg:px-12 pb-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-20">
          About Us
        </h1>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[400px]">
              <Image
                src="/about/IMG_2391.JPEG"
                alt="Ben Gillis"
                fill
                unoptimized
                className="rounded-xl shadow-lg object-cover"
              />
            </div>
            <p className="mt-4 text-center text-lg font-medium text-primary">
              Ben Gillis - Owner
            </p>
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 space-y-6 text-lg leading-relaxed">
            <p>
              Hello! My name is Ben Gillis, and I’m the founder of Caratunk
              Contractors. I’ve spent over a decade working in excavation and
              utility construction — starting out as a laborer and working my
              way up through roles like foreman, superintendent, and project
              manager. Over the years, I’ve led projects ranging from $10,000 to
              $6 million while working with heavy civil contractors.
            </p>

            <p>
              That experience in large-scale civil and commercial excavation
              shaped my passion for doing things the right way. The lessons I
              learned on complex utility, highway, and building projects are now
              baked into everything we do at Caratunk Contractors — no matter
              how big or small the job.
            </p>

            <p>
              We’re based in Dover, NH, and proudly serve communities across New
              Hampshire and southern Maine. And in case you’re curious,
              “Caratunk” is an Algonquin word that means{" "}
              <em>“where the rivers meet.”</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
