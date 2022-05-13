import IProvider from "./interfaces/IProvider";
import {TPost} from "./posts/TPost";
import {TUser} from "./users/TUser";
import PostsService from "./posts/PostsService";
import UsersService from "./users/UsersService";


export {
    PostsService,
    UsersService
};

export type {
    IProvider,
    TPost,
    TUser
};
