import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
  type: 'jobseeker' | 'employer' | 'admin';
  profile?: {
    title?: string;
    company?: string;
    location?: string;
  };
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateProfile: (profile: Partial<User['profile']>) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
  updateProfile: (profile) => set((state) => ({
    user: state.user ? { ...state.user, profile: { ...state.user.profile, ...profile } } : null
  }))
}));