import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface EmployerData {
  id: string;
  name: string;
  email: string;
  subscriptionPlan: string;
  jobPostQuota: number;
  subscriptionStartDate: string;
  subscriptionEndDate: string;
  companyName: string;
  phoneNumber: string;
  companyWebsite: string;
  industry: string;
  companySize: string;
  companyLocation: string;

}

interface EmployerState {
  data: EmployerData | null;
}

const initialState: EmployerState = {
  data: null,
};

const employerSlice = createSlice({
  name: 'employer',
  initialState,
  reducers: {
    setEmployerData: (state, action: PayloadAction<EmployerData>) => {
      state.data = action.payload;
    },
    clearEmployerData: (state) => {
      state.data = null;
    },
  },
});

export const { setEmployerData, clearEmployerData } = employerSlice.actions;
export default employerSlice.reducer;