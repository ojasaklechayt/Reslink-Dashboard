import { useState, useEffect } from "react";
import Logo from "../../assets/LOGO.svg";
import Bar from "../../assets/bar.svg";
import Layers from "../../assets/3-layers.svg";
import Users from "../../assets/users.svg";
import Message from "../../assets/solar_chat-line-broken.svg";
import Setting from "../../assets/settings.svg";
import Avatar from "../../assets/Avatar.png";
import Logout from "../../assets/log-out.svg";
import Small from "../../assets/small-background.svg";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const Buttons = [
    {
      image: Bar,
      name: "Dashboard",
    },
    {
      image: Layers,
      name: "Projects",
    },
    {
      image: Users,
      name: "Staffing",
    },
    {
      image: Message,
      name: "Messages",
    },
  ];

  const Support = [
    {
      image: Bar,
      name: "Support",
    },
    {
      image: Setting,
      name: "Settings",
    },
  ];

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    if (window.innerWidth < 768) {
      setSidebarVisible(false);
    }
  };

  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setSidebarVisible(!sidebarVisible);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarVisible(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div>
        <button
          className="lg:hidden absolute top-4 left-4 z-50 text-white"
          onClick={toggleSidebar}
        >
          {sidebarVisible ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <div
        className={`${
          sidebarVisible
            ? "translate-x-0 transition-transform duration-300 ease-in-out"
            : "-translate-x-full transition-transform duration-300 ease-in-out"
        } flex flex-col items-center h-screen w-80 bg-white backdrop-blur-lg bg-opacity-[5%] font-poppins border border-[#475467] border-opacity-[50%]`}
      >
        <img
          className="absolute pt-20 opacity-[50%] z-[-1]"
          src={Small}
          alt={Small}
        />
        <img className="mt-7 mb-10" src={Logo} alt="Logo" />
        <div className="flex flex-col gap-y-4">
          {Buttons.map((button, index) => (
            <div
              key={index}
              className={`flex flex-row gap-x-2 pl-5 py-3 rounded-md w-60 cursor-pointer ${
                selectedButton === index ? "bg-[#101215]" : ""
              }`}
              onClick={() => handleButtonClick(index)}
            >
              <img src={button.image} alt={button.name} />
              <h3 className="text-white text-lg">{button.name}</h3>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 mt-[17vh] lg:mt-[25vh]">
          {Support.map((support, index) => (
            <div
              key={index}
              className={`flex flex-row gap-x-2 pl-5 py-3 rounded-md w-60 cursor-pointer ${
                selectedButton === index + Buttons.length ? "bg-[#101215]" : ""
              }`}
              onClick={() => handleButtonClick(index + Buttons.length)}
            >
              <img src={support.image} alt={support.name} />
              <h3 className="text-white text-lg">{support.name}</h3>
            </div>
          ))}
        </div>
        <div className="bg-[#475467] h-[2px] w-60 mt-5 rounded-md"></div>
        <div className="flex flex-row gap-x-4 mt-5 justify-center items-center">
          <img src={Avatar} alt={Avatar} />
          <div className="text-white">
            <p className="font-bold">Olivia Rhye</p>
            <p>olivia@untitledui.com</p>
          </div>
          <img src={Logout} alt={Logout} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
