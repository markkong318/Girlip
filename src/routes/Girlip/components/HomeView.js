import React from 'react'
import PageHeader from './PageHeader'
import TripHeader from './TripHeader'
import TripSchedule from './TripSchedule'
import TripFooter from './TripFooter'

export const HomeView = () => (
  <div>
    <h4>Welcome!</h4>
      <PageHeader />
      <TripHeader />
      <TripSchedule />
      <TripFooter />
  </div>
)

export default HomeView
