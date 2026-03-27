"use client";

import Image from "next/image";
import ElectricBorder from "../../plugin/electricBorder/ElectricBorder";
import CountUp from "../../plugin/countUp/CountUp";
import Mentee1 from "../../../assets/images/mentee-1.webp";
import Mentee2 from "../../../assets/images/mentee-2.webp";
import Mentee3 from "../../../assets/images/mentee-3.webp";
import Mentee4 from "../../../assets/images/mentee-4.webp";
import Mentee5 from "../../../assets/images/mentee-5.webp";

export default function InvitationSection() {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#232323" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 position-relative" data-aos="fade-up">
            <h2 className="mb-0">Gabung Bersama UIUXINDO Academy!</h2>
          </div>
          <div className="col-12 col-sm-12 col-md-5" data-aos="fade-up" data-aos-delay="300">
            <p className="text-lg fw700A">UIUXINDO Academy adalah platform edukasi yang berfokus pada dunia digital produk desain & teknologi terlengkap no 1 di Indonesia.</p>
            <p className="mb-0">Sebagai wujud cita-cita Indonesia mencetak talenta digital untuk membangun Indonesia yang maju. Untuk itu, kami memiliki misi mencetak 1000 talenta digital terkhusus bagi mereka yang berada di daerah terpencil menjadi talenta yang unggul, kreatif, inovatif, adaptif serta siap bertempur di perusahaan impiannya.</p>
          </div>
          <div className="col-12 col-sm-12 col-md-4" data-aos="fade-up" data-aos-delay="700">
            <ElectricBorder
              color="#ffe380"
              speed={1}
              chaos={0.03}
              thickness={2}
              style={{ borderRadius: 16 }}
            >
              <div className="p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3">
                    <Image src={Mentee1} width={30} height={30} style={{ border: "solid 1px #FFFFFF", borderRadius: "50%" }} />
                    <Image src={Mentee2} width={30} height={30} style={{ marginLeft: -8, border: "solid 1px #FFFFFF", borderRadius: "50%" }} />
                    <Image src={Mentee3} width={30} height={30} style={{ marginLeft: -8, border: "solid 1px #FFFFFF", borderRadius: "50%" }} />
                    <Image src={Mentee4} width={30} height={30} style={{ marginLeft: -8, border: "solid 1px #FFFFFF", borderRadius: "50%" }} />
                    <Image src={Mentee5} width={30} height={30} style={{ marginLeft: -8, border: "solid 1px #FFFFFF", borderRadius: "50%" }} />
                  </div>
                  <h2 className="m-0 fw700 text-primary">
                    <CountUp
                      from={0}
                      to={1000}
                      separator="."
                      direction="up"
                      duration={1}
                      className="count-up-text"
                      startCounting
                    />+
                  </h2>
                </div>
                <div className="mb-3">Sudah pernah belajar bareng di Academy UIUXINDO. Kapan giliranmu?</div>
                <button type="button" className="btn" style={{ color: "#FFFFFF", border: "solid 1px #757575", borderRadius: 99 }}>Gabung Sekarang</button>
              </div>
            </ElectricBorder>
          </div>
        </div>
      </div>
    </div>
  )
}