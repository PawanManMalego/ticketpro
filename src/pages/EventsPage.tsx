import { EventSkeleton } from "@/features/home/components/EventSkeleton"
import { EventCard } from "@/features/home/components/card/EventCard"
import { Container } from "@/shared/components/container"
import { useEvents } from "@/shared/hooks/useEvents"
import { useNavigation } from "@/shared/utils/navigation"
import { slugify } from "@/shared/utils/slugify"

const EventsPage = () => {
  const { allEvents, loading, error } = useEvents()
  const { navigateTo } = useNavigation()

  if (error) {
    return <div>Error loading events. Please try again later.</div>
  }

  const handleNavigateTo = (id: string, name: string) => {
    navigateTo(`/events/${id}/${slugify(name)}`)
  }

  return (
    <Container className="pt-8 grid md:grid-cols-4 gap-5">
      {loading &&
        [1, 2, 3, 4, 5, 6, 7, 8].map((item) => <EventSkeleton key={item} />)}
      {!loading &&
        allEvents.length > 0 &&
        allEvents?.map((event) => (
          <EventCard
            event={event}
            onBuyTicketsClick={() => handleNavigateTo(event.id, event.name)}
            onClick={() => handleNavigateTo(event.id, event.name)}
          />
        ))}
    </Container>
  )
}

export default EventsPage
