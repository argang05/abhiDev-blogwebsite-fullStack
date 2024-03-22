export const authConfig = {
    pages: {
        signIn: "/login"
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
            // console.log(user);
            if (user) {
                token.id = user.id;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({ session, token }) {
            // console.log(session.user.isAdmin);
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        authorized({ auth, request }) {
            const user = auth?.user;
            // console.log(user)
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

            //Only Admin Can Reach The Admin Dashboard:
            // if (isOnAdminPanel && !user?.isAdmin) {
            //     return false;
            // }


            //Only Authenticated Users Can Reach The Blog Page:
            if (isOnBlogPage && !user) {
                return false;
            }


            //Only Unauthenticated Users Can Reach The Login Page:
            if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            return true;
        },
    },
};