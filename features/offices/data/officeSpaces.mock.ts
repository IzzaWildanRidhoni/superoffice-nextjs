import { OfficeSpace } from "../types/officeSpace.types";

export const officeSpaces: OfficeSpace[] = [
  {
    id: 1,
    title: "GoWork Jakarta",
    slug: "gowork-jakarta",
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
      "Extra Snacks",
      "Compact",
    ],
    salesContacts: [
      {
        name: "John Doe",
        email: "john.doe@gmail.com",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Jane Doe",
        email: "jane.doe@gmail.com",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
    isFullyBooked: true,
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
        email: "alifian@gmail.com",
        photo: "/assets/images/photos/photo-1.png",
      },
      {
        name: "Ujang Candra",
        email: "ujang@gmail.com",
        photo: "/assets/images/photos/photo-2.png",
      },
    ],
    isFullyBooked: false,
  },
];
