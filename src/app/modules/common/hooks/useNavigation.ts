export default function useNavigation(pathname: string) {
    const routes = [
        {
            name: "about",
            path: "/",
        },
        {
            name: "resume",
            path: "/resume",
        },
        {
            name: "portfolio",
            path: "/portfolio",
        },
        {
            name: "blog",
            path: "/blog",
        },
        {
            name: "contact",
            path: "/contact",
        },
    ]
    const title = pathname === "/" ? "about" : routes.find(route => route.path === pathname)?.name || "Not Found";

    return {
        title,
        routes
    }
}