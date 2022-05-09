import {TUser} from "../users/TUser";

export type TPost = {
    id: number,
    user: TUser,
    text: string,
    pictures: Array<string>,
    date: Date
}