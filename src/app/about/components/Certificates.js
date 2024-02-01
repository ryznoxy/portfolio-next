import SectionHeading from "@/app/commons/components/elements/SectionHeading";
import SectionSubHeading from "@/app/commons/components/elements/SectionSubHeading";
import { BiBarcode } from "react-icons/bi";
import CertificatesCard from "./CertificatesCard";
import { CERTIFICATELISTS } from "@/app/commons/constants/CertificateLists";

export default function Certificates() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          title="Certificates"
          icon={<BiBarcode className="mr-1" />}
        />
        <SectionSubHeading>
          <p>My Current Certificates.</p>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {CERTIFICATELISTS.map((item, index) => {
          return (
            <CertificatesCard
              Index={index}
              key={index}
              berlaku={item.berlaku}
              diberikan={item.diberikan}
              description={item.description}
              image={item.image}
              slug={item.slug}
              title={item.title}
              id_certificate={item.id_certificate}
            />
          );
        })}
      </div>
      
    </div>
  );
}
