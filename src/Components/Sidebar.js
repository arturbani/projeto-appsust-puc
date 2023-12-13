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
      <SidebarItem title="Home" icon={<Home />} url="/projeto-appsust-puc/" />
      <SidebarItem title="Entregas" icon={<BoxIcon />} url="/projeto-appsust-puc/entregas" />
      <SidebarItem title="Colaboradores" icon={<Users />} url="/projeto-appsust-puc/colaboradores" />
      <SidebarItem title="Triagem" icon={<List />} url="/projeto-appsust-puc/triagem" />
      <SidebarItem title="Estoque" icon={<Archive />} url="/projeto-appsust-puc/estoque" />
      <SidebarItem title="Vendas" icon={<CreditCard />} url="/projeto-appsust-puc/vendas" />
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
