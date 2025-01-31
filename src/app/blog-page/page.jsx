import BannerSection from "@/components/blog/BannerSection";
import TextPhotoSection from "@/components/blog/TextPhotoSection";
import CardCarousel from "@/components/blog/CardCarousel";

export default function BlogIndexPage() {
  return (
    <div>
      <BannerSection />
      <TextPhotoSection />
      <CardCarousel />
    </div>
  );
}
