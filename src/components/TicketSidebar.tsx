import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-500";
      case "Medium":
        return "text-amber-500";
      case "Low":
        return "text-green-500";
      default:
        return "text-gray-500";
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
          <div className="font-medium">{selectedTicket.customerName}</div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Created</div>
            <div>{formatDate(selectedTicket.createdAt)}</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Last Updated</div>
            <div>{formatDate(selectedTicket.lastUpdated)}</div>
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
              onValueChange={(value) => updateStatus(selectedTicket.id, value as any)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="text-sm text-muted-foreground mb-1">Priority</div>
            <Select
              defaultValue={selectedTicket.priority}
              onValueChange={(value) => updatePriority(selectedTicket.id, value as any)}
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
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {selectedTicket.messages.length > 0 && (
        <>
          <Separator className="my-4" />
          <div className="flex-1 overflow-y-auto">
            <div className="text-sm font-medium mb-4">Conversation</div>
            <div className="space-y-4">
              {selectedTicket.messages.map((message) => (
                <Card key={message.id} className="border">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium">{message.sender}</div>
                      <div className="text-xs text-muted-foreground">
                        {formatDate(message.timestamp)}
                      </div>
                    </div>
                    <div className="text-sm">{message.content}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}