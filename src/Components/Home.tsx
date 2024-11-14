import Hero from '../components/home/Hero';
import PopularCategories from '../components/home/PopularCategories';
import FeaturedJobs from '../components/home/FeaturedJobs';
import Testimonials from '../components/home/Testimonials';
import CompanyLogos from '../components/home/CompanyLogos';
import CallToAction from '../components/home/CallToAction';
import RecentBlogs from '../components/home/RecentBlogs';

const Home = () => {
  return (
    <div>
      <Hero />
      <PopularCategories />
      <FeaturedJobs />
      <Testimonials />
      <CompanyLogos />
      <CallToAction />
      <RecentBlogs />
    </div>
  );
};

export default Home;