import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LeadFormState {
  name: string;
  email: string;
  phone: string;
  city: string;
  destination: string;
  fromDate: string;
  duration: string;
  adults: number;
  children: number;
  budget: string;
  currentStep: number;
}

const initialState: LeadFormState = {
  name: '',
  email: '',
  phone: '',
  city: '',
  destination: 'Kerala',
  fromDate: '',
  duration: '6 NIGHTS / 7 DAYS (6N / 7D)',
  adults: 2,
  children: 0,
  budget: '',
  currentStep: 1,
};

const leadFormSlice = createSlice({
  name: 'leadForm',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
    setDestination: (state, action: PayloadAction<string>) => {
      state.destination = action.payload;
    },
    setFromDate: (state, action: PayloadAction<string>) => {
      state.fromDate = action.payload;
    },
    setDuration: (state, action: PayloadAction<string>) => {
      state.duration = action.payload;
    },
    setAdults: (state, action: PayloadAction<number>) => {
      state.adults = action.payload;
    },
    setChildren: (state, action: PayloadAction<number>) => {
      state.children = action.payload;
    },
    setBudget: (state, action: PayloadAction<string>) => {
      state.budget = action.payload;
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    resetForm: (state, action: PayloadAction<string | undefined>) => {
      state.name = '';
      state.email = '';
      state.phone = '';
      state.city = '';
      state.fromDate = '';
      state.duration = action.payload || '6 NIGHTS / 7 DAYS (6N / 7D)';
      state.adults = 2;
      state.children = 0;
      state.budget = '';
      state.currentStep = 1;
    },
  },
});

export const {
  setName,
  setEmail,
  setPhone,
  setCity,
  setDestination,
  setFromDate,
  setDuration,
  setAdults,
  setChildren,
  setBudget,
  setCurrentStep,
  resetForm,
} = leadFormSlice.actions;

export default leadFormSlice.reducer;
