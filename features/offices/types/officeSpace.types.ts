export type OfficeSpace = {
  id: number;
  title: string;
  slug: string;
  price: number;
  duration: string;
  address: string;
  about: string;
  location: string;
  rating: number;
  tags: string[];
  image: string;
  images: string[];
  features: string[];
  salesContacts: salesContact[];
  isFullyBooked: boolean;
};

export type salesContact = {
  name: string;
  email: string;
  photo: string;
};
