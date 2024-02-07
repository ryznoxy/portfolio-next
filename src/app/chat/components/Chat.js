"use client";
import ContainerAOS from "../../commons/components/elements/ContainerAOS";
import ChatRoom from "@/modules/chat";
import Login from "@/modules/chat/login";
import Logout from "@/modules/chat/logout";
import SectionHeading from "../../commons/components/elements/SectionHeading";
import SectionSubHeading from "../../commons/components/elements/SectionSubHeading";

import { auth } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import DashedDivider from "../../commons/components/elements/DashedDivider";

export default function Index() {
  const [user] = useAuthState(auth);
  return (
    <ContainerAOS>
      <div className="space-y-6">
        <div className="space-y-2">
          <SectionHeading title={"Chat Room"} />
          <SectionSubHeading>
            <p>Leave your impression or suggestion about this website here</p>
          </SectionSubHeading>
        </div>
        <DashedDivider className={"my-6"} />
        <ChatRoom user={user} />
        <div>{user ? <Logout /> : <Login />}</div>
      </div>
    </ContainerAOS>
  );
}
