import HeroSection from '@/components/HeroSection';
import FeaturedArticles from '@/components/FeaturedArticles';
import BookRecommendations from '@/components/BookRecommendations';
import StudyResources from '@/components/StudyResources';
import ShopFavorites from '@/components/ShopFavorites';
import PinterestGallery from '@/components/PinterestGallery';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedArticles />
      <BookRecommendations />
      <StudyResources />
      <ShopFavorites />
      <PinterestGallery />
      <Newsletter />
    </>
  );
}







