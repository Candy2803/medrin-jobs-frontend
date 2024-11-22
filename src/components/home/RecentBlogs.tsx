import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { featuredPosts } from '../../data/blogPosts';

const RecentBlogs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Articles</h2>
          <p className="text-gray-600">Stay updated with the latest career insights and job market trends</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <Link to={`/blog/${post.id}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">{post.author}</span>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block"
          >
            See More Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;