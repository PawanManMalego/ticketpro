import { useRoutes } from "react-router"

import HomePage from "@/pages/HomePage"
import AddEventPage from "@/pages/AddEventPage"
import EventDetailPage from "@/pages/EventDetailPage"

const AppRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/events/:id/:name", element: <EventDetailPage /> },
    { path: "/events/create", element: <AddEventPage /> },
  ])

  return routes
}

export { AppRouter }
