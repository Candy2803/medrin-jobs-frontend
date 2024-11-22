import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import BlogCard from '../components/blog/BlogCard';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-96"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              {post.title}
            </motion.h1>
            <div className="flex items-center justify-center space-x-4">
              <span className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {post.date}
              </span>
              <span className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose max-w-none"
        >
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center py-8 border-t border-b">
          <Link
            to="/blog"
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>
          <div className="flex items-center">
            <span className="text-gray-600">Share:</span>
            {/* Add social share buttons here */}
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;