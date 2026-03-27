import Image from "next/image";
import Link from "next/link";

import Hero from "./components/ui/hero/hero";
import Menu from "./components/ui/sticky-menu/mainMenu";
import MainBenefits from "./components/ui/main-benefits/mainBenefits";
import InvitationSection from "./components/ui/invitation-section/invitationSection";

export default function App() {
  return (
    <>
    <Menu />
    <Hero />
    <MainBenefits />
    <InvitationSection />
    </>
  )
}