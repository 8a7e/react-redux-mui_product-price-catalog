import CurrencyExchange from "./components/currency-exchange";
import Feed from "./pages/feed";

export const privateRoutes = [
  {
    path: "/exchange",
    Component: CurrencyExchange,
  },
  {
    path: "/feed",
    Component: Feed,
  },
];
