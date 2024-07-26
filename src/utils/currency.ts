import currency from 'currency.js';

export function formatCurrency(value: string): string {
  console.log(value);
  const replacedValue = value.replace(/[^\d.-]/g, '');
  console.log(replacedValue);

  return currency(replacedValue)
    .format({
      decimal: ',',
      precision: 2,
      separator: '.',
      symbol: 'R$ ',
    })
    .toString();
}
