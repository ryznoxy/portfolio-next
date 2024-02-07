import ContainerAOS from "./../commons/components/elements/ContainerAOS";
import Index from "./components/Index";

export const metadata = {
  title: "Projects ",
  description: "Software Engineer portfolio ideas",
  keywords: "portfolio frontend developer",
};

export default function Projects() {
  return (
    <>
      <ContainerAOS>
        <Index />
      </ContainerAOS>
    </>
  );
}
