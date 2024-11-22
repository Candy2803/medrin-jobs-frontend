interface LoginResponse {
  success: boolean;
  user?: {
    id: string;
    email: string;
    name: string;
    type: 'jobseeker' | 'employer' | 'admin';
    profile?: {
      title?: string;
      company?: string;
      location?: string;
    };
  };
  error?: string;
}

class MockAuthService {
  private static instance: MockAuthService;
  
  private constructor() {}

  public static getInstance(): MockAuthService {
    if (!MockAuthService.instance) {
      MockAuthService.instance = new MockAuthService();
    }
    return MockAuthService.instance;
  }

  async login(email: string, password: string, userType: string): Promise<LoginResponse> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock admin credentials
    if (userType === 'admin' && email === 'admin@medrinjobs.com' && password === 'admin123') {
      return {
        success: true,
        user: {
          id: 'admin-1',
          email,
          name: 'Admin User',
          type: 'admin'
        }
      };
    }

    // Mock regular user authentication
    if (email && password) {
      return {
        success: true,
        user: {
          id: `user-${Date.now()}`,
          email,
          name: email.split('@')[0],
          type: userType as 'jobseeker' | 'employer',
          profile: userType === 'employer' ? { company: 'Company Name' } : { title: 'Job Title' }
        }
      };
    }

    return {
      success: false,
      error: 'Invalid credentials'
    };
  }

  async register(data: {
    email: string;
    password: string;
    name: string;
    userType: 'jobseeker' | 'employer';
    company?: string;
  }): Promise<LoginResponse> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      user: {
        id: `user-${Date.now()}`,
        email: data.email,
        name: data.name,
        type: data.userType,
        profile: data.userType === 'employer' ? 
          { company: data.company } : 
          { title: 'Job Seeker' }
      }
    };
  }
}

export const mockAuthService = MockAuthService.getInstance();