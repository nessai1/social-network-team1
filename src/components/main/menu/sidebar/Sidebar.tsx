import {Profile} from "./Profile";
import {SidebarMenu} from "./SidebarMenu";
import {TUserData} from "../../../../api/user/TUserData";
import style from "./Sidebar.module.scss";

export const Sidebar = (user: TUserData) => {

    const fullName = user.firstName + ' ' + user.lastName;
    return (
        <div className={style.sidebar}>
            <Profile avatarUrl={user.avatarUrl} name={fullName} userId={user.uId}/>
            <SidebarMenu/>
        </div>
    );
}