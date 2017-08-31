import React from 'react'
import PageHeader from './PageHeader'
import TripHeader from './TripHeader'
import TripSchedule from './TripSchedule'
import TripFooter from './TripFooter'
import PageFooter from './PageFooter'

export const HomeView = () => (
  <div>
      <PageHeader />
      <TripHeader />
      <TripSchedule />
      <TripFooter />
      <PageFooter />
  </div>
)

export default HomeView
