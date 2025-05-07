import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useTickets } from "@/context/TicketContext";
import { format } from "date-fns";
import { Circle, X } from "lucide-react";

export function TicketSidebar() {
  const { selectedTicket, updateStatus, updatePriority, toggleSidebar } = useTickets();

  if (!selectedTicket) return null;

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

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "PPp");
  };

  return (
    <div className="w-full h-full bg-background p-6 overflow-y-auto flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Ticket Details</h2>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>
      </div>

      <div className="flex flex-col space-y-4 mb-6">
        <div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">{selectedTicket.id}</div>
            <Badge className={getStatusColor(selectedTicket.status)}>{selectedTicket.status}</Badge>
          </div>
          <h3 className="text-xl font-semibold mt-1">{selectedTicket.title}</h3>
        </div>

        <div>
          <div className="text-sm text-muted-foreground mb-1">Customer</div>
          <div className="font-medium">{selectedTicket.customer}</div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Created</div>
            <div>{formatDate(selectedTicket.createdAt)}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Last Updated</div>
            <div>{formatDate(selectedTicket.updatedAt)}</div>
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col space-y-4 mb-6">
        <div>
          <div className="text-sm text-muted-foreground mb-1">Description</div>
          <div className="text-sm">{selectedTicket.description}</div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col mb-6">
        <div className="text-sm font-medium mb-2">Update Ticket</div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Status</div>
            <Select
              defaultValue={selectedTicket.status}
              onValueChange={(value: "Open" | "In Progress" | "Resolved" | "Closed") => updateStatus(selectedTicket.id, value)}
            >
              <SelectTrigger>
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

          <div>
            <div className="text-sm text-muted-foreground mb-1">Priority</div>
            <Select
              defaultValue={selectedTicket.priority}
              onValueChange={(value: "Low" | "Medium" | "High" | "Urgent") => updatePriority(selectedTicket.id, value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Low">
                  <div className="flex items-center">
                    <Circle className="h-3 w-3 fill-green-500 stroke-green-500 mr-2" />
                    Low
                  </div>
                </SelectItem>
                <SelectItem value="Medium">
                  <div className="flex items-center">
                    <Circle className="h-3 w-3 fill-amber-500 stroke-amber-500 mr-2" />
                    Medium
                  </div>
                </SelectItem>
                <SelectItem value="High">
                  <div className="flex items-center">
                    <Circle className="h-3 w-3 fill-red-500 stroke-red-500 mr-2" />
                    High
                  </div>
                </SelectItem>
                <SelectItem value="Urgent">
                  <div className="flex items-center">
                    <Circle className="h-3 w-3 fill-red-600 stroke-red-600 mr-2" />
                    Urgent
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}