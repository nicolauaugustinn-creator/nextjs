// Currency configuration for KARMANUMBERS
export const CURRENCY = {
  code: 'EUR',
  symbol: '€',
  name: 'Euro'
} as const

// Exchange rates (PHP to EUR - approximate)
// 1 EUR ≈ 58-60 PHP
export const EXCHANGE_RATE = {
  'PHP': 0.0168, // 1 PHP = 0.0168 EUR
  'EUR': 1
} as const

// Format price in EUR
export function formatPrice(priceInPhp: number, currency: 'EUR' | 'PHP' = 'EUR'): string {
  if (currency === 'EUR') {
    const eur = priceInPhp * EXCHANGE_RATE.PHP
    return `€${eur.toFixed(2)}`
  }
  return `₱${priceInPhp.toFixed(2)}`
}

// Convert PHP to EUR
export function phpToEur(priceInPhp: number): number {
  return priceInPhp * EXCHANGE_RATE.PHP
}
