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
                const url = "http://51.250.105.251:31441/users/signin";

                const data = await fetch(url, {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: credentials.login,
                        password: credentials.password,
                    }),
                });

                const jsondata = await data.json();

                if (jsondata.access_token) {
                    return {
                        name: jsondata.access_token,
                    };
                }

                return null;
            },
        }),
    ],
    secret: process.env.NEXT_PUBLIC_SECRET,
    pages: {
        signIn: "http://51.250.105.251:31441/signin",
        signOut: "http://51.250.105.251:31441/signout",
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
