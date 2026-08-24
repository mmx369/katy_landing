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

const hasEnoughLetters = (value: string, minLetters: number) => {
  const letters = value.match(/[A-Za-zА-Яа-яЁё]/g);
  return (letters?.length ?? 0) >= minLetters;
};

/** Eight identical characters in a row is keyboard mashing, not an answer. */
const hasLongRepeatingFragment = (value: string) => /(.)\1{7,}/.test(value);

const hasTooManyLinks = (value: string) => {
  const links = value.match(/https?:\/\/|www\./gi);
  return (links?.length ?? 0) > 1;
};

export const isValidName = (value: string) => {
  const normalized = normalizeValue(value);
  return (
    normalized.length >= MIN_NAME_LENGTH &&
    normalized.length <= NAME_MAX_LENGTH &&
    hasEnoughLetters(normalized, 2) &&
    !hasLongRepeatingFragment(normalized)
  );
};

/** Company is optional: an empty value passes, a filled one still has to look like a name. */
export const isValidCompany = (value: string) => {
  const normalized = normalizeValue(value);
  if (normalized.length === 0) {
    return true;
  }

  return (
    normalized.length >= MIN_COMPANY_LENGTH &&
    normalized.length <= COMPANY_MAX_LENGTH &&
    hasEnoughLetters(normalized, 2) &&
    !hasLongRepeatingFragment(normalized)
  );
};

export const isValidTask = (value: string) => {
  const trimmed = value.trim();
  return (
    trimmed.length >= MIN_TASK_LENGTH &&
    trimmed.length <= TASK_MAX_LENGTH &&
    hasEnoughLetters(trimmed, 8) &&
    !hasLongRepeatingFragment(trimmed) &&
    !hasTooManyLinks(trimmed)
  );
};

export const isValidContact = (value: string) => {
  const normalized = normalizeValue(value);
  return (
    normalized.length <= CONTACT_MAX_LENGTH &&
    (isValidEmail(normalized) || isValidPhone(normalized))
  );
};
