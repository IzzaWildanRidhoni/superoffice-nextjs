import Navbar from "@/components/Navbar";
import OfficeFeatures from "@/features/offices/components/OfficeFeatures";
import OfficeHeader from "@/features/offices/components/OfficeHeader";
import { officeSpaces } from "@/features/offices/data/officeSpaces.mock";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
    params: {
        slug: string;
    };
};

export default function OfficeSpaceDetailPage({ params }: Props) {
    const office = officeSpaces.find((space) => space.slug === params.slug);

    if (!office) {
        return notFound();
    }

    return (
    <>
      <Navbar />
      <OfficeHeader/> 
      <section
        id="Details"
        className="relative flex max-w-[1130px] mx-auto gap-[30px] mb-20 z-10"
      >
        <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
          {office.tags.map((tag) => (
            <p key={tag} className="w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
              {tag}
            </p>
          ))}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-extrabold text-[32px] leading-[44px]">
                {office.title}
              </h1>
              <div className="flex items-center gap-[6px] mt-[10px]">
                <Image
                  width={20}
                  height={20}
                  src="/assets/images/icons/location.svg"
                  alt="icon"
                />
                <p className="font-semibold">{office.location}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center gap-1">
                <Image
                  width={20}
                  height={20}
                  src="/assets/images/icons/Star 1.svg"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  src="/assets/images/icons/Star 1.svg"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  src="/assets/images/icons/Star 1.svg"
                  alt="star"
                />
                <Image
                  width={20}
                  height={20}
                  src="/assets/images/icons/Star 5.svg"
                  alt="star"
                />
              </div>
              <p className="font-semibold text-right">{office.rating}/5 (19,384)</p>
            </div>
          </div>
          <p className="leading-[30px]">
            {office.about}
          </p>
          <hr className="border-[#F6F5FD]" />
          <h2 className="font-bold">You Get What You Need Most</h2>
          <OfficeFeatures/>
          <hr className="border-[#F6F5FD]" />
          <div className="flex flex-col gap-[6px]">
            <h2 className="font-bold">Office Address</h2>
            <p>{office.address}</p>
          </div>
          <div className="overflow-hidden w-full h-[280px]">
            <div
              id="my-map-display"
              className="h-full w-full max-w-[none] bg-none"
            >
              <iframe
                className="h-full w-full border-0"
                src={`https://www.google.com/maps/embed/v1/place?q=${office.address}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
              />
            </div>
            <a
              className="from-embedmap-code"
              href="https://www.bootstrapskins.com/themes"
              id="enable-map-data"
            >
              premium bootstrap themes
            </a>
          </div>
        </div>
        <div className="w-[392px] flex flex-col shrink-0 gap-[30px]">
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
            <div>
              <p className="font-extrabold text-[32px] leading-[48px] text-[#0D903A]">
                {office.price}
              </p>
              <p className="font-semibold mt-1">For 20 days working</p>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/images/icons/verify.svg"
                  className="w-[30px] h-[30px]"
                  alt="icon"
                />
                <p className="font-semibold leading-[28px]">
                  Mendapatkan akses pembelajaran terbaru terkait dunia startup
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/assets/images/icons/verify.svg"
                  className="w-[30px] h-[30px]"
                  alt="icon"
                />
                <p className="font-semibold leading-[28px]">
                  Mendapatkan akses pembelajaran terbaru terkait dunia startup
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/assets/images/icons/verify.svg"
                  className="w-[30px] h-[30px]"
                  alt="icon"
                />
                <p className="font-semibold leading-[28px]">
                  Mendapatkan akses pembelajaran terbaru terkait dunia startup
                </p>
              </div>
            </div>
            <hr className="border-[#F6F5FD]" />
            <div className="flex flex-col gap-[14px]">
              <a
                href="booking.html"
                className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#0D903A] font-bold text-[#F7F7FD]"
              >
                <img
                  src="/assets/images/icons/slider-horizontal-white.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <span>Book This Office</span>
              </a>
              <button className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[16px_26px] gap-3 bg-white font-semibold">
                <img
                  src="/assets/images/icons/save-add.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <span>Save for Later</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[20px] bg-white">
            <h2 className="font-bold">Contact Our Sales</h2>
            <div className="flex flex-col gap-[30px]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                    <img
                      src="/assets/images/photos/photo-1.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Masayoshi</p>
                    <p className="text-sm leading-[21px]">Sales Manager</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a href="#">
                    <img
                      src="/assets/images/icons/call-green.svg"
                      className="w-10 h-10"
                      alt="icon"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/assets/images/icons/chat-green.svg"
                      className="w-10 h-10"
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                    <img
                      src="/assets/images/photos/photo-2.png"
                      className="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Fuji Ovina</p>
                    <p className="text-sm leading-[21px]">Sales Manager</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a href="#">
                    <img
                      src="/assets/images/icons/call-green.svg"
                      className="w-10 h-10"
                      alt="icon"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="/assets/images/icons/chat-green.svg"
                      className="w-10 h-10"
                      alt="icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
