import React from "react";
import Container from "./Container";
import CountUp from "react-countup";

function Stats() {
  return (
    <div
      className="bg-[url('/img/number-dots.svg')]  bg-center my-30 h-auto max-w-full "
      data-aos="fade-up"
    >
      <Container>
        <div className="flex flex-row justify-center gap-x-5  flex-wrap gap-y-5 items-center py-5">
          <div className="flex justify-center items-center flex-col flex-1">
            <div className="countup-wrap text-[#FF556E] text-[76px] font-semibold">
              <CountUp end={231} duration={3} />+
            </div>
            <p className="text-[28px] text-center whitespace-nowrap">
              Mamnun foydalanuvchilar
            </p>
          </div>
          <div className="flex justify-center items-center flex-col flex-1">
            <div className="countup-wrap text-[#FF556E] text-[76px] font-semibold">
              <CountUp end={159} duration={3} />+
            </div>
            <p className="text-[28px] whitespace-nowrap">Ijobiy baholar</p>
          </div>
          <div className="flex justify-center items-center flex-col flex-1">
            <div className="countup-wrap text-[#FF556E] text-[76px] font-semibold">
              <CountUp end={385} duration={3} />+
            </div>
            <p className="text-[28px] whitespace-nowrap">
              Yaxshilangan suhbatlar
            </p>
          </div>
          <div>
            <div className="countup-wrap text-[#FF556E] text-[76px] font-semibold">
              <CountUp end={127} duration={3} />+
            </div>
            <p className="text-[28px] text-center">O'rganish tajribalari</p>
          </div>
          <div>
            <div className="countup-wrap text-[#FF556E] text-[76px] font-semibold">
              <CountUp end={211} duration={3} />+
            </div>
            <p className="text-[28px] whitespace-nowrap">Uygun juftliklar</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Stats;
