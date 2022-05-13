import { Profile } from "./Profile";
import { SidebarMenu } from "./SidebarMenu";
//import { TUserData } from "../../../../api/user/TUserData";
import style from "./Sidebar.module.scss";
import { signIn, signOut } from "next-auth/react";

type TUserData = {
    firstName: string;
    lastName: string;
    avatarUrl: string;
    uId: string;
};

export const Sidebar = (user: TUserData) => {
    const fullName = user.firstName + " " + user.lastName;
    return (
        <div className={style.sidebar}>
            <Profile
                avatarUrl={user.avatarUrl}
                name={fullName}
                userId={user.uId}
            />
            <button onClick={() => signIn()}>auth</button>
            <button onClick={() => signOut()}>out</button>
            <SidebarMenu />
        </div>
    );
};
