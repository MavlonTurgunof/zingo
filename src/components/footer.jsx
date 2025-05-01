import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Container from "./Container";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#FD5F72] text-white md:px-6 py-6">
      <Container>
        <div className=" flex flex-col md:flex-row md:justify-between border-b-2 border-white mb-5 pb-5 max-md:gap-10 px-20">
          <div className="w-full md:w-[42%] flex flex-col max-md:justify-center max-md:items-center md:justify-between">
            <div className="flex flex-col max-md:items-center">
              <div className="  mb-4">
                <img src="/img/logo-filled.svg" alt="logo" />
              </div>
              <p className="text-[15px] md:text-start text-center">
                Foydalanuvchilarni til darajasi bo‘yicha bog‘lab, haqiqiy
                muloqot orqali til o‘rganish imkonini beruvchi platforma.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="mb-4 font-semibold">Ijtimoiy tarmoqlarimiz</h3>
              <div className="flex gap-4 text-2xl">
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
                <FaTelegramPlane />
                <FaXTwitter />
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex md:flex-row flex-row-reverse gap-10 max-w-full">
              <div>
                <h3 className="text-xl font-bold mb-4">KONTAKTLAR</h3>
                <p>Telefon raqam</p>
                <p className="mb-4">+998 77 712 99 19</p>
                <p>E-mail</p>
                <p className="mb-4">info@zingo.uz</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">MENU</h3>
                <ul className="space-y-2">
                  <li>Ma'lumot</li>
                  <li>Imkoniyatlar</li>
                  <li>Lavhalar</li>
                  <li>Foydalanish shartlari</li>
                  <li>Maxfiylik siyosati</li>
                  <li>Account o‘chirish</li>
                </ul>
              </div>
            </div>
            <div className="flex md:flex-row flex-col mt-10 gap-5">
              <button className="flex bg-[#FDF6F7] px-3 py-2 rounded-full text-black">
                <img src="/img/playmarket-colored.svg" alt="playmarket" />
                <div className="flex flex-col">
                  <span className="">Yuklab Oling</span>
                  <span className="font-bold">Google Play</span>
                </div>
              </button>
              <button className="flex bg-[#FDF6F7] px-3 py-2 rounded-full text-black">
                <img src="/img/appstore-colored.svg" alt="playmarket" />
                <div className="flex flex-col">
                  <span>Yuklab Oling</span>
                  <span className="font-bold">App Store</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-sm flex md:flex-row flex-col md:justify-between md:mx-60">
          <p>2025</p>
          <p className="mt-2">Barcha huquqlar himoyalangan</p>
        </div>
      </Container>
    </footer>
  );
}
