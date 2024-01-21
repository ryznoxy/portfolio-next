import ContainerAOS from "./../commons/components/elements/ContainerAOS";
import Index from "./components/Index";

export const metadata = {
  title: "Contact | Reza",
  description: "Contact me, contact reza adi",
  keywords:
    "frontend developer, software engineer, react js, javascript, typescript, contact",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/contact`,
  },
};

export default function Contact() {
  return (
    <>
      <ContainerAOS>
        <Index />
      </ContainerAOS>
    </>
  );
}
