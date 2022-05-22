import { Plato } from "../../base/Plato";
import styles from "./SitebarMenu.module.scss";
import Link from "next/link";
import { SidebarLink } from "./SidebarLink";

type TProps = {
    page: string;
};

export const SidebarMenu = (props: TProps) => {
    const platoStyles = {
        marginTop: "20px",
    };

    const userId = 1;
    console.log(props);

    return (
        <Plato style={platoStyles}>
            <ul className={styles.linksWrapper}>
                <Link href={"/profile/" + userId}>
                    <a>
                        <SidebarLink
                            isActive={props.page === "profile"}
                            name={"Моя страница"}
                        />
                    </a>
                </Link>
                <Link href={"/friends"}>
                    <a>
                        <SidebarLink
                            isActive={props.page === "friends"}
                            name={"Друзья"}
                        />
                    </a>
                </Link>

                <Link href={"/feed"}>
                    <a>
                        <SidebarLink
                            isActive={props.page === "feed"}
                            name={"Новости"}
                        />
                    </a>
                </Link>
            </ul>
        </Plato>
    );
};
