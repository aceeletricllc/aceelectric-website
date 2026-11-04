import type { ConfigValue } from '../config/business';

const TODO_PREFIX = 'TODO:';

/** True when a config string is set and not a TODO placeholder. */
export function isConfigured(value: ConfigValue | undefined): value is string {
  if (value == null || value === '') return false;
  return !value.trim().startsWith(TODO_PREFIX);
}

export function formatTelHref(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) {
    return `tel:+${digits}`;
  }
  if (digits.length === 10) {
    return `tel:+1${digits}`;
  }
  return `tel:${phone.replace(/\s/g, '')}`;
}
