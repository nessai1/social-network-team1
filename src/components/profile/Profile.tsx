import { useEffect, useState } from "react";

type TProps = {
    userId: number | string;
};

export const Profile = (props: TProps) => {
    return <div>Profile {props.userId}</div>;
};
