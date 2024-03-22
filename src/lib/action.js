"use server";
import { revalidatePath } from "next/cache";
import { User , Post } from "./models";
import { connectToDB } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";


export const addPost = async (prevState , formData) => {

    const { title, desc, img, slug, shortDesc, userId } = Object.fromEntries(formData);

    try {
        connectToDB();
        const newPost = new Post({
            title,
            desc,
            img,
            slug,
            shortDesc,
            userId
        });
        await newPost.save();
        console.log("Post saved sucessfully!");
        revalidatePath("/blog");
        revalidatePath("/admin");
    }
    catch (err) {
        console.log(err);
        return {error : "Something went wrong"}
    }
}

export const deletePost = async (formData) => {

    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();

        await Post.findByIdAndDelete(id);
        console.log("Post deleted from db sucessfully!");
        revalidatePath("/blog");
        revalidatePath("/admin");
    }
    catch (err) {
        console.log(err);
        return {error : "Something went wrong"}
    }
}

export const addUser = async (prevState , formData) => {

    const { username , email , password , img } = Object.fromEntries(formData);

    try {
        connectToDB();
        const newUser = new User({
            username,
            email,
            password,
            img
        });
        await newUser.save();
        console.log("Post saved sucessfully!");
        revalidatePath("/admin");
    }
    catch (err) {
        console.log(err);
        return {error : "Something went wrong"}
    }
}

export const deleteUser = async (formData) => {

    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();

        await Post.deleteMany({userId : id})
        await User.findByIdAndDelete(id);
        console.log("Post deleted from db sucessfully!");
        revalidatePath("/admin");
    }
    catch (err) {
        console.log(err);
        return {error : "Something went wrong"}
    }
}

export const handleLogout = async () => {
    "use server"
    await signOut();
};

export const register = async (previousState, formData) => {
    const { username, email, password, img , passwordRepeat } = Object.fromEntries(formData);

    if (password !== passwordRepeat) {
        return {error : "Passwords doesn't match!"};
    }

    try {
        connectToDB();

        const user = await User.findOne({ username });

        if (user) {
            return {error : "Username already exists!"};
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password : hashedPassword,
            img,
        });

        await newUser.save();
        console.log("Saved to db");
        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const login = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
    } catch (err) {
        console.log(err);
        
        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password!" };
        }
        throw err;
    }
};

