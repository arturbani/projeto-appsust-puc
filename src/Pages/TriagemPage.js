import { Flex, Heading } from "@chakra-ui/react";
import { Sidebar } from "../Components/Sidebar";
import { ReportsIframe } from "../Components/ReportsIframe";

export const TriagemPage = () => (
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
      <Heading color="#667080">Dashboard - Triagem</Heading>
      <ReportsIframe src="https://app.powerbi.com/view?r=eyJrIjoiOThhYzNmMTUtMTYwZC00N2NmLWJjOTItOWQyMmI4ZTQ5YzY5IiwidCI6IjFjY2EyNzY5LTEyZmUtNGRhNS1iZTc5LWQxYzEzOTBhZmUwNSJ9&pageName=ReportSectiona1b33f82e0636a44b6ba" />
    </Flex>
  </Flex>
);
