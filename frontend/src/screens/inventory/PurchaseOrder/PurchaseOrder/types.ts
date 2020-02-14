export const UOM = [
  {
    value: 'EA',
    label: 'EA',
  },
];

export enum POSTATUS {
  OPEN = 'OPEN',
  CONFIRMED = 'CONFIRMED',
  DELIVERED = 'DELIVERED',
  PARTIALLY_DELIVERED = 'PARTIALLY_DELIVERED',
  PACKED = 'PACKED',
  PARTIALLY_PACKED = 'PARTIALLY_PACKED',
  INVOICED = 'INVOICED',
  RECEIPTED = 'RECEIPTED',
}

export enum APINVOICE {
  OPEN = 'OPEN',
  PAID = 'PAID',
}