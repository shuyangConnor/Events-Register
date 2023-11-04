import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getEventById, getFeaturedEvents } from '../../helpers/api-util'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/ui/error-alert'

const EventDetailPage = (props) => {
  const event = props.selectedEvent

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export const getStaticProps = async (context) => {
  const eventId = context.params.eventId

  const event = await getEventById(eventId)

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  }
}

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents()

  const paths = events.map((event) => ({ params: { eventId: event.id } }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export default EventDetailPage
