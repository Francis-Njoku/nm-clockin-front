import React from 'react'

import { BugFileAttechedData, BugImageAttechedData } from 'global/data/AppData'

import AttechedCard from 'global/__template/components/Ticket/AttechedCard'
import InternetNotWorking from 'global/__template/components/Ticket/InternetNotWorking'
import StatusCard from 'global/__template/components/Ticket/StatusCard'
import TicketChat from 'global/__template/components/Ticket/TicketChat'

import PageHeader from 'global/components/__Library/PageHeader'

function TicketsDetail() {
  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Tickets Detail" />
      <div className="row g-3">
        <div className="col-xxl-8 col-xl-8 col-lg-12 col-md-12">
          <div className="row g-3 mb-3">
            <div className="col-md-4">
              <StatusCard
                progress="In Progress"
                progressBg="bg-warning"
                iconClass="icofont-optic fs-4"
                iconbg="bg-lightyellow"
                title="Status"
              />
            </div>
            <div className="col-md-4">
              <StatusCard
                progress=""
                details="Sally Graham"
                iconClass="icofont-user fs-4"
                iconbg="bg-lightblue"
                title="Created Name"
              />
            </div>
            <div className="col-md-4">
              <StatusCard
                progress="High"
                progressBg="bg-danger"
                details=""
                iconClass="icofont-price fs-4"
                iconbg="bg-lightgreen"
                title="Priority"
              />
            </div>
          </div>
          <div className="row g-3 mb-3">
            <div className="col-md-12">
              <InternetNotWorking />
              <div className="row g-3 mb-3">
                <div className="col-lg-6 col-md-6">
                  <AttechedCard data={BugImageAttechedData} />
                </div>
                <div className="col-lg-6 col-md-6">
                  <AttechedCard data={BugFileAttechedData} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-12">
          <TicketChat />
        </div>
      </div>
    </div>
  )
}

export default TicketsDetail
