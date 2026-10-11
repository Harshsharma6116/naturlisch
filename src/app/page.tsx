import HeroBanner from "@/components/home/HeroBanner";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import CampaignInMotion from "@/components/home/CampaignInMotion";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStory from "@/components/home/BrandStory";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <CategoryShowcase />
      <CampaignInMotion />
      <FeaturedProducts />
      <BrandStory />
    </>
  );
}
