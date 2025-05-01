import React from "react";
import Container from "./Container";
import Button from "./Button";

function Opportunity() {
  return (
    <Container>
      <div id="imkoniyatlar" className="flex flex-row mx-16 gap-12 my-16">
        <div
          className="w-[50%] flex flex-col justify-start"
          data-aos="fade-up-right"
        >
          <h1 className=" text-[44px] font-semibold leading-14 mb-4">
            Vaqtingizni samarali boshqarib, natijalarni tezda qo’lga kiriting.
          </h1>
          <div className="flex flex-row gap-4 border-2 border-gray-300 justify-start py-3 px-4 rounded-full mb-6 w-[90%]">
            <img src="/img/bill.svg" alt="bill" />
            <p className="text-[16px] text-gray-500">
              Bir necha hafta ichida sezilarli rivojlanishni ko'ring
            </p>
          </div>
          <div className="flex flex-row gap-4 border-2 border-gray-300 justify-start py-3 px-4 rounded-full mb-6 w-[90%]">
            <img src="/img/smile-emoji.svg" alt="bill" />
            <p className="text-[16px] text-gray-500">
              Til bilish darajangizni aniqlang va baholang
            </p>
          </div>
          <div className="flex flex-row gap-4 border-2 border-gray-300 justify-start py-3 px-4 rounded-full mb-6 w-[90%]">
            <img src="/img/community.svg" alt="bill" />
            <p className="text-[16px] text-gray-500">
              Zingo bilan kundalik suhbatlarni boshlang
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button
              color="bg-[#FDF6F7]"
              borderColor="border-black"
              textColor="text-black"
            >
              <img src="/img/playmarket-colored.svg" alt="playmarket" />
              <div className="flex flex-col">
                <span>Yuklab Oling</span>
                <span>Google Play</span>
              </div>
            </Button>
            <Button
              color="bg-[#FDF6F7]"
              borderColor="border-black"
              textColor="text-black"
            >
              <img src="/img/playmarket-colored.svg" alt="playmarket" />
              <div className="flex flex-col">
                <span>Yuklab Oling</span>
                <span>Google Play</span>
              </div>
            </Button>
          </div>
        </div>
        <div className="w-[50%]" data-aos="fade-up-left">
          <img src="/img/ready-to-talk.svg" alt="ready to talk" />
        </div>
      </div>
    </Container>
  );
}

export default Opportunity;
