import React from "react";
import Button from "./Button";
import Container from "./Container";

function NewApp() {
  return (
    <div className="mb-20 " id="lavhalar" data-aos="fade-up">
      <Container>
        <div className=" flex flex-col justify-center items-center gap-y-10">
          <Button
            color="bg-[#FF556E]"
            borderColor="border-transparent"
            textColor="text-white"
          >
            <img src="/img/star-outlined.svg" alt="Star" />
            <span>Zingo ilovasi</span>
          </Button>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <img src="/img/app-screen-1.svg" alt="image" />
            </div>
            <div>
              <img src="/img/app-screen-2.svg" alt="image" />
            </div>
            <div>
              <img src="/img/app-screen-3.svg" alt="image" />
            </div>
            <div>
              <img src="/img/app-screen-4.svg" alt="image" />
            </div>
            <div>
              <img src="/img/app-screen-5.svg" alt="image" />
            </div>
            <div>
              <img src="/img/app-screen-6.svg" alt="image" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NewApp;
