import DashedDivider from "@/app/commons/components/elements/DashedDivider";
import { Divider } from "@nextui-org/react";
import GithubHeader from "./GithubHeader";
import Header from "./Header";
import Stats from "./Stats/Stats";
import Spotify from "./Spotify";
import PageSpeedInsights from "./PageSpeed";

export default function Index() {
  return (
    <div className="h-full">
      <Header />
      <DashedDivider className={"my-6"} />
      {/* <Stats />
      <Divider className={"my-6"} /> */}
      <PageSpeedInsights />
      <Divider className="my-6" />
      {/* <GithubHeader />
      <Divider className="my-6" /> */}
      <Spotify />
    </div>
  );
}
