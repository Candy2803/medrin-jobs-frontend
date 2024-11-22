import {
  LineChart,
  Megaphone,
  Briefcase,
  Code,
  Users,
  Stethoscope,
  HeadphonesIcon,
  Car,
  Rocket
} from 'lucide-react';

import { Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Accounting / Finance',
    icon: 'LineChart',
    openPositions: 2,
    slug: 'accounting-finance',
    description: 'Find opportunities in financial analysis, accounting, banking, and investment management.'
  },
  {
    id: '2',
    name: 'Marketing',
    icon: 'Megaphone',
    openPositions: 86,
    slug: 'marketing',
    description: 'Explore roles in digital marketing, brand management, content creation, and market research.'
  },
  {
    id: '3',
    name: 'Design',
    icon: 'Briefcase',
    openPositions: 43,
    slug: 'design',
    description: 'Discover opportunities in UI/UX design, graphic design, product design, and creative direction.'
  },
  {
    id: '4',
    name: 'Development',
    icon: 'Code',
    openPositions: 12,
    slug: 'development',
    description: 'Find roles in software development, web development, mobile app development, and DevOps.'
  },
  {
    id: '5',
    name: 'Human Resource',
    icon: 'Users',
    openPositions: 55,
    slug: 'human-resource',
    description: 'Explore opportunities in HR management, recruitment, training, and employee relations.'
  },
  {
    id: '6',
    name: 'Health and Care',
    icon: 'Stethoscope',
    openPositions: 25,
    slug: 'health-care',
    description: 'Discover roles in healthcare, nursing, medical practice, and healthcare administration.'
  },
  {
    id: '7',
    name: 'Customer Service',
    icon: 'HeadphonesIcon',
    openPositions: 2,
    slug: 'customer-service',
    description: 'Find opportunities in customer support, service management, and client relations.'
  },
  {
    id: '8',
    name: 'Automotive Jobs',
    icon: 'Car',
    openPositions: 2,
    slug: 'automotive',
    description: 'Explore roles in automotive engineering, mechanics, and vehicle manufacturing.'
  },
  {
    id: '9',
    name: 'Project Management',
    icon: 'Rocket',
    openPositions: 92,
    slug: 'project-management',
    description: 'Discover opportunities in project management, program management, and team leadership.'
  }
];

export const iconMap = {
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