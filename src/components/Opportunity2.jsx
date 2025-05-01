import React from "react";
import Container from "./Container";
import Button from "./Button";

function Opportunity2() {
  return (
    <Container>
      <div className="flex md:flex-row flex-col-reverse gap-12 justify-center mt-16 mb-24 md:mx-14">
        <div className="w-full" data-aos="fade-up-right">
          <img src="/img/reyting.svg" alt="ready to talk" />
        </div>
        <div className="w-full flex flex-col" data-aos="fade-up-left">
          <h1 className=" text-[40px] md:text-[44px] text-center md:text-start font-semibold leading-14 mb-4">
            Vazifalaringizni rejalashtirib, ularni o'z vaqtida bajarib boring!
          </h1>
          <div className="flex flex-row gap-4 border-2 border-gray-300 justify-start py-2 px-2 md:py-3 md:px-4 rounded-full mb-6 w-full">
            <img src="/img/stars.svg" alt="bill" />
            <p className="text-[13px] md:text-[16px] text-gray-500">
              Kunlik, haftalik va oylik reytinglarda yetakchi bo'ling
            </p>
          </div>
          <div className="flex flex-row gap-4 border-2 border-gray-300 justify-start py-2 px-2 md:py-3 md:px-4 rounded-full mb-6 w-full">
            <img src="/img/smile-emoji.svg" alt="bill" />
            <p className="text-[13px] md:text-[16px] text-gray-500">
              Zingo sizning yutuqlaringizni muntazam kuzatib boradi
            </p>
          </div>
          <div className="flex flex-row gap-4 border-2 border-gray-300 justify-start py-2 px-2 md:py-3 md:px-4 rounded-full mb-6 w-full">
            <img src="/img/ranking.svg" alt="bill" />
            <p className="text-[13px] md:text-[16px] text-gray-500">
              Maqsadlaringizga erishishda eng yaxshi natijalarni ko’rsating
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Opportunity2;
