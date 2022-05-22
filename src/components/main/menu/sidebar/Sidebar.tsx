import { Profile } from "./Profile";
import { SidebarMenu } from "./SidebarMenu";
//import { TUserData } from "../../../../api/user/TUserData";
import style from "./Sidebar.module.scss";
import { signIn, signOut } from "next-auth/react";

type TSidebarData = {
    firstName: string;
    lastName: string;
    avatarUrl: string;
    uId: string;
    page: string;
};

export const Sidebar = (sidebar: TSidebarData) => {
    const fullName = sidebar.firstName + " " + sidebar.lastName;
    return (
        <div className={style.sidebar}>
            <Profile
                avatarUrl={sidebar.avatarUrl}
                name={fullName}
                userId={sidebar.uId}
            />
            <SidebarMenu page={sidebar.page} />
        </div>
    );
};
