export const FORM_ERRORS: Record<string, Record<string, string>> = {
  name: {
    required: 'Name is required',
    minlength: 'Name must be at least 2 characters',
  },
  email: {
    required: 'Email is required',
    email: 'Enter a valid email address',
  },
  message: {
    required: 'Message is required',
    minlength: 'Message must be at least 10 characters',
  },
};
