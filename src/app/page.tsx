import HeroSection from '@/components/HeroSection';
import TheLibrary from '@/components/TheLibrary';
import ShopFavorites from '@/components/ShopFavorites';
import PinterestGallery from '@/components/PinterestGallery';
import FeaturedArticles from '@/components/FeaturedArticles';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TheLibrary />
      <ShopFavorites />
      <PinterestGallery />
      <FeaturedArticles />
      <Newsletter />
    </>
  );
}
