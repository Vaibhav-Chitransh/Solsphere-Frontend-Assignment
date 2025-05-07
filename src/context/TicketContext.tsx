import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { getTickets, updateTicketStatus, updateTicketPriority } from "@/data/mockData";
import type { Ticket, TicketPriority, TicketStatus } from "@/types/ticket";
import { useToast } from "@/hooks/use-toast";

interface TicketContextType {
  tickets: Ticket[];
  filteredTickets: Ticket[];
  selectedTicket: Ticket | null;
  searchTerm: string;
  statusFilter: TicketStatus | "All";
  priorityFilter: TicketPriority | "All";
  currentPage: number;
  ticketsPerPage: number;
  totalPages: number;
  sidebarOpen: boolean;
  setSearchTerm: (term: string) => void;
  setStatusFilter: (status: TicketStatus | "All") => void;
  setPriorityFilter: (priority: TicketPriority | "All") => void;
  selectTicket: (ticket: Ticket | null) => void;
  handlePageChange: (pageNumber: number) => void;
  updateStatus: (id: string, status: TicketStatus) => void;
  updatePriority: (id: string, priority: TicketPriority) => void;
  toggleSidebar: () => void;
}

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export function TicketProvider({ children }: { children: ReactNode }) {
  const [tickets] = useState<Ticket[]>(getTickets());
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<TicketStatus | "All">("All");
  const [priorityFilter, setPriorityFilter] = useState<TicketPriority | "All">("All");
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [ticketsPerPage] = useState(6);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();

  // Filter tickets based on search term and filters
  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch = 
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "All" || ticket.status === statusFilter;
    const matchesPriority = priorityFilter === "All" || ticket.priority === priorityFilter;
    
    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Select ticket and open sidebar
  const selectTicket = (ticket: Ticket | null) => {
    setSelectedTicket(ticket);
    if (ticket) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

  // Update ticket status
  const updateStatus = (id: string, status: TicketStatus) => {
    const updatedTicket = updateTicketStatus(id, status);
    if (updatedTicket) {
      setSelectedTicket({ ...updatedTicket });
      toast({
        title: "Status Updated",
        description: `Ticket ${id} status changed to ${status}`,
      });
    }
  };

  // Update ticket priority
  const updatePriority = (id: string, priority: TicketPriority) => {
    const updatedTicket = updateTicketPriority(id, priority);
    if (updatedTicket) {
      setSelectedTicket({ ...updatedTicket });
      toast({
        title: "Priority Updated",
        description: `Ticket ${id} priority changed to ${priority}`,
      });
    }
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    if (!sidebarOpen === false) {
      setSelectedTicket(null);
    }
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        filteredTickets,
        selectedTicket,
        searchTerm,
        statusFilter,
        priorityFilter,
        currentPage,
        ticketsPerPage,
        totalPages,
        sidebarOpen,
        setSearchTerm,
        setStatusFilter,
        setPriorityFilter,
        selectTicket,
        handlePageChange,
        updateStatus,
        updatePriority,
        toggleSidebar
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export function useTickets() {
  const context = useContext(TicketContext);
  if (context === undefined) {
    throw new Error("useTickets must be used within a TicketProvider");
  }
  return context;
}