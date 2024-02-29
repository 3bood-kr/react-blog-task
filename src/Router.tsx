import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import NewsShow from "./pages/NewsShow";


const router= createBrowserRouter(
    [
        {
            path: '/',
            element: <RootLayout/>,
            children: [
                {
                    path: '/',
                    element: <HomePage />,
                    index: true,
                },
                {
                    path: '/news',
                    element: <NewsPage />
                },
                {
                    path: '/news/:id',
                    element: <NewsShow />
                },
            ]
        }
    ]
);

export default router;