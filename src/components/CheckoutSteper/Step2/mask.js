export const cepMask = (value) => {
  if (!value) return value;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');
  value = value.replace(/(-d{3})\d+?$/, '$1');
  return value;
};

export const numberMask = (value) => {
  if (!value) return value;
  return value.replace(/\D/g, '');
};
