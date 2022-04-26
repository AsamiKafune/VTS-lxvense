export default interface IDonation {
    name: string;
    isTest: boolean;
    formatted_amount: string;
    amount: string;
    message: string;
    currency: string;
    to: {
        name: string;
    }
    from: string;
    from_user_id: number;
    _id: string;
    priority: number;
}