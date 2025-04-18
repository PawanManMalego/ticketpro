import { useParams } from "react-router-dom"

import { EventDetail } from "@/features/event/components/EventDetail"
import { useEventById } from "@/shared/hooks/useEventById"

const EventDetailPage = () => {
  const { id: eventId } = useParams()

  const { event, loading } = useEventById(eventId as string)

  if (loading) {
    return <div>Loading event....</div>
  }

  console.log({ event })

  return (
    <>
      <EventDetail event={event} />
    </>
  )
}

export default EventDetailPage
