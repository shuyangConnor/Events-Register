import axios from 'axios'

export async function getAllEvents() {
  const response = await axios({
    method: 'GET',
    url: 'https://nextjs-course-22158-default-rtdb.firebaseio.com/events.json',
  })

  const events = Object.keys(response.data).map((key) => {
    return {
      id: key,
      ...response.data[key],
    }
  })

  return events
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents()
  return allEvents.filter((event) => event.isFeatured)
}

export async function getEventById(id) {
  const allEvents = await getAllEvents()
  return allEvents.find((event) => event.id === id)
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter

  const allEvents = await getAllEvents()

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date)
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    )
  })

  return filteredEvents
}
