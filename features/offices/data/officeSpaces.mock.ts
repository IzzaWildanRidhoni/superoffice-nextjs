import { OfficeSpace } from "../types/officeSpace.types";

export const officeSpaces: OfficeSpace[] = [
  {
    id: 1,
    title: "Wildan Park Central Master",
    slug: "wildan-park-central-master-silicon-valley-star-class",
    price: 1000000,
    duration: "20 Days",
    address: "Jl. Pahlawan No. 1, Jakarta",
    about: "About Office Space 1 lorem ipsum dolor sit amet consectetur adipiscing elit  lorem ipsum dolor sit amet consectetur adipiscing elits ",
    location: "Jakarta",
    rating: 4.5,
    tags: ["Popular"],
    image: "/assets/images/thumbnails/thumbnails-1.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-1.png",
      "/assets/images/thumbnails/thumbnail-details-2.png",
    ],
    features: [
      "Global Event",
      "Privacy",
      "Free Move",
      "Sustainbility",
      "Extra Snacks",
      "Compact",
    ],
    salesContacts: [
      {
        name: "John Doe",
        email: "john.doe@superoffice.com",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Jane Doe",
        email: "jane.doe@superoffice.com",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
    isFullyBooked: false,
  },
  {
    id: 2,
    title: "Remote Office Space",
    slug: "remote-office-space",
    price: 18560000,
    duration: "20 Days",
    address: "Jl. Pahlawan No. 1, Surabaya",
    about: "About Remote Office Space lorem ipsum dolor sit amet consectetur adipiscing elit  lorem ipsum dolor sit amet consectetur adipiscing elits",
    location: "Surabaya",
    rating: 4.9,
    tags: ["Favorite"],
    image: "/assets/images/thumbnails/thumbnails-3.png",
    images: [
      "/assets/images/thumbnails/thumbnail-details-2.png",
      "/assets/images/thumbnails/thumbnail-details-3.png",
    ],
    features: [
      "Sustainbility",
      "Compact",
      "Global Event",
      "Privacy",
      "Free Move",
      "Extra Snacks",
    ],
    salesContacts: [
      {
        name: "Alifian",
        email: "alifian@superoffice.com",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Ujang Candra",
        email: "ujang.candra@superoffice.com",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
    isFullyBooked: false,
  },
];
