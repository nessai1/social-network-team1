import {Profile} from "./Profile";
import {TUserData} from "../../../../api/user/TUserData";

export const Sidebar = (user: TUserData) => {

    const fullName = user.firstName + ' ' + user.lastName;
    return (
        <>
            <Profile avatarUrl={user.avatarUrl} name={fullName} userId={user.uId}/>
        </>
    );
}