<!-- @format -->

# MedrinJobs Component Documentation

## File Structure

```
src/
├── components/
│   ├── admin/
│   │   ├── AdminSidebar.tsx
│   ├── auth/
│   │   ├── AuthModal.tsx
│   │   ├── ProtectedRoute.tsx
│   ├── blog/
│   │   ├── BlogCard.tsx
│   ├── employer/
│   │   ├── BulkJobPostingModal.tsx
│   │   ├── PostJobWizard.tsx
│   │   ├── forms/
│   │   │   ├── JobDetailsForm.tsx
│   │   │   ├── ApplicationProcessForm.tsx
│   │   │   ├── ReviewSubmit.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── FeaturedJobs.tsx
│   │   ├── PopularCategories.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CallToAction.tsx
│   │   ├── RecentBlogs.tsx
│   ├── jobs/
│   │   ├── JobList.tsx
│   │   ├── JobDetails.tsx
│   │   ├── JobFilters.tsx
│   │   ├── ApplicationForm.tsx
│   ├── modals/
│   │   ├── UserIntentModal.tsx
│   ├── pricing/
│   │   ├── PricingCard.tsx
│   │   ├── PaymentModal.tsx
├── layouts/
│   ├── AdminLayout.tsx
├── pages/
│   ├── admin/
│   │   ├── AdminDashboard.tsx
│   │   ├── AdminJobs.tsx
│   │   ├── AdminUsers.tsx
│   │   ├── AdminPayments.tsx
│   │   ├── AdminSettings.tsx
│   ├── auth/
│   │   ├── Login.tsx
│   │   ├── .tsx
│   ├── employer/
│   │   ├── EmployerDashboard.tsx
│   │   ├── EmployerJobs.tsx
│   │   ├── PostJob.tsx
│   ├── jobseeker/
│   │   ├── JobSeekerDashboard.tsx
│   │   ├── Applications.tsx
│   │   ├── SavedJobs.tsx
│   │   ├── Profile.tsx
├── services/
│   ├── mockAuthService.ts
│   ├── mockEmployerService.ts
│   ├── paymentService.ts
│   ├── bulkJobService.ts
├── store/
│   ├── authStore.ts
├── types/
│   ├── index.ts
│   ├── employer.ts
├── utils/
│   ├── currency.ts
```

## Component Behaviors

### Authentication Components

#### `src/components/auth/AuthModal.tsx`

-   Handles both login and registration flows
-   Supports user type selection (jobseeker/employer)
-   Integrates with `mockAuthService`
-   Shows validation errors
-   Redirects based on user type after authentication

#### `src/components/auth/ProtectedRoute.tsx`

-   Guards routes based on user type
-   Redirects to login if not authenticated
-   Validates user type matches required type

### Job-Related Components

#### `src/components/jobs/JobList.tsx`

-   Displays paginated job listings
-   Supports filtering and search
-   Shows job details on click
-   Handles job saving/bookmarking
-   Integrates with application process

#### `src/components/jobs/ApplicationForm.tsx`

-   Multi-step application process
-   Resume/CV upload
-   Optional cover letter
-   Optional skills summary
-   Shows application status feedback

### Employer Components

#### `src/components/employer/PostJobWizard.tsx`

-   Multi-step job posting form
-   Category selection
-   Job details input
-   Application requirements
-   Preview and submission

#### `src/components/employer/BulkJobPostingModal.tsx`

-   JSON file upload for multiple jobs
-   Validation of job data
-   Progress feedback
-   Error handling

### Admin Components

#### `src/components/admin/AdminSidebar.tsx`

-   Navigation for admin section
-   User management submenu
-   Payment tracking
-   Job moderation tools
-   Settings access

### Payment Components

#### `src/components/pricing/PaymentModal.tsx`

-   Supports card payments via Stripe
-   M-Pesa integration for Kenyan users
-   Shows payment confirmation
-   Handles payment errors

### Home Page Components

#### `src/components/home/Hero.tsx`

-   Search functionality
-   Popular searches display
-   Job count statistics

#### `src/components/home/Testimonials.tsx`

-   Carousel with 5 testimonials
-   Auto-play functionality
-   Manual navigation
-   Responsive design

## State Management

### `src/store/authStore.ts`

```typescript
interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	login: (user: User) => void;
	logout: () => void;
	updateProfile: (profile: Partial<User["profile"]>) => void;
}
```

## Services

### `src/services/paymentService.ts`

-   Stripe integration
-   M-Pesa STK Push
-   Payment verification
-   Transaction history

### `src/services/mockEmployerService.ts`

-   Job posting management
-   Plan subscription handling
-   Free trial tracking
-   Bulk upload processing

## User Flows

### Job Seeker Flow

1. Registration/Login (`AuthModal.tsx`)
2. Profile Creation (`Profile.tsx`)
3. Job Search (`JobList.tsx`)
4. Application Process (`ApplicationForm.tsx`)
5. Application Tracking (`Applications.tsx`)

### Employer Flow

1. Registration/Login (`AuthModal.tsx`)
2. Plan Selection (`Pricing.tsx`)
3. Job Posting (`PostJobWizard.tsx`)
4. Application Review (`EmployerJobs.tsx`)
5. Candidate Management

### Admin Flow

1. Login (`Login.tsx`)
2. Dashboard Overview (`AdminDashboard.tsx`)
3. Content Moderation (`AdminJobs.tsx`)
4. User Management (`AdminUsers.tsx`)
5. Payment Tracking (`AdminPayments.tsx`)

## Pricing Plans

### Implementation (`src/pages/Pricing.tsx`)

-   Free Trial: 3 job posts
-   One Off: $15 per post
-   Starter: $100/month (20 posts)
-   Pro: $150/month (unlimited)
-   Enterprise: $1000/year (custom features)

### Features

-   Annual billing (15% discount)
-   Currency conversion (USD/KES)
-   M-Pesa integration
-   Bulk posting capabilities

## Mobile Responsiveness

-   Tailwind breakpoints
-   Responsive navigation
-   Touch-friendly interfaces
-   Optimized forms

## Error Handling

-   Form validation
-   Payment errors
-   API failures
-   Authentication errors
-   File upload validation

## Security

-   Protected routes
-   Role-based access
-   Payment data security
-   Input sanitization
