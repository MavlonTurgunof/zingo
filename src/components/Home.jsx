import React from "react";
import Button from "./Button";

function Home() {
  return (
    <div
      id="malumot"
      className="bg-[linear-gradient(to_bottom,rgba(255,255,255,0.8),rgba(255,85,110,0.2)),url('/img/dotted-background.svg')]  bg-cover bg-center border-10  border-white rounded-b-[60px] shadow-2xl"
    >
      <div
        className="container mx-auto w-[50%] pt-[40px]"
        data-aos="zoom-in-down"
      >
        <h1 className="text-center text-[45px] font-semibold leading-14 pb-5">
          Til o‘rganishni <br /> yangi bosqichga ko‘taring!
        </h1>
        <p className="text-center text-[20px] text-gray-500 leading-6">
          Zingo bu bu innovatsion til o'rganish platformasi bo'lib, sizni boshqa
          foydalanuvchilar bilan ularning til bilish darajasi asosida bog'laydi.
          Platformamiz til o'rganishda yangi imkoniyatlar ochadi, chunki bu
          yerda siz haqiqiy dunyodagi muloqot orqali o'zingizni rivojlantira
          olasiz.
        </p>
        <div className="flex flex-row gap-4 justify-center my-10">
          <Button
            color="bg-[#FF556E]"
            borderColor="border-transparent"
            textColor="text-white"
          >
            <img
              src="/img/playmarket-filled.svg"
              alt="playmarket"
              className=""
            />
            <span>Yuklash</span>
          </Button>
          <Button
            color="bg-[#FF556E]"
            borderColor="border-transparent"
            textColor="text-white"
          >
            <img src="/img/appstore-filled.svg" alt="playmarket" className="" />
            <span>Yuklash</span>
          </Button>
        </div>
      </div>
      <div className="mx-auto w-[900px] container" data-aos="fade-up">
        <img
          src="/img/hero-banner.svg"
          alt="hero-banner"
          className="bottom-[-10px] min-h-full w-[900px]"
        />
      </div>
    </div>
  );
}

export default Home;
