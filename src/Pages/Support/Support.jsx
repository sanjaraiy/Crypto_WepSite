import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { IoMdMail } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";
function Support() {
  return (
    <DashboardLayout>
      <Stack spacing="50px" display="flex"  alignItems="center">
        <SupportCard
          leftComponent={<ContactCard></ContactCard>}
          title="Contact Us"
          text=" Have a question or just want to know more? Feel free to reach out to
          us."
          icon={IoMdMail}
        ></SupportCard>
        <SupportCard
          leftComponent={
            <InfoCard
              inverted={true}
              tagText="Contact"
              imgUrl="/Image/square.svg"
              text="Learn more about our real estate, mortgage, and corporate account services"
            ></InfoCard>
          }
          title="Live Chat"
          text="Don't have time to wait for the answer? Chat with us now."
          icon={FiMessageCircle}
        ></SupportCard>
      </Stack>
    </DashboardLayout>
  );
}

export default Support;
