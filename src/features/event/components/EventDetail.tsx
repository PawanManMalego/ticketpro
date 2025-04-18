import React from "react"

import { EventItemProps } from "@/shared/types/events.types"
import { Container } from "@/shared/components/container"
import { formatDateTime } from "@/shared/utils/formatDateTime"
import { Button } from "@/shared/components/button/Button"

interface EventDetailProps {
  event: EventItemProps | null
}

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  console.log({ event })
  return (
    <section>
      <div
        className="h-[40dvh] md:h-[60dvh] flex items-center bg-cover bg-center w-full bg-black/30 bg-blend-multiply"
        style={{
          backgroundImage: `url(${event?.image_url})`,
          clipPath: `polygon(0 0, 100% 0, 100% 77%, 60% 84%, 0 100%, 0% 50%)`,
        }}
      >
        <Container className="space-y-4 left-0 mx-0 md:!pl-40 bg-gradient-to-r flex flex-col justify-center items-start from-black via-black/70 h-full max-w-3xl">
          <p className="text-3xl md:text-4xl text-white">
            {formatDateTime(event?.date as string, event?.time)}
          </p>
          <p className="text-xl md:text-2xl text-white">
            <i className="ri-map-pin-line mr-1"></i>
            {event?.location}
          </p>
          <Button color="primary" size="large" className="px-8">
            Buy Ticket
          </Button>
        </Container>
      </div>
      <Container className="mt-8 !max-w-7xl grid grid-cols-3">
        <div className="space-y-4 md:space-y-6 col-span-2">
          <h1 className="text-3xl md:text-5xl font-bold">{event?.name}</h1>
          <p className="text-base md:text-lg">{event?.description}</p>
          <div className="flex gap-1 overscroll-x-auto scrollbar-hide">
            {event?.categories.map((category) => (
              <span
                key={category.id}
                className="px-6 py-2 rounded-full bg-gray-200 text-sm"
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <span className="text-neutral-500 text-sm">Starting from</span>
          <p className="text-4xl font-semibold text-primary">${event?.price}</p>
        </div>
      </Container>
    </section>
  )
}

export { EventDetail }
