import { Infobar } from "./Infobar";
import { Contentbar } from "./Contentbar";
import { useEffect, useState } from "react";

type TProps = {
    userId: number | string;
};

export const Profile = (props: TProps) => {
    return (
        <>
            <Infobar />
            <Contentbar />
        </>
    );
};
