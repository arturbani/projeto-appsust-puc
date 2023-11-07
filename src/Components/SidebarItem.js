import { Link, useLocation } from "react-router-dom";
import { Flex, Text } from "@chakra-ui/react";

export const SidebarItem = ({ url, title, icon }) => {
  const location = useLocation()
  const isActive = location.pathname === url;

  return (
  <Link to={url}>
    <Flex
      w="234px"
      height="52px"
      borderRadius="8px"
      _hover={{ bgColor: "#FFF", fontWeight: "700" }}
      px="16px"
      alignItems="center"
      gap="24px"
      bgColor={isActive ? "#FFF" : ""}
      fontWeight={isActive ? "700" : ""}
    >
      {icon}
      <Text color="#667080">{title}</Text>
    </Flex>
  </Link>
)};
