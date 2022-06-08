import IProvider from "../interfaces/IProvider";
import { TPost } from "./TPost";
import UsersService from "../users/UsersService";

type TPostAPI = {
    id: number;
    user: object;
    text: string;
    date: string;
    content: Array<string>;
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

    async getItems(
        offset?: number,
        limit?: number,
        token?: string
    ): Promise<TPost[]> {
        const response = await fetch("http://51.250.105.251:31441/feed/", {
            method: "get",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
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

        return await Promise.all(
            posts.map(async (post: TPostAPI) => {
                const user = post.user;

                return {
                    id: post.id,
                    user: user,
                    text: post.text,
                    pictures: post.content,
                    date: new Date(post.date),
                };
            })
        );
    }
}
