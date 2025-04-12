export default function Services() {
  return (
    <section className="min-h-[70vh] bg-background text-text px-4 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold mb-16 text-center">
          Our Services
        </h1>

        <div className="flex flex-col gap-4">
          {/* Service Card */}
          {[
            {
              title: "Septic Systems",
              description:
                "As New Hampshire licensed septic installers, we handle all aspects of septic system installation and maintenance.",
              items: [
                "Septic System Installation",
                "Stone and Pipe Systems",
                "Enviro Septics",
                "Eljen Septics",
                "Effluent Pumps and Gravity Systems",
                "Grease Traps",
                "Septic Repairs",
                "Septic Tank Replacement",
                "Leach Field Replacement",
              ],
            },
            {
              title: "Yard Reconstruction",
              description:
                "Transform your outdoor space with our comprehensive yard services.",
              items: [
                "Pool Demolition",
                "Yard Grading",
                "Drainage Solutions",
                "Drainage Recharge Systems",
                "Underdrain",
                "Culverts",
              ],
            },
            {
              title: "Gravel Driveways & Parking",
              description:
                "Durable and practical solutions for your driveway and parking needs.",
              items: [
                "Parking Lot Construction",
                "Grading",
                "Drainage Systems",
                "Drainage Recharge Systems",
                "Catch Basins",
                "Under Drain",
              ],
            },
            {
              title: "Site Work",
              description:
                "Professional site preparation and enhancement services.",
              items: ["Minor Site Cleanup/Clearing", "Site Lighting"],
            },
            {
              title: "Retaining Walls",
              description:
                "Sturdy and attractive retaining wall solutions for any property.",
              items: [
                "Small Rock Retaining Walls",
                "Large Precast Retaining Walls",
              ],
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 border border-secondary rounded-2xl shadow-md hover:shadow-xl transition duration-300 bg-white dark:bg-gray-900"
            >
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-base text-muted mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-base text-primary space-y-1">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center my-16">
          <a
            href="/contact"
            className="inline-block bg-background text-primary outline outline-2 outline-primary hover:bg-primary hover:text-background px-10 py-4 rounded-xl font-semibold transition text-lg"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
