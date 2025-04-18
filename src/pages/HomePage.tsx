import { Container } from "@/shared/components/container"
import { Card } from "@/shared/components/card/Card"
import { EventCard } from "@/features/home/components/card/EventCard"
import { FeaturedEventCard } from "@/features/home/components/card/FeaturedEventCard"
import { HighlightEventCard } from "@/features/home/components/card/HighlightEventCard"
import { EventRowCard } from "@/features/home/components/card/EventRowCard"
import { HeroSection } from "@/features/home/components/HeroSection"
import { useEvents } from "@/shared/hooks/useEvents"
import { FeaturedEventSkeleton } from "@/features/home/components/FeaturedEventSkeleton"
import { HeroSectionSkeleton } from "@/features/home/components/HeroSectionSkeleton"
import { EventSkeleton } from "@/features/home/components/EventSkeleton"
import { EventRowSkeleton } from "@/features/home/components/EventRowSkeleton"
import { useNavigation } from "@/shared/utils/navigation"
import { slugify } from "@/shared/utils/slugify"

const HomePage = () => {
  const { allEvents, heroEvent, featuredEvent, upcomingEvents } = useEvents()

  const { navigateTo } = useNavigation()

  const handleNavigateTo = (id: string, name: string) => {
    navigateTo(`/events/${id}/${slugify(name)}`)
  }

  return (
    <>
      {heroEvent ? (
        <HeroSection
          event={heroEvent}
          onCTAClick={() => handleNavigateTo(heroEvent.id, heroEvent.name)}
        />
      ) : (
        <HeroSectionSkeleton />
      )}
      <Container className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-8 pt-8">
        {featuredEvent ? (
          <FeaturedEventCard
            event={featuredEvent}
            onClick={() =>
              handleNavigateTo(featuredEvent.id, featuredEvent.name)
            }
          />
        ) : (
          <FeaturedEventSkeleton />
        )}
        <Card spacing="lg" bordered>
          <h2 className="mb-4 font-bold text-xl">Upcoming Events</h2>
          {upcomingEvents?.length > 0 ? (
            <>
              {upcomingEvents.map((event) => (
                <HighlightEventCard
                  key={event.id}
                  event={event}
                  onClick={() => handleNavigateTo(event.id, event.name)}
                />
              ))}
              <EventRowCard
                title="View All Events"
                subtitle="See what's coming up next"
                iconName="calendar"
                endSlot={<i className="ri-arrow-right-line text-primary"></i>}
                onClick={() => navigateTo("/events")}
              />
            </>
          ) : (
            [1, 2, 3, 4].map((item) => <EventRowSkeleton key={item} />)
          )}
        </Card>
      </Container>
      <Container className="pt-8 grid md:grid-cols-4 gap-5">
        {allEvents?.length > 0
          ? allEvents?.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onBuyTicketsClick={() => handleNavigateTo(event.id, event.name)}
                onClick={() => handleNavigateTo(event.id, event.name)}
              />
            ))
          : [1, 2, 3, 4].map((item) => <EventSkeleton key={item} />)}
      </Container>
    </>
  )
}

export default HomePage
