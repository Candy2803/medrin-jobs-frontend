<<<<<<< HEAD
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
=======
export interface JobApplication {
  id: string;
  jobId: string;
  userId: string;
  status: 'pending' | 'approved' | 'rejected';
  appliedAt: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeUrl: string;
  coverLetterUrl?: string;
  summary?: string;
}

// Add other existing interfaces...
>>>>>>> 177c1dadf98225791f664df8563c8e76eaea3d93
