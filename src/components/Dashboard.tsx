import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ModeToggle } from "@/components/mode-toggle";
import { useTickets } from "@/context/TicketContext";
import { Search } from "lucide-react";
import { TicketCard } from "./TicketCard";
import { Pagination } from "./Pagination";
import { TicketSidebar } from "./TicketSidebar";

export function Dashboard() {
  const { 
    filteredTickets, 
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
    handlePageChange 
  } = useTickets();

  // Get current tickets
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = filteredTickets.slice(indexOfFirstTicket, indexOfLastTicket);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${sidebarOpen ? 'md:mr-[400px]' : ''}`}>
        <header className="border-b bg-card p-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h1 className="text-2xl font-bold">Support Tickets</h1>
            <div className="flex items-center space-x-2">
              <ModeToggle />
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-full md:w-60"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm">Status:</span>
              <Select value={statusFilter} onValueChange={(value: 'Open' | 'In Progress' | 'Resolved' | 'Closed') => setStatusFilter(value)}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Open">Open</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Resolved">Resolved</SelectItem>
                  <SelectItem value="Closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">Priority:</span>
              <Select value={priorityFilter} onValueChange={(value: "Urgent" | "Low" | "Medium" | "High") => setPriorityFilter(value)}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Urgent">Urgent</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4">
          {currentTickets.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-xl font-medium">No tickets found</p>
              <p className="text-muted-foreground mt-1">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentTickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          )}
        </main>
        <footer className="border-t p-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </footer>
      </div>
      <div
        className={`fixed top-0 right-0 w-full md:w-[400px] h-full border-l shadow-lg transform transition-transform duration-300 ease-in-out bg-background ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <TicketSidebar />
      </div>
    </div>
  );
}