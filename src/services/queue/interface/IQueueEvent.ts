export interface IQueueData {
    expression: string;
    power: number;
}

export interface IQueueEvents {
    "queue": (data: IQueueData, next: () => void) => void;
    "queueEnd": (data: IQueueData) => void;
}