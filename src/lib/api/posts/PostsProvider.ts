import IProvider from "../interfaces/IProvider";
import {TPost} from "./TPost";
import UsersProvider from "../users/UsersProvider";

type TPostAPI = {
    id: number,
    userId: number,
    text: string,
    date: string,
    pictures: Array<string>
}

export default class PostsProvider implements IProvider {
    async getItem(id: number): Promise<TPost> {
        const response = await fetch(`http://localhost:4200/posts/${id}`);
        const post = await response.json();

        const userProvider = new UsersProvider();
        post.user = await userProvider.getItem(post.userId);
        delete post.userId;

        return post;
    }

    async getItems(): Promise<TPost[]> {
        const response = await fetch(`http://localhost:4200/posts`);
        const posts = await response.json();

        const userProvider = new UsersProvider();

        return await Promise.all(posts.map(async (post: TPostAPI) => {
            const user = await userProvider.getItem(post.userId);

            return {
                id: post.id,
                user: user,
                text: post.text,
                pictures: post.pictures,
                date: new Date(post.date)
            };
        }));
    }
}