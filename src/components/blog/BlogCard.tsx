import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Link to={`/blog/${post.id}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </span>
        </div>
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          Read More
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;