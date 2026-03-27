import Image from "next/image";
import "./mainBenefits.scss";
import SpotlightCard from "../../plugin/spotlightCard/SpotlightCard";
import GradientText from "../../plugin/gradientText/GradientText";
import BriefToga from "../../../assets/images/glossy-brief-toga.png";
import HandCoin from "../../../assets/images/glossy-hand-coin.png";
import MagnifyBook from "../../../assets/images/glossy-magnify-book.png";

export default function MainBenefits() {
  return (
    <div className="container pb-5">
      <div className="row pb-5">
        <div className="col-12 col-sm-12 col-md-3" data-aos="fade-up">
          <GradientText
              colors={["#5227FF","#FF9FFC","#B19EEF"]}
              animationSpeed={8}
              showBorder={false}
              className=""
            >
              <h2>Kenapa Harus Bergabung di UIUXINDO Academy?</h2>
            </GradientText>
        </div>
        <div className="col-12 col-sm-12 col-md-3" data-aos="fade-up" data-aos-delay="200">
          <SpotlightCard className="custom-spotlight-card benefits-card" spotlightColor="rgba(166, 0, 255, 0.2)">
            <h5 className="mb-3">Belajar Sambil Bekerja</h5>
            <div className="text-lg fw200 text-desc">Nikmati suasana belajar dengan dinamika dunia kerja langsung bersama para mentor berpengalaman.</div>
            <div className="benefit-img">
              <Image src={BriefToga} fill style={{ objectFit: "contain" }} />
            </div>
          </SpotlightCard>
        </div>
        <div className="col-12 col-sm-12 col-md-3" data-aos="fade-up" data-aos-delay="400">
          <SpotlightCard className="custom-spotlight-card benefits-card" spotlightColor="rgba(166, 0, 255, 0.2)">
            <h5 className="mb-3">Bantuan Biaya</h5>
            <div className="text-lg fw200 text-desc">Dapatkan bantuan pembayaran bagi kamu yang kesulitan.</div>
            <div className="benefit-img">
              <Image src={HandCoin} fill style={{ objectFit: "contain" }} />
            </div>
          </SpotlightCard>
        </div>
        <div className="col-12 col-sm-12 col-md-3" data-aos="fade-up" data-aos-delay="600">
          <SpotlightCard className="custom-spotlight-card benefits-card" spotlightColor="rgba(166, 0, 255, 0.2)">
            <h5 className="mb-3">Gratis Akses Seluruh Event UIUXINDO</h5>
            <div className="text-lg fw200 text-desc">Dengan mengikuti UIUXINDO Academy, kamu berhak mengikuti seluruh event dari uiuxindo secara gratis!</div>
            <div className="benefit-img">
              <Image src={MagnifyBook} fill style={{ objectFit: "contain" }} />
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  )
}