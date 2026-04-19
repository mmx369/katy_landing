export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_DIGIT_MIN = 10;
export const PHONE_DIGIT_MAX = 15;
export const CONTACT_MAX_LENGTH = 120;
export const NAME_MAX_LENGTH = 80;
export const COMPANY_MAX_LENGTH = 120;
export const TASK_MAX_LENGTH = 2500;
export const MIN_NAME_LENGTH = 2;
export const MIN_COMPANY_LENGTH = 2;
export const MIN_TASK_LENGTH = 10;

export const normalizeValue = (value: string) => {
  return value.trim().replace(/\s+/g, " ");
};

export const isValidEmail = (value: string) => {
  return EMAIL_REGEX.test(value);
};

export const isValidPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return digits.length >= PHONE_DIGIT_MIN && digits.length <= PHONE_DIGIT_MAX;
};

export const isValidContact = (value: string) => {
  const normalized = normalizeValue(value);
  return isValidEmail(normalized) || isValidPhone(normalized);
};
