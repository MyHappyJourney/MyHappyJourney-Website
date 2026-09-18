import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LeadFormFields {
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

export interface LeadFormState {
  instances: {
    [instanceId: string]: LeadFormFields;
  };
}

export const defaultFields = (initialDuration = '6 NIGHTS / 7 DAYS (6N / 7D)', initialDestination = 'Kerala'): LeadFormFields => ({
  name: '',
  email: '',
  phone: '',
  city: '',
  destination: initialDestination,
  fromDate: '',
  duration: initialDuration,
  adults: 2,
  children: 0,
  budget: '',
  currentStep: 1,
});

const initialState: LeadFormState = {
  instances: {},
};

const ensureInstance = (state: LeadFormState, instanceId: string) => {
  if (!state.instances[instanceId]) {
    state.instances[instanceId] = defaultFields();
  }
};

const leadFormSlice = createSlice({
  name: 'leadForm',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<{ instanceId: string; value: string }>) => {
      const { instanceId, value } = action.payload;
      ensureInstance(state, instanceId);
      state.instances[instanceId].name = value;
    },
    setEmail: (state, action: PayloadAction<{ instanceId: string; value: string }>) => {
      const { instanceId, value } = action.payload;
      ensureInstance(state, instanceId);
      state.instances[instanceId].email = value;
    },
    setPhone: (state, action: PayloadAction<{ instanceId: string; value: string }>) => {
      const { instanceId, value } = action.payload;
      ensureInstance(state, instanceId);
      state.instances[instanceId].phone = value;
    },
    setCity: (state, action: PayloadAction<{ instanceId: string; value: string }>) => {
      const { instanceId, value } = action.payload;
      ensureInstance(state, instanceId);
      state.instances[instanceId].city = value;
    },
    setDestination: (state, action: PayloadAction<{ instanceId: string; value: string }>) => {
      const { instanceId, value } = action.payload;
      ensureInstance(state, instanceId);
      state.instances[instanceId].destination = value;
    },
    setFromDate: (state, action: PayloadAction<{ instanceId: string; value: string }>) => {
      const { instanceId, value } = action.payload;
      ensureInstance(state, instanceId);
      state.instances[instanceId].fromDate = value;
    },
    setDuration: (state, action: PayloadAction<{ instanceId: string; value: string }>) => {
      const { instanceId, value } = action.payload;
      ensureInstance(state, instanceId);
      state.instances[instanceId].duration = value;
    },
    setAdults: (state, action: PayloadAction<{ instanceId: string; value: number }>) => {
      const { instanceId, value } = action.payload;
      ensureInstance(state, instanceId);
      state.instances[instanceId].adults = value;
    },
    setChildren: (state, action: PayloadAction<{ instanceId: string; value: number }>) => {
      const { instanceId, value } = action.payload;
      ensureInstance(state, instanceId);
      state.instances[instanceId].children = value;
    },
    setBudget: (state, action: PayloadAction<{ instanceId: string; value: string }>) => {
      const { instanceId, value } = action.payload;
      ensureInstance(state, instanceId);
      state.instances[instanceId].budget = value;
    },
    setCurrentStep: (state, action: PayloadAction<{ instanceId: string; value: number }>) => {
      const { instanceId, value } = action.payload;
      ensureInstance(state, instanceId);
      state.instances[instanceId].currentStep = value;
    },
    resetForm: (state, action: PayloadAction<{ instanceId: string; duration?: string; destination?: string }>) => {
      const { instanceId, duration, destination } = action.payload;
      state.instances[instanceId] = defaultFields(duration, destination);
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
