export default function getCurrentYear() {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();
  
  if (currentYear === startYear) {
    return `${currentYear}`;
  }
  
  return `${startYear}-${currentYear}`;
};
