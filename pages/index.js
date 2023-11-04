import React from 'react'
import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/event-list'

const HomePage = (props) => {
  return (
    <div>
      <header>
        <nav></nav>
      </header>
      <EventList items={props.events}></EventList>
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  }
}

export default HomePage
