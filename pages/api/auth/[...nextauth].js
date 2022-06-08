import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { type } from "os";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                username: { label: "Login", type: "text", placeholder: "login" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {

                const url = 'https://62a08e35a9866630f811ef59.mockapi.io/api/test/login';
                //const
                if (credentials.login === '1' && credentials.password === '2')
                {
                    return {
                        name: 'andrey',
                        id: 1337
                    };
                }

                return null;
            }
        })
    ],
    pages: {
        signIn: '/signin',
        signOut: '/signout',
    },

    callbacks: {
        async signIn(obj) {
            console.log(obj);
            return true;
        },
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
        async session({ session, user, token }) {
            console.log("token", token);
            console.log("user", user);
            console.log("session", session);
            session.user.userId = token.sub;
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            return token;
        },
    },
});
