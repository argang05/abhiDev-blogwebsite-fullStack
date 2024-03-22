import { Post, User } from "./models";
import { connectToDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
//TEMPORARY DATA:
// const users = [
//     { id: 1, name: 'John' },
//     { id: 2, name: 'Jackie'}
// ];

// const posts = [
//     {
//         id: 1,
//         title: "Embrace the Path: A Journey Within",
//         shortBody : "Embark on a transformative journey through our latest blog post, where words weave...",
//         body:
//             "Embark on a transformative journey through our latest blog post, where words weave a tapestry of adventure and self-discovery. Follow paths less traveled as we explore the depths of the human experience, navigating the twists and turns of life's winding roads. Encounter moments of triumph and tribulation, finding solace in shared stories and newfound perspectives. From the peaks of exhilaration to the valleys of introspection, each word invites you to join the expedition of the soul. Let our narratives be your compass, guiding you through the landscapes of imagination and enlightenment. Welcome to a voyage where every word is a stepping stone towards infinite possibility.",
//         userId: 1,
//         image: "https://images.pexels.com/photos/19982818/pexels-photo-19982818/free-photo-of-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         id: 2,
//         title: "Embrace the Majesty: Nature's Grandeur Awaits",
//         shortBody : "Embark on a breathtaking journey through the untamed beauty of nature's grandeur..." ,
//         body:
//             "Embark on a breathtaking journey through the untamed beauty of nature's grandeur. In this immersive exploration of mountains, discover serenity amidst towering peaks, hear whispers of ancient winds, and witness the dance of light and shadow upon rugged cliffs. From the tranquil embrace of alpine lakes to the majestic vistas that stretch beyond the horizon, let each word transport you to a world where time stands still and the soul finds solace. Join us as we unravel the mysteries of the natural world, weaving tales of wonder and reverence for the awe-inspiring landscapes that shape our existence",
//         userId: 2,
//         image: "https://images.pexels.com/photos/1624504/pexels-photo-1624504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         id: 3,
//         title: "Oceans: Nature's Dazzling Aquatic Symphony",
//         shortBody : "Dive into the mesmerizing depths of the oceans, where beauty knows no bounds...",
//         body:
//             "Dive into the mesmerizing depths of the oceans, where beauty knows no bounds. From vibrant coral reefs teeming with life to majestic creatures gliding through the azure waters, immerse yourself in the awe-inspiring wonders of the marine world. Explore the delicate ecosystems that harbor a wealth of biodiversity, each wave unveiling a breathtaking spectacle of colors and textures. Discover the profound serenity of underwater landscapes, where tranquility reigns supreme. Join us as we embark on a voyage to celebrate the unparalleled beauty of the oceans, reminding us of the importance of preserving these precious habitats for generations to come.",
//         userId: 1,
//         image: "https://images.pexels.com/photos/20147088/pexels-photo-20147088/free-photo-of-a-rock-formation-in-the-ocean-with-birds-flying-over-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         id: 4,
//         title: "Monumental Beauty: A Timeless Tribute",
//         shortBody : "Embark on a captivating journey through the timeless allure of majestic monuments. From the...",
//         body:
//             "Embark on a captivating journey through the timeless allure of majestic monuments. From the intricate details of ancient architecture to the grandeur of iconic landmarks, discover the beauty that transcends time. Explore the rich history, cultural significance, and architectural marvels that define our world's heritage. Each monument tells a unique story, a testament to human ingenuity and artistic expression. Join us as we unravel the mysteries and marvel at the breathtaking beauty that stands as a testament to the craftsmanship of civilizations past. Let these monuments inspire awe and wonder, reminding us of the enduring power of human creativity and imagination.",
//         userId: 2,
//         image: "https://images.pexels.com/photos/2659475/pexels-photo-2659475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
//     {
//         id: 5,
//         title: "Embracing Nature's Majestic Tree Symphony",
//         shortBody : "In the embrace of nature's grandeur lies the silent symphony of trees, where each leaf whispers...",
//         body:
//             "In the embrace of nature's grandeur lies the silent symphony of trees, where each leaf whispers tales of resilience and beauty. From the towering giants to the delicate saplings, every tree is a masterpiece of life's artistry, painting the landscape with hues of green and brown. In their steadfast presence, we find solace, inspiration, and a reminder of our interconnectedness with the earth. Let us marvel at the intricate patterns of branches, the dance of sunlight through leaves, and the gentle rustle of the wind. For in the beauty of trees, we discover the timeless poetry of nature's embrace.",
//         userId: 1,
//         image: "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//     },
// ]

export const getPosts = async () => {
    try {
        connectToDB();
        const posts = await Post.find();
        return posts;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch the posts...");
    }
};

export const getPost = async (slug) => {
    try {
        connectToDB();
        const post = await Post.findOne({ slug: slug });
        return post;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch the post!");
    }
};

export const getUser = async (id) => {
    noStore();
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch the user...");
    }
};
export const getUsers = async () => {
    try {        
        connectToDB();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch the users...");
    }
}