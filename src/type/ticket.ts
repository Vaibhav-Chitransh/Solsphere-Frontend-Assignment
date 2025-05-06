export type TicketStatus = 'Open' | 'In Progress' | 'Resolved' | 'Closed';
export type TicketPriority = 'Low' | 'Medium' | 'High' | 'Urgent';

export interface Ticket {
    id: string;
    title: string;
    customer: string;
    customerEmail: string;
    priority: TicketPriority;
    status: TicketStatus;
    createdAt: string; 
    updatedAt: string; 
    description: string;
    category: string;
}