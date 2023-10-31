import React from 'react'
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/events/event-list'

const HomePage = () => {
  const featuredEvents = getFeaturedEvents()
  console.log(featuredEvents)
  return (
    <div>
      <header>
        <nav></nav>
      </header>
      <EventList items={featuredEvents}></EventList>
    </div>
  )
}

export default HomePage
