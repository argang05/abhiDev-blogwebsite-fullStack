import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
    try {
        connectToDB();
        const user = await User.findOne({ username: credentials.username });
        // console.log(user);
        if (!user) {
            throw new Error("Wrong Credentials!");
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

        if (!isPasswordCorrect) {
            throw new Error("Wrong Credentials!");
        }
        return user;

    } catch (err) {
        console.log(err);
        throw new Error("Failed to login!");
    }
};

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
        ...authConfig,
        providers:
            [
            CredentialsProvider({
                async authorize(credentials) {
                    try {
                        const user = await login(credentials);
                        return user;
                    }
                    catch (err) {
                        return null;
                    }
                },
            }),
            ], 
        callbacks: {
            ...authConfig.callbacks,
    },
});



