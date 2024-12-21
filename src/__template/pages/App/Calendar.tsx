import React from 'react'

import PageHeader from 'global/components/__Library/PageHeader'

import BigCalendar from '../Pages/BigCalendar'

function Calendar() {
  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Calendar" />
      <div className="row clearfix g-3">
        <BigCalendar />
      </div>
    </div>
  )
}

export default Calendar
