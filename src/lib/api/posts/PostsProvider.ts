import IProvider from "../interfaces/IProvider";
import {TPost} from "./TPost";

export default class PostsProvider implements IProvider {
    getItem(id: number): TPost {
        return {
            id: 1,
            userId: 12,
            text: 'aa',
            pictures: ['123']
        };
    }

    getItems(): Array<TPost> {
        return [];
    }
}