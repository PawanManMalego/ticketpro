import { useEffect, useState } from "react"
import { supabase } from "@/shared/services/supabaseClient"
import { EventItemProps } from "@/shared/types/events.types"
import { EventCategories } from "@/shared/types/categories.types"

export const useEventById = (eventId: string | null) => {
  const [event, setEvent] = useState<EventItemProps | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!eventId) return

    const fetchEvent = async () => {
      try {
        setLoading(true)

        const { data, error } = await supabase
          .from("events")
          .select(
            `
            *,
            event_categories (
              category:categories (
                id,
                name,
                value
              )
            )
          `
          )
          .eq("id", eventId)
          .single()

        if (error) throw error

        const normalizedEvent: EventItemProps = {
          ...data,
          categories: data.event_categories.map(
            (ec: EventCategories) => ec.category
          ),
        }

        setEvent(normalizedEvent)
      } catch (err) {
        console.error(err)
        setError("Failed to load event.")
      } finally {
        setLoading(false)
      }
    }

    fetchEvent()
  }, [eventId])

  return { event, loading, error }
}
