// This is the second part odf the landing page
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories, iconMap } from '../../data/categories';

const PopularCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* This is the initial heading of the div */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular Job Categories
          </h2>
          <p className="text-gray-600">
            2020 jobs live - 293 added today.
          </p>
        </div>
        {/* This is the part where the initial categories are displayed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={category.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg p-6 flex items-center space-x-4 hover:shadow-md transition-all cursor-pointer"
              >
                <Link
                  to={`/jobs/categories/${category.slug}`}
                  className="flex items-center space-x-4 w-full"
                >
                  {/* This is the part where the name and positions were displayed */}
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {category.name}
                    </h3>
                    <p className="text-gray-600">
                      ({category.openPositions} open positions)
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;