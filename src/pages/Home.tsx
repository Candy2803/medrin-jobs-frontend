import Hero from '../Components/home/Hero';
import PopularCategories from '../Components/home/PopularCategories';
import FeaturedJobs from '../components/home/FeaturedJobs';
import Testimonials from '../Components/home/Testimonials';
import CompanyLogos from '../components/home/CompanyLogos';
import CallToAction from '../Components/home/CallToAction';
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