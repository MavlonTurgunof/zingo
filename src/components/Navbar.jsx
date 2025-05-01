import React, { useEffect, useState } from "react";
import Container from "./Container";
import Button from "./Button";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Uzbek");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("malumot");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["malumot", "imkoniyatlar", "lavhalar"];
      let current = activeSection;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = id;
            break;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const languages = [
    { name: "English", flag: "/img/en.png" },
    { name: "Uzbek", flag: "/img/uz.png" },
    { name: "Russian", flag: "/img/ru.png" },
  ];

  const availableLangs = languages.filter((lang) => lang.name !== selectedLang);

  const currentLang = languages.find((lang) => lang.name === selectedLang);

  return (
    <div
      className={`bg-white/90 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 shadow-md" : "py-4"
      }`}
    >
      <header className="max-w-[1320px] w-full mx-auto flex items-center justify-between px-6 transition-all duration-300">
        <div className="flex items-center space-x-2">
          <img
            src="/img/logo.svg"
            alt="Zingo Logo"
            className={`transition-all duration-300 ${
              scrolled ? "h-7" : "h-9"
            }`}
          />
        </div>

        <div className="border border-solid border-[#FF556E] p-[5px] gap-x-[15px] rounded-[64px] flex items-center px-2">
          <button
            onClick={() => {
              document
                .getElementById("malumot")
                ?.scrollIntoView({ behavior: "smooth" });
              setActiveSection("malumot");
            }}
            className={`font-medium px-3 py-2 rounded-full transition-all duration-300 ease-in-out transform ${
              activeSection === "malumot"
                ? "scale-105 text-[#FF556E] bg-[#FF556E]/10 border border-[#FF556E]"
                : "scale-100 text-black border border-transparent"
            }`}
          >
            Ma'lumot
          </button>

          <button
            onClick={() => {
              document
                .getElementById("imkoniyatlar")
                ?.scrollIntoView({ behavior: "smooth" });
              setActiveSection("imkoniyatlar");
            }}
            className={`font-medium px-3 py-2 rounded-full transition-all duration-300 ease-in-out transform ${
              activeSection === "imkoniyatlar"
                ? "scale-105 text-[#FF556E] bg-[#FF556E]/10 border border-[#FF556E]"
                : "scale-100 text-black border border-transparent"
            }`}
          >
            Imkoniyatlar
          </button>

          <button
            onClick={() => {
              document
                .getElementById("lavhalar")
                ?.scrollIntoView({ behavior: "smooth" });
              setActiveSection("lavhalar");
            }}
            className={`font-medium px-3 py-2 rounded-full transition-all duration-300 ease-in-out transform ${
              activeSection === "lavhalar"
                ? "scale-105 text-[#FF556E] bg-[#FF556E]/10 border border-[#FF556E]"
                : "scale-100 text-black border border-transparent"
            }`}
          >
            Lavhlar
          </button>

          <div className="relative flex items-center space-x-1">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-4 py-1 "
            >
              <img
                src={currentLang?.flag}
                alt="flag"
                className="h-8 w-8 rounded-full"
              />
              <span className="font-medium text-black">{selectedLang}</span>
            </button>
            {showDropdown && (
              <div className="absolute left-4 right-0 mt-40 border w-36 rounded-md shadow-lg bg-white">
                <div className="py-1">
                  {availableLangs.map((lang) => (
                    <button
                      key={lang.name}
                      onClick={() => {
                        setSelectedLang(lang.name);
                        setShowDropdown(false);
                      }}
                      className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="h-8 w-8 rounded-full"
                      />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <Button
          color="bg-[#FF556E]"
          borderColor="border-transparent"
          textColor="text-white"
        >
          <span className="text-[18px]"> Sinab ko'ring</span>
        </Button>
      </header>
    </div>
  );
}

export default Navbar;
