import { Box, Flex } from "@chakra-ui/react";
import { SidebarItem } from "./SidebarItem";
import { Home } from "./Icons/Home";
import { Users } from "./Icons/Users";
import { Box as BoxIcon } from "./Icons/Box";
import { List } from "./Icons/List";
import { Archive } from "./Icons/Archive";
import { CreditCard } from "./Icons/CreditCard";
import { Settings } from "./Icons/Settings";
import { UserSidebarItem } from "./UserSidebarItem";

export const Sidebar = () => (
  <Flex
    p="16px"
    flexDirection="column"
    justifyContent="space-between"
    width="266px"
    height="100vh"
    bgColor="#EEF1F4"
  >
    <Box>
      <SidebarItem title="Home" icon={<Home />} url="/" />
      <SidebarItem title="Entregas" icon={<BoxIcon />} url="/entregas" />
      <SidebarItem title="Colaboradores" icon={<Users />} url="/colaboradores" />
      <SidebarItem title="Triagem" icon={<List />} url="/triagem" />
      <SidebarItem title="Estoque" icon={<Archive />} url="/estoque" />
      <SidebarItem title="Vendas" icon={<CreditCard />} url="/vendas" />
    </Box>
    <Box>
      <Box
        width="215px"
        height="1px"
        bgColor="#667080"
        opacity="0.4"
        mb="24px"
      />
      <SidebarItem title="Configurações" icon={<Settings />} />
      <UserSidebarItem />
    </Box>
  </Flex>
);
