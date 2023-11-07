import { Flex, Heading } from "@chakra-ui/react";
import { Sidebar } from "../Components/Sidebar";
import { ReportsIframe } from "../Components/ReportsIframe";

export const DashboardPage = () => (
  <Flex>
    <Sidebar />
    <Flex
      flexDirection="column"
      width="100%"
      height="100%"
      px="20px"
      pt="34px"
      alignItems="center"
      gap="90px"
    >
      <Heading color="#667080">Dashboard</Heading>
      <ReportsIframe />
    </Flex>
  </Flex>
);
