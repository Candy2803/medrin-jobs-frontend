import { useState, useEffect } from 'react';
import Hero from '../Components/home/Hero';
import PopularCategories from '../Components/home/PopularCategories';
import FeaturedJobs from '../Components/home/FeaturedJobs';
import Testimonials from '../Components/home/Testimonials';
import CompanyLogos from '../Components/home/CompanyLogos';
import CallToAction from '../Components/home/CallToAction';
import RecentBlogs from '../Components/home/RecentBlogs';
import UserIntentModal from '../Components/modals/UserIntentModal';

const Home = () => {
  const [showIntentModal, setShowIntentModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        const hasShownIntent = localStorage.getItem('userIntentShown');
        if (!hasShownIntent) {
          setShowIntentModal(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleIntentSelect = (intent: 'hire' | 'work') => {
    // Handle the user's selection (can be used for personalization)
    console.log('User intent:', intent);
  };

  return (
    <div>
      <Hero />
      <PopularCategories />
      <FeaturedJobs />
      <Testimonials />
      <CompanyLogos />
      <CallToAction />
      <RecentBlogs />
      <UserIntentModal
        isOpen={showIntentModal}
        onClose={() => setShowIntentModal(false)}
        onSelect={handleIntentSelect}
      />
    </div>
  );
};

export default Home;