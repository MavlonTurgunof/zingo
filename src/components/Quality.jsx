import React from "react";

function Quality() {
  return (
    <div className="mb-20 max-md:px-2" data-aos="fade-up">
      <div className="text-center md:mx-100 mb-6">
        <h1 className="text-[44px] font-semibold mb-6">Maxsus Xususiyatlar</h1>
        <p className="text-[20px] font-medium text-gray-500 leading-7">
          Zingo sizning til bilimingizni, gaplashish mahoratingizni va
          muomalangizni hisobga olib, eng mos keladigan partnerlarni topadi.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:mx-80 gap-y-15">
        <div className="flex flex-col bg-[url('/img/dotted-background.svg')]  justify-center items-center">
          <img src="/img/badge.svg" alt="" className="h-[169px] w-[168px]" />
          <div>
            <h1 className="text-[28px] font-semibold text-center whitespace-nowrap">
              Maxsus Xususiyatlar
            </h1>
            <p className="text-[18px] text-center text-gray-500">
              Zingo sizga ingliz tilini o‘rganishda mos suhbatdoshni topishga
              yordam beradi.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[url('/img/dotted-background.svg')] justify-center items-center">
          <img
            src="/img/find-ranking.svg"
            alt=""
            className="h-[169px] w-[168px]"
          />
          <div>
            <h1 className="text-[28px] font-semibold text-center whitespace-nowrap">
              Maqsadni Belgilash
            </h1>
            <p className="text-[18px] text-center text-gray-500">
              Til o‘rganish maqsadingizni belgilang va uni ro‘yobga chiqaring.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[url('/img/dotted-background.svg')]  justify-center items-center">
          <img
            src="/img/plan-done.svg"
            alt=""
            className="h-[169px] w-[168px]"
          />
          <div>
            <h1 className="text-[28px] font-semibold text-center whitespace-nowrap">
              Vazifalar Sozlamalari
            </h1>
            <p className="text-[18px] text-center text-gray-500">
              Muloqot sessiyalarini shaxsiylashtirish va ehtiyojlaringizga mos
              ravishda yanada samarali qilish.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[url('/img/dotted-background.svg')]  justify-center items-center">
          <img
            src="/img/communication.svg"
            alt=""
            className="h-[169px] w-[168px]"
          />
          <div>
            <h1 className="text-[28px] font-semibold text-center whitespace-nowrap">
              Ijtimoiy Muloqot
            </h1>
            <p className="text-[18px] text-center text-gray-500">
              O‘xshash qiziqishlari bor odamlar bilan suhbatlashing va o‘zaro
              tajriba almashing.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[url('/img/dotted-background.svg')]  justify-center items-center">
          <img src="/img/rocket.svg" alt="" className="h-[169px] w-[168px]" />
          <div>
            <h1 className="text-[28px] font-semibold text-center whitespace-nowrap">
              Ishni Bajarish
            </h1>
            <p className="text-[18px] text-center text-gray-500">
              Suhbatlaringizni yanada samarali qiling va ijobiy munosabatni
              saqlang.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-[url('/img/dotted-background.svg')]  justify-center items-center">
          <img
            src="/img/mind-lamp.svg"
            alt=""
            className="h-[169px] w-[168px]"
          />
          <div>
            <h1 className="text-[28px] font-semibold text-center whitespace-nowrap">
              Mustahkam Poydevor
            </h1>
            <p className="text-[18px] text-center text-gray-500">
              Til ko‘nikmalaringizni mustahkamlang va bilimingizni oshiring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quality;
