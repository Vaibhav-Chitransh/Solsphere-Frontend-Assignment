import { Dashboard } from "@/components/Dashboard";
import { ThemeProvider } from "@/components/theme-provider";
import { TicketProvider } from "@/context/TicketContext";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <TicketProvider>
        <Dashboard />
      </TicketProvider>
    </ThemeProvider>
  );
};

export default Index;