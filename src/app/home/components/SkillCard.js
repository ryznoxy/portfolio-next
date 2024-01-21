import { stacks } from "./../../commons/constants/stacks";
import { Tooltip } from "@nextui-org/react";

export default function SkillCard({ name, icon }) {
  return (
    <>
      <Tooltip content={name} radius="sm" className="text-xs">
        <div className="p-2 flex items-center justify-center">
          <div className="w-6 h-6">{icon}</div>
        </div>
      </Tooltip>
    </>
  );
}
