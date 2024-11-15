import { 
    Briefcase, 
    LineChart, 
    Megaphone, 
    Code, 
    Users, 
    Stethoscope,
    HeadphonesIcon,
    Car,
    Rocket
  } from 'lucide-react';
  import { Category } from '../../types';
  
  const categories: Category[] = [
    {
      id: '1',
      name: 'Accounting / Finance',
      icon: 'LineChart',
      openPositions: 2
    },
    {
      id: '2',
      name: 'Marketing',
      icon: 'Megaphone',
      openPositions: 86
    },
    {
      id: '3',
      name: 'Design',
      icon: 'Briefcase',
      openPositions: 43
    },
    {
      id: '4',
      name: 'Development',
      icon: 'Code',
      openPositions: 12
    },
    {
      id: '5',
      name: 'Human Resource',
      icon: 'Users',
      openPositions: 55
    },
    {
      id: '6',
      name: 'Health and Care',
      icon: 'Stethoscope',
      openPositions: 25
    },
    {
      id: '7',
      name: 'Customer Service',
      icon: 'HeadphonesIcon',
      openPositions: 2
    },
    {
      id: '8',
      name: 'Automotive Jobs',
      icon: 'Car',
      openPositions: 2
    },
    {
      id: '9',
      name: 'Project Management',
      icon: 'Rocket',
      openPositions: 92
    }
  ];
  
  const iconMap = {
    LineChart,
    Megaphone,
    Briefcase,
    Code,
    Users,
    Stethoscope,
    HeadphonesIcon,
    Car,
    Rocket
  };
  
  const PopularCategories = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Job Categories
            </h2>
            <p className="text-gray-600">
              2020 jobs live - 293 added today.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap];
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-lg p-6 flex items-center space-x-4 hover:shadow-md transition-shadow cursor-pointer"
                >
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
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  
  export default PopularCategories;