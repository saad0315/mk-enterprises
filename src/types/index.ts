export interface NavLink {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

export interface ContactInfo {
  phone: string;
  altPhone: string;
  fax: string;
  email: string;
  address: string;
}

export interface ProductRating {
  label: string;
  value: number;
}

export interface ProductSpec {
  label: string;
  sublabel?: string;
  value: string;
  unit?: string;
  secondary?: string;
}

export interface SubRegionSpec {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface RegionalSpec {
  region: string;
  subRegions: SubRegionSpec[];
}

export interface LumberProduct {
  name: string;
  type?: "lumber";
  textureImage: string;
  properties: {
    working: string;
    physical: string;
    durability: string;
    uses: string;
  };
  ratings: ProductRating[];
  specs: ProductSpec[];
  regionalSpecs?: RegionalSpec[];
}

export interface EngineeredSubProduct {
  title: string;
  applications: string[];
  description: string;
  image: string;
  dimensions: string;
}

export interface EngineeredProduct {
  name: string;
  type: "engineered";
  subProducts: EngineeredSubProduct[];
}

export type ProductDetail = LumberProduct | EngineeredProduct;

export interface Config {
  companyName: string;
  contact: ContactInfo;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
  navLinks: NavLink[];
  groupCompanies: string[];
  products: { name: string; image: string }[];
  productRange: { title: string; description: string; icon: string }[];
  testimonials: { name: string; role: string; content: string; date: string }[];
  lumberProducts: { name: string; description: string, image: string }[];
  engineeredProducts: { name: string; description: string, image: string }[];
  productDetails: Record<string, ProductDetail>;
}
