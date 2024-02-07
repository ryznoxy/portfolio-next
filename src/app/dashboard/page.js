import ContainerAOS from "./../commons/components/elements/ContainerAOS";
import Index from "./components/Index";

export const metadata = {
  title: "Dashboard ",
  description:
    "This is my personal dashboard, built with Next.js API routes deployed as serverless functions.",
  keywords: "Next.js , API routes, Dashboard API, Routes Serverless, Functions",
};
export default function Dashboard() {
  return (
    <>
      <ContainerAOS>
        <Index />
      </ContainerAOS>
    </>
  );
}
