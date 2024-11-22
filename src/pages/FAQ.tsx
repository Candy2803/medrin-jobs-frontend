import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I create an employer account?",
    answer: "Click on 'Login/Register' in the navigation bar, select 'I'm hiring talent', and follow the registration process. You'll need to provide your company details and verify your email address.",
    category: "Employers"
  },
  {
    question: "What are the costs for posting jobs?",
    answer: "New employers receive 3 free job posts. After that, we offer various subscription plans starting at $10/month. Visit our Pricing page for detailed information.",
    category: "Employers"
  },
  {
    question: "How long do job postings stay active?",
    answer: "Job postings remain active for 30 days by default. Premium plans offer extended durations up to 45 days.",
    category: "Employers"
  },
  {
    question: "How do I apply for jobs?",
    answer: "Create a job seeker account, upload your resume, and click 'Apply Now' on any job listing. You can track your applications in your dashboard.",
    category: "Job Seekers"
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, we use industry-standard security measures to protect your data. Read our Privacy Policy for detailed information about how we handle your data.",
    category: "General"
  },
  {
    question: "Can I edit my job posting after publishing?",
    answer: "Yes, you can edit your job posting at any time from your employer dashboard. However, major changes might require re-approval.",
    category: "Employers"
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...new Set(faqs.map(faq => faq.category))];
  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">Find answers to common questions about Medrin Jobs</p>
        </motion.div>

        <div className="mb-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="border-t border-gray-200"
                  >
                    <div className="px-6 py-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Can't find what you're looking for?{' '}
            <a href="/contact" className="text-blue-600 hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;