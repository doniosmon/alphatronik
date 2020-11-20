import Layout from "./layout";
import { FaWhatsapp, FaPhoneAlt, FaTelegram, FaEnvelope } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

export default function About({ title, links }) {
  return (
    <Layout pageTitle={title} links={links}>
      <div className="text-base">
        <p className="font-bold">
          Anda dapat menghubungi kami melalui telepon atau bertanya secara
          online.<br></br>
          Silahkan hubungi kami di kontak & alamat di bawah ini:
        </p>
      </div>
      <div className="text-3xl leading-10 mt-4">
        <a href="tel:+6285270779271" className="flex items-center m-2">
          <FaPhoneAlt />
          <p className="ml-4">0852-7077-9271</p>
        </a>
        <a href="tel:+6282272018288" className="flex items-center m-2">
          <FaPhoneAlt />
          <p className="ml-4">0822-7201-8288</p>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+6285297975252"
          target="_blank"
          className="flex items-center m-2"
        >
          <FaWhatsapp />
          <p className="ml-4">0852-7077-9271</p>
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+6282272018288"
          target="_blank"
          className="flex items-center m-2"
        >
          <FaWhatsapp />
          <p className="ml-4">0822-7201-8288</p>
        </a>

        <a
          href="https://t.me/alphacs1"
          target="_blank"
          className="flex items-center m-2"
        >
          <FaTelegram />
          <p className="ml-4">@alphacs1</p>
        </a>

        <a href="mailto:cs@alphatronik.id" className="flex items-center m-2">
          <FaEnvelope />
          <p className="ml-4">cs@alphatronik.id</p>
        </a>

        <div className="w-full flex m-2 items-start">
          <div className="flex items-center mt-3">
            <ImLocation2 />
          </div>
          <div className="ml-4">
            <p>Besar Tembung No 18, Percut Sei Tuan</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
