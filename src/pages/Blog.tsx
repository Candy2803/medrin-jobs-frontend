import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, Clock } from 'lucide-react';
import { BlogPost } from '../types';
import { blogPosts } from '../data/blogPosts';
import BlogCard from '../components/blog/BlogCard';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Insights & News</h1>
          <p className="text-lg text-gray-600">Stay updated with the latest trends and insights in the job market</p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-md capitalize ${
                    category === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination or Load More */}
        {filteredPosts.length > 0 && (
          <div className="mt-12 text-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Load More Articles
            </button>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;