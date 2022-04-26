export interface IIntiface {
    host: string;
    port: number;
}

export interface IVTuberStdio {
    host: string;
    port: number;
}

export interface IStreamlabs {
    token: string;
}

export interface IDonateData {
    ammout: number;
    expresstions: string;
    power: number;
}

export interface IDonation {
    low: IDonateData;
    mid: IDonateData;
    height: IDonateData;
} 

export interface IQueue {
    delay: number;
}

export default interface IVTSOptions {
    queue: IQueue;
    donation: IDonation;
    server: {
        intiface: IIntiface;
        streamlabs: IStreamlabs;
        vtuberstudio: IVTuberStdio;
    }
}