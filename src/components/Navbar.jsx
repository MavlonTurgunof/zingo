import React, { useState } from "react";
import Container from "./Container";
import Button from "./Button";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Uzbek");

  const languages = [
    { name: "English", flag: "/img/en.png" },
    { name: "Uzbek", flag: "/img/uz.png" },
    { name: "Russian", flag: "/img/ru.png" },
  ];

  const availableLangs = languages.filter((lang) => lang.name !== selectedLang);

  const currentLang = languages.find((lang) => lang.name === selectedLang);

  return (
    <Container>
      <header className="flex items-center justify-between px-6 py-4 bg-white sticky top-0">
        <div className="flex items-center space-x-2">
          <img src="/img/logo.svg" alt="Zingo Logo" className="h-9" />
        </div>

        <div className="border border-solid border-[#FF556E] p-[5px] gap-x-[15px] rounded-[64px] flex items-center px-2">
          <button className="text-[#FF556E] font-medium border border-[#FF556E] px-2 py-2 rounded-full bg-[#FF556E]/10">
            Ma'lumot
          </button>
          <button className="text-black font-medium">Imkoniyatlar</button>
          <button className="text-black font-medium">Lavhalar</button>
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

        <Button>
          <span className="text-[18px]"> Sinab ko'ring</span>
        </Button>
      </header>
    </Container>
  );
}

export default Navbar;
