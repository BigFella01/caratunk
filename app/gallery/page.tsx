import Carousel from "@/components/carousel";

const foundationExcavationImgs = [
  { src: "foundation-excavation/IMG_1972.jpg", alt: "Excavation 1" },
  { src: "foundation-excavation/IMG_1973.jpg", alt: "Excavation 2" },
  { src: "foundation-excavation/IMG_1977.jpg", alt: "Excavation 3" },
  { src: "foundation-excavation/IMG_1979.jpg", alt: "Excavation 4" },
];

const residentialAdditionImgs = [
  { src: "residential-addition/IMG_1598.jpg", alt: "Gallery 1" },
  { src: "residential-addition/IMG_1670.jpg", alt: "Gallery 2" },
  { src: "residential-addition/IMG_1671.jpg", alt: "Gallery 3" },
  { src: "residential-addition/IMG_1672.jpg", alt: "Gallery 4" },
];

const residentialSepticImgs = [
  { src: "residential-septic/IMG_1730.jpg", alt: "Gallery 1" },
  { src: "residential-septic/IMG_1732.jpg", alt: "Gallery 2" },
  { src: "residential-septic/IMG_1735.jpg", alt: "Gallery 3" },
  { src: "residential-septic/IMG_1746.jpg", alt: "Gallery 4" },
  { src: "residential-septic/IMG_1747.jpg", alt: "Gallery 5" },
  { src: "residential-septic/IMG_1749.jpg", alt: "Gallery 6" },
];

const stonePipeSeptic1Imgs = [
  { src: "stone-pipe-sectic_pelham/IMG_0001.jpg", alt: "Gallery 1" },
  { src: "stone-pipe-sectic_pelham/IMG_2035.jpg", alt: "Gallery 2" },
  { src: "stone-pipe-sectic_pelham/IMG_2036.jpg", alt: "Gallery 3" },
  { src: "stone-pipe-sectic_pelham/IMG_2049.jpg", alt: "Gallery 4" },
  { src: "stone-pipe-sectic_pelham/IMG_2051.jpg", alt: "Gallery 5" },
  { src: "stone-pipe-sectic_pelham/IMG_2057.jpg", alt: "Gallery 6" },
  { src: "stone-pipe-sectic_pelham/IMG_2058.jpg", alt: "Gallery 7" },
];

const stonePipeSeptic2Imgs = [
  { src: "stone-pipe-septic_new-market/IMG_1911.jpg", alt: "Gallery 1" },
  { src: "stone-pipe-septic_new-market/IMG_1912.jpg", alt: "Gallery 2" },
  { src: "stone-pipe-septic_new-market/IMG_1939.jpg", alt: "Gallery 3" },
  { src: "stone-pipe-septic_new-market/IMG_1945.jpg", alt: "Gallery 4" },
];

export default function GalleryPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start bg-background px-4 py-20 text-text">
      <h1 className="text-4xl sm:text-5xl font-bold mb-16 text-center">
        Gallery
      </h1>

      {/* Foundation Excavation */}
      <GallerySection
        title="Foundation Excavation"
        images={foundationExcavationImgs}
      />

      {/* Residential Addition */}
      <GallerySection
        title="Residential Addition"
        images={residentialAdditionImgs}
      />

      {/* Residential Septic */}
      <GallerySection
        title="Residential Septic"
        images={residentialSepticImgs}
      />

      {/* Stone Pipe Septic 1 */}
      <GallerySection
        title="Stone Pipe Septic 1"
        images={stonePipeSeptic1Imgs}
      />

      {/* Stone Pipe Septic 2 */}
      <GallerySection
        title="Stone Pipe Septic 2"
        images={stonePipeSeptic2Imgs}
      />
    </section>
  );
}

type GalleryImage = {
  src: string;
  alt?: string;
};

type GallerySectionProps = {
  title: string;
  images: GalleryImage[];
};

function GallerySection({ title, images }: GallerySectionProps) {
  return (
    <div className="w-full max-w-6xl mb-20">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-primary">{title}</h2>
        <Carousel images={images} />
      </div>
    </div>
  );
}

// 1. Buy a domain via Route 53 or external registrar
// 2. Convert your Next.js app to static with next export
// 3. Upload the out/ folder to an S3 bucket
// 4. (Recommended) Use CloudFront + Route 53 for HTTPS + domain
// 5. Use SES with your domain to send emails from contact forms
