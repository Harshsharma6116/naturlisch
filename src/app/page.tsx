import HeroBanner from "@/components/home/HeroBanner";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStory from "@/components/home/BrandStory";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <CategoryShowcase />
      <FeaturedProducts />
      <BrandStory />
    </>
  );
}
