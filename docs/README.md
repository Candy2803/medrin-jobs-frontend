# MedrinJobs - Job Board Platform Documentation

## Overview
MedrinJobs is a comprehensive job board platform that connects employers with job seekers in Kenya. The platform supports multiple user types (job seekers, employers, and administrators) with specific features and workflows for each role.

## Core Features

### User Types
1. **Job Seekers**
   - Create and manage profiles
   - Search and apply for jobs
   - Track application status
   - Save favorite jobs
   - Receive job alerts

2. **Employers**
   - Post job listings (3 free posts for new accounts)
   - Manage job postings
   - Review applications
   - Bulk upload jobs (paid plans only)
   - Access analytics

3. **Administrators**
   - Manage users and job listings
   - Review and moderate content
   - Handle payments
   - Feature/ban job listings
   - Access system settings

## Technical Architecture

### Frontend Stack
- React with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- Framer Motion for animations
- Lucide React for icons
- React Router for navigation
- Zustand for state management

### Key Components

#### Authentication & Authorization
- `AuthModal`: Handles user login/registration
- `ProtectedRoute`: Route guard for authenticated sections
- `useAuthStore`: Global auth state management

#### Layout Components
- `AdminLayout`: Admin dashboard layout with sidebar
- `AdminSidebar`: Navigation for admin section
- `Navbar`: Main navigation bar
- `Footer`: Site-wide footer

#### Job-Related Components
- `JobList`: Displays job listings
- `JobDetails`: Detailed job view
- `JobFilters`: Search and filter options
- `ApplicationForm`: Job application form
- `PostJobWizard`: Multi-step job posting form

#### Payment Integration
- Stripe for card payments
- M-Pesa integration for mobile payments
- Support for multiple currencies (USD/KES)

## User Journeys

### Employer Journey
1. **Registration & Free Trial**
   - Sign up as employer
   - Receive 3 free job posts
   - Complete company profile

2. **Job Posting**
   - Single job posting
   - Bulk upload (paid plans)
   - Set job details and requirements
   - Review applications

3. **Subscription Plans**
   - Free Trial (3 posts)
   - One Off (1 post - $15)
   - Starter (20 posts - $100/month)
   - Pro (Unlimited - $150/month)
   - Enterprise (Custom - $1000/year)

### Job Seeker Journey
1. **Profile Creation**
   - Basic information
   - Professional summary
   - Skills and experience
   - Resume upload

2. **Job Search & Application**
   - Browse job listings
   - Filter by category/location
   - Apply with profile/resume
   - Track application status

### Admin Journey
1. **Content Management**
   - Review and moderate job posts
   - Feature important listings
   - Ban inappropriate content

2. **User Management**
   - Manage job seekers
   - Manage employers
   - Handle admin accounts

3. **Payment Management**
   - Track transactions
   - Monitor subscriptions
   - Generate reports

## Key Features

### Smart Job Matching
- Category-based job listings
- Skill-based recommendations
- Location-aware search

### Payment Processing
- Secure card payments via Stripe
- M-Pesa integration for local payments
- Multiple currency support
- Automatic plan upgrades

### Analytics & Reporting
- Job posting performance
- Application tracking
- Revenue reports
- User engagement metrics

## Security Features
- Protected routes
- Role-based access control
- Secure payment processing
- Input validation and sanitization

## Mobile Responsiveness
- Responsive design for all screen sizes
- Mobile-first approach
- Touch-friendly interfaces
- Optimized forms for mobile

## Best Practices
1. **Code Organization**
   - Component-based architecture
   - Type safety with TypeScript
   - Modular CSS with Tailwind
   - Consistent file structure

2. **Performance**
   - Lazy loading of routes
   - Optimized images
   - Efficient state management
   - Caching strategies

3. **User Experience**
   - Intuitive navigation
   - Clear error handling
   - Loading states
   - Smooth animations

## Development Workflow
1. **Setup**
   ```bash
   npm install
   cp .env.example .env
   # Add required environment variables
   ```

2. **Development**
   ```bash
   npm run dev
   ```

3. **Build**
   ```bash
   npm run build
   ```

4. **Deployment**
   ```bash
   # Deploy to production
   npm run deploy
   ```

## Environment Variables
```env
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## Future Enhancements
1. Email notifications system
2. Advanced search filters
3. Interview scheduling
4. Direct messaging system
5. API integration capabilities
6. Enhanced analytics dashboard

## Support
For technical support or feature requests, please contact:
- Email: support@medrinjobs.com
- Phone: +254712345678
- Address: Ngong Lane Plaza, First Floor, Room 103, Ngong Road, Nairobi, Kenya