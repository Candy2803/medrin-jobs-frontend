import { Calendar } from 'lucide-react';
import { BlogPost } from '../../types';

const blogs: BlogPost[] = [
  {
    id: '1',
    title: '10 Tips for a Successful Job Interview',
    excerpt: 'Master the art of interviewing with these proven strategies that will help you stand out.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Sarah Wilson',
    date: 'March 15, 2024'
  },
  {
    id: '2',
    title: 'The Future of Remote Work',
    excerpt: 'Explore how remote work is shaping the future of employment and what it means for job seekers.',
    image: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'John Davis',
    date: 'March 12, 2024'
  },
  {
    id: '3',
    title: 'Building a Strong Professional Network',
    excerpt: 'Learn how to create and maintain valuable professional connections in todays digital age',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Emma Thompson',
    date: 'March 10, 2024'
  }
];

const RecentBlogs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent News Articles</h2>
          <p className="text-gray-600">Stay updated with the latest career insights and job market trends</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">{blog.author}</span>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {blog.date}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            See More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogs;