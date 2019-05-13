import { IOrderRows } from './IOrderRows';

export interface IOrder {
    
    id: number,
    companyId: 13,
    created: string,
    createdBy: null
    paymentMethod: null,
    totalPrice: number,
    status: number,
    orderRows: IOrderRows[]
    
}
