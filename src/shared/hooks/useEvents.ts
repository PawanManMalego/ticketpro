import { useState, useEffect } from "react"
import { supabase } from "@/shared/services/supabaseClient"
import { EventItemProps } from "@/shared/types/events.types"
import { EventCategories } from "@/shared/types/categories.types"

const FEATURED_EVENT_KEY = "featured_event_id"
const HERO_EVENT_KEY = "hero_event_id"

export const useEvents = () => {
  const [featuredEvent, setFeaturedEvent] = useState<EventItemProps | null>(
    null
  )
  const [heroEvent, setHeroEvent] = useState<EventItemProps | null>(null)
  const [upcomingEvents, setUpcomingEvents] = useState<EventItemProps[]>([])
  const [allEvents, setAllEvents] = useState<EventItemProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)

        const { data, error } = await supabase.from("events").select(`
          *,
          event_categories (
            category:categories (
              id,
              name,
              value
            )
          )
        `)

        if (error) throw error

        const dataWithCategories = data.map((event) => ({
          ...event,
          categories: event.event_categories.map(
            (ec: EventCategories) => ec.category
          ),
        }))

        setAllEvents(dataWithCategories)

        // Filter upcoming events
        const upcoming = dataWithCategories.filter(
          (event) => new Date(event.date) > new Date()
        )
        const upcomingLimited = upcoming.slice(0, 3)
        setUpcomingEvents(upcomingLimited)

        // Retrieve or pick featured event
        let featured: EventItemProps | null = null
        const storedFeaturedId = sessionStorage.getItem(FEATURED_EVENT_KEY)

        if (storedFeaturedId) {
          featured =
            dataWithCategories.find((event) => event.id === storedFeaturedId) ||
            null
        } else {
          const randomFeatured =
            dataWithCategories[
              Math.floor(Math.random() * dataWithCategories.length)
            ] || null
          if (randomFeatured) {
            sessionStorage.setItem(FEATURED_EVENT_KEY, randomFeatured.id)
            featured = randomFeatured
          }
        }

        // Retrieve or pick hero event
        let hero: EventItemProps | null = null
        const storedHeroId = sessionStorage.getItem(HERO_EVENT_KEY)

        if (storedHeroId) {
          hero =
            dataWithCategories.find((event) => event.id === storedHeroId) ||
            null
        } else {
          const randomHero =
            upcoming[Math.floor(Math.random() * upcoming.length)] || null
          if (randomHero) {
            sessionStorage.setItem(HERO_EVENT_KEY, randomHero.id)
            hero = randomHero
          }
        }

        setFeaturedEvent(featured)
        setHeroEvent(hero)
      } catch (err) {
        setError("Error fetching events.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return { featuredEvent, heroEvent, upcomingEvents, allEvents, loading, error }
}
