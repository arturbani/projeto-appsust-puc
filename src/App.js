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
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/triagem",
    element: <TriagemPage />,
  },
  {
    path: "/colaboradores",
    element: <ColaboradoresPage />,
  },
  {
    path: "/vendas",
    element: <VendasPage />,
  },
  {
    path: "/estoque",
    element: <EstoquePage />,
  },
  {
    path: "/entregas",
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
