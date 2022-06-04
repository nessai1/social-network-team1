import IProvider from "../interfaces/IProvider";
import { TPost } from "./TPost";
import UsersService from "../users/UsersService";

type TPostAPI = {
    id: number;
    userId: number;
    text: string;
    date: string;
    pictures: Array<string>;
};

export default class PostsService implements IProvider {
    async getItem(id: number): Promise<TPost> {
        const response = await fetch(`http://localhost:4200/posts/${id}`);
        const post = await response.json();

        const userProvider = new UsersService();
        post.user = await userProvider.getItem(post.userId);
        delete post.userId;

        return post;
    }

    async getItems(offset?: number, limit?: number): Promise<TPost[]> {
        const response = await fetch(`http://localhost:4200/posts`);
        const jsonResponse = await response.json();

        if (offset === undefined) {
            offset = 0;
        }

        let posts;
        if (limit === undefined) {
            posts = jsonResponse.slice(offset);
        } else {
            posts = jsonResponse.slice(offset, offset + limit);
        }

        const userProvider = new UsersService();

        return await Promise.all(
            posts.map(async (post: TPostAPI) => {
                const user = await userProvider.getItem(post.userId);

                return {
                    id: post.id,
                    user: user,
                    text: post.text,
                    pictures: post.pictures,
                    date: new Date(post.date),
                };
            })
        );
    }
}
