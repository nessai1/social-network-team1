import { getProviders, signIn } from "next-auth/react";
import { SigninPage } from "../src/components/auth/SigninPage";
export default function SignIn({ providers }: any) {
    return <SigninPage providers={providers} />;
}
export async function getServerSideProps(context: any) {
    return { props: { providers: await getProviders() } };
}
