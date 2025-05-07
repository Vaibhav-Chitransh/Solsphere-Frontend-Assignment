import type { Ticket } from "@/types/ticket";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTickets } from "@/context/TicketContext";
import { formatDistanceToNow } from "date-fns";
import { Circle } from "lucide-react";

interface TicketCardProps {
  ticket: Ticket;
}

export function TicketCard({ ticket }: TicketCardProps) {
  const { selectTicket } = useTickets();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-blue-500 text-white";
      case "In Progress":
        return "bg-amber-500 text-white";
      case "Resolved":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "High":
        return <Circle className="h-3 w-3 fill-red-500 stroke-red-500 mr-1" />;
      case "Medium":
        return <Circle className="h-3 w-3 fill-amber-500 stroke-amber-500 mr-1" />;
      case "Low":
        return <Circle className="h-3 w-3 fill-green-500 stroke-green-500 mr-1" />;
      default:
        return null;
    }
  };

  const formattedTime = formatDistanceToNow(new Date(ticket.updatedAt), {
    addSuffix: true,
  });

  return (
    <Card 
      className="h-full cursor-pointer hover:border-primary transition-colors duration-200"
      onClick={() => selectTicket(ticket)}
    >
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <div className="text-xs text-muted-foreground mb-1">{ticket.id}</div>
            <CardTitle className="text-base line-clamp-1">{ticket.title}</CardTitle>
          </div>
          <Badge className={`${getStatusColor(ticket.status)} h-6`}>
            {ticket.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="flex flex-col space-y-2">
          <div className="text-sm font-medium">{ticket.customer}</div>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-muted-foreground">
              {getPriorityIcon(ticket.priority)}
              {ticket.priority}
            </div>
            <div className="text-xs text-muted-foreground">
              {formattedTime}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}