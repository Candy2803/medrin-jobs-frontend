export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    featured: boolean;
    logo: string;
    postedAt: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    icon: string;
    openPositions: number;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    image: string;
    content: string;
  }
  
  export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    author: string;
    date: string;
  }
  
  export interface Company {
    id: string;
    name: string;
    logo: string;
  }