export type CountrySelectProps = {
  label?: string;
  value?: string;
  placeholder: string;
  onChange?: (e: any) => void;
  className?: string;
  type: 'country' | 'state';
  countryId?: number;
};
