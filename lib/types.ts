export type Order = {
    orderid: number;
    customer: string;
    date: string;
    time: string;
    mode: string;
    total: number;
    payment: string;
    status: 'Accepted' | 'Rejected';
};