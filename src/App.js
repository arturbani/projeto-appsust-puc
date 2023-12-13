import { ChakraProvider } from "@chakra-ui/react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { DashboardPage } from "./Pages/DashboardPage";
import { TriagemPage } from "./Pages/TriagemPage";
import { ColaboradoresPage } from "./Pages/ColaboradoresPage";
import { VendasPage } from "./Pages/VendasPage";
import { EstoquePage } from "./Pages/EstoquePage";
import { EntregasPage } from "./Pages/EntregasPage";

const router = createBrowserRouter([
  {
    path: "/projeto-appsust-puc/",
    element: <DashboardPage />,
  },
  {
    path: "/projeto-appsust-puc/triagem",
    element: <TriagemPage />,
  },
  {
    path: "/projeto-appsust-puc/colaboradores",
    element: <ColaboradoresPage />,
  },
  {
    path: "/projeto-appsust-puc/vendas",
    element: <VendasPage />,
  },
  {
    path: "/projeto-appsust-puc/estoque",
    element: <EstoquePage />,
  },
  {
    path: "/projeto-appsust-puc/entregas",
    element: <EntregasPage />,
  },
]);

function App() {
  return (
    <ChakraProvider>
       <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
