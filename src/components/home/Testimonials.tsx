import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    company: 'Tech Corp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    content: 'Medrin Jobs helped me find my dream job within weeks. The platform is intuitive and the job matching is spot on!'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Innovation Inc',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    content: 'The quality of job listings and the ease of application process makes Medrin Jobs stand out from other platforms.'
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'Marketing Director',
    company: 'Creative Agency',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
    content: 'As an employer, I have found exceptional talent through Medrin Jobs. The candidate pool is diverse and highly qualified.'
  },
  {
    id: '4',
    name: 'David Wilson',
    role: 'HR Manager',
    company: 'Global Solutions',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    content: 'The bulk job posting feature has revolutionized our hiring process. We can now manage multiple positions efficiently.'
  },
  {
    id: '5',
    name: 'Lisa Zhang',
    role: 'Frontend Developer',
    company: 'WebTech Solutions',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150&q=80',
    content: 'The job alerts are incredibly accurate. I found my current position through a notification that matched my skills perfectly.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Say About Us</h2>
          <p className="text-gray-600">Testimonials from job seekers and employers</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="flex flex-col items-center text-center">
                <Quote className="h-12 w-12 text-blue-600 mb-6" />
                <p className="text-xl text-gray-700 mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;