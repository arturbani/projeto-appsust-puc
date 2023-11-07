import { Link } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";
import { User } from "./Icons/User";

export const UserSidebarItem = () => (
  <Link>
    <Flex
      w="234px"
      height="52px"
      borderRadius="8px"
      _hover={{ bgColor: "#FFF", fontWeight: "700" }}
      px="8px"
      alignItems="center"
      gap="16px"
    >
      <User />
      <Text color="#667080">Usuário</Text>
    </Flex>
  </Link>
);
