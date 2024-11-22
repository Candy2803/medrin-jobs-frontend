<<<<<<< HEAD
import Hero from '../Components/home/Hero';
import PopularCategories from '../Components/home/PopularCategories';
import FeaturedJobs from '../components/home/FeaturedJobs';
import Testimonials from '../Components/home/Testimonials';
import CompanyLogos from '../components/home/CompanyLogos';
import CallToAction from '../Components/home/CallToAction';
import RecentBlogs from '../components/home/RecentBlogs';

const Home = () => {
=======
import { useState, useEffect } from 'react';
import Hero from '../components/home/Hero';
import PopularCategories from '../components/home/PopularCategories';
import FeaturedJobs from '../components/home/FeaturedJobs';
import Testimonials from '../components/home/Testimonials';
import CompanyLogos from '../components/home/CompanyLogos';
import CallToAction from '../components/home/CallToAction';
import RecentBlogs from '../components/home/RecentBlogs';
import UserIntentModal from '../components/modals/UserIntentModal';

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

>>>>>>> 177c1dadf98225791f664df8563c8e76eaea3d93
  return (
    <div>
      <Hero />
      <PopularCategories />
      <FeaturedJobs />
      <Testimonials />
      <CompanyLogos />
      <CallToAction />
      <RecentBlogs />
<<<<<<< HEAD
=======
      <UserIntentModal
        isOpen={showIntentModal}
        onClose={() => setShowIntentModal(false)}
        onSelect={handleIntentSelect}
      />
>>>>>>> 177c1dadf98225791f664df8563c8e76eaea3d93
    </div>
  );
};

export default Home;