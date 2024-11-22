const KES_RATE = 130; // 1 USD = 130 KES (approximate)

export const convertToKES = (usdAmount: number): number => {
  return Math.round(usdAmount * KES_RATE);
};

export const formatKES = (amount: number): string => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES'
  }).format(amount);
};

export const formatUSD = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};