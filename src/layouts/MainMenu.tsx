import {Header} from "../components/main/menu/Header";
export default function MainMenu(props: any) {
    return (
        <>
            <Header avatarUrl='https://c1.35photo.pro/photos_col/r2/376/1883602_500r.jpg'></Header>
            {props.children}
        </>
    );
}