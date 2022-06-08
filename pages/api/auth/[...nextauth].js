import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { type } from "os";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                username: {
                    label: "Login",
                    type: "text",
                    placeholder: "login",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                const url =
                    "https://62a08e35a9866630f811ef59.mockapi.io/api/test/login";

                const data = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                });

                const jsondata = await data.json();

                if (jsondata.access_token) {
                    return {
                        name: jsondata.name,
                        email: jsondata.access_token,
                        id: Number(jsondata.id),
                    };
                }

                return null;
            },
        }),
    ],
    pages: {
        signIn: "/signin",
        signOut: "/signout",
    },

    callbacks: {
        async signIn(obj) {
            console.log(obj);
            return true;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
        async session(q) {
            q.a = q;
            q.jopa = 123;
            return q.session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            return token;
        },
    },
});
