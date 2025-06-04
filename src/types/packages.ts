export interface PackageFeature {
  label: string;
  value: string;
}

export interface PackageData {
  image: string;
  subtitle: string;
  features: PackageFeature[];
  price: string;
  cta: string;
}
