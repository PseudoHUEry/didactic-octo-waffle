import { AxiosRequestConfig, AxiosRequestHeaders } from "axios"

type General =
    | Auth
    | Request

interface Auth {
    auth: true;
    toke_type?: string;
    expirantionTime?: number;
}
interface Request {
    auth: null;
    toke_type?: string;
    expirantionTime?: number;
}


export type Action =
    | "Auth"
    | "Request"


export interface Config<T> {
    url: string;
    method: string;
    headers?: {
        [key: string]: string;
    };
    toAuth: boolean;
    data?: T extends General ? T : any
}


export const services: Record<Action, Config<General>> = {
    "Auth": {
        url: "",
        method: "",
        headers: {
        },
        toAuth: false,
        data: {
            auth: true
        } 
    },
    "Request": {
        url: "",
        method: "",
        headers: {
        },
        toAuth: false,
        data: {
            auth: null 
        }
    }
}
