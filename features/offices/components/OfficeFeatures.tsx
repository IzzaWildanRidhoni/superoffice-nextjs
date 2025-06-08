const FEATURES_MAP = [
    {
      label : "Global Event",
      description: "Startup Contest",
      icon: "/assets/images/icons/cup.svg",       
    },
    {
      label:"Privacy",
      description: "For Yourself",
      icon: "/assets/images/icons/security-user.svg",       
    },
    {
      label:"Free Move",
      description: "For Yourself",
      icon: "/assets/images/icons/group.svg",       
    },
    {
      label:"Sustainbility",
      description: "Long-term Goals",
      icon: "/assets/images/icons/home-trend-up.svg",       
    },
    {
      label:"Extra Snacks",
      description: "Work-Life Balance",
      icon: "/assets/images/icons/coffee.svg",       
    },
    {
      label:"Compact",
      description: "Good for Focus",
      icon: "/assets/images/icons/3dcube.svg",       
    },
]

export default function OfficeFeatures(
  {features}: {features: string[]}
) {
    return (
        <>
           <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
            {features.map((feature,index) => (
              <div className="flex items-center gap-4" key={index}>
              <img
                src={FEATURES_MAP.find((item) => item.label === feature)?.icon}
                className="w-[34px] h-[34px]"
                alt="icon"
              />
              <div className="flex flex-col gap-[2px]">
                <p className="font-bold text-lg leading-[24px]">{feature}</p>
                <p className="text-sm leading-[21px]">{FEATURES_MAP.find((item) => item.label === feature)?.description}</p>
              </div>
            </div>
            ))}
        
          </div>
        </>
    )
}