import { create } from 'zustand';

interface EmployerUser {
  id: string;
  name: string;
  email: string;
  company: string;
  jobPostsRemaining: number;
  subscription: {
    plan: 'free' | 'basic' | 'pro' | 'enterprise';
    expiresAt: string;
  };
}

class MockEmployerService {
  private static instance: MockEmployerService;
  private currentUser: EmployerUser | null = null;

  private constructor() {
    // Initialize with mock employer data
    this.currentUser = {
      id: 'emp-1',
      name: 'John Doe',
      email: 'john@company.com',
      company: 'Tech Corp',
      jobPostsRemaining: 3, // Free trial posts
      subscription: {
        plan: 'free',
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // 30 days from now
      }
    };
  }

  public static getInstance(): MockEmployerService {
    if (!MockEmployerService.instance) {
      MockEmployerService.instance = new MockEmployerService();
    }
    return MockEmployerService.instance;
  }

  getCurrentUser(): EmployerUser | null {
    return this.currentUser;
  }

  async login(email: string, password: string): Promise<EmployerUser> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    this.currentUser = {
      id: 'emp-1',
      name: 'John Doe',
      email,
      company: 'Tech Corp',
      jobPostsRemaining: 3,
      subscription: {
        plan: 'free',
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      }
    };

    return this.currentUser;
  }

  async register(data: { email: string; name: string; company: string; password: string }): Promise<EmployerUser> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    this.currentUser = {
      id: 'emp-' + Date.now(),
      name: data.name,
      email: data.email,
      company: data.company,
      jobPostsRemaining: 3, // New employers get 3 free posts
      subscription: {
        plan: 'free',
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      }
    };

    return this.currentUser;
  }

  async useJobPost(): Promise<boolean> {
    if (!this.currentUser || this.currentUser.jobPostsRemaining <= 0) {
      return false;
    }
    
    this.currentUser = {
      ...this.currentUser,
      jobPostsRemaining: this.currentUser.jobPostsRemaining - 1
    };
    
    return true;
  }

  async upgradePlan(plan: 'basic' | 'pro'): Promise<boolean> {
    if (!this.currentUser) return false;

    this.currentUser = {
      ...this.currentUser,
      subscription: {
        plan,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      },
      jobPostsRemaining: plan === 'basic' ? 20 : 999999 // Unlimited for pro
    };

    return true;
  }

  logout(): void {
    this.currentUser = null;
  }
}

export const employerService = MockEmployerService.getInstance();
export type { EmployerUser };