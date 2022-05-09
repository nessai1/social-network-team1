import IProvider from "../interfaces/IProvider";
import {TPost} from "./TPost";

export default class PostsProvider implements IProvider {
    async getItem(id: number): Promise<TPost> {
        const response = await fetch(`http://localhost:4200/posts/${id}`);
        return response.json();
    }

    async getItems(): Promise<TPost[]> {
        const response = await fetch(`http://localhost:4200/posts`);
        return response.json();
    }
}