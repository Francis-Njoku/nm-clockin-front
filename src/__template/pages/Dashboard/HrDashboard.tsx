import React from 'react'

import {
  EmployeeInfoChartData,
  TopHiringSourcesChartData,
  TotalEmployeesChartData
} from 'global/data/DashboardData'

import Employeesavaibility from 'global/__template/components/Dashboard/Employeesavaibility'
import GeneralChartCard from 'global/__template/components/Dashboard/GeneralChartCard'
import HignlighterCard from 'global/__template/components/Dashboard/HignlighterCard'
import InterviewCard from 'global/__template/components/Dashboard/InterviewCard'
import TopPerformers from 'global/__template/components/Dashboard/TopPerformers'
import UpcommingInterviews from 'global/__template/components/Dashboard/UpcommingInterviews'

function HrDashboard() {
  return (
    <div className="container-xxl">
      <div className="row clearfix g-3">
        <div className="col-xl-8 col-lg-12 col-md-12 flex-column">
          <div className="row g-3">
            <div className="col-md-12">
              <GeneralChartCard Title="Employees Info" data={EmployeeInfoChartData} />
            </div>
            <div className="col-md-6">
              <Employeesavaibility />
            </div>
            <div className="col-md-6">
              <GeneralChartCard
                Title="Total Employees"
                data={TotalEmployeesChartData}
                TitleRight="423"
                identity="totalemployee"
              />
            </div>
            <div className="col-md-12">
              <GeneralChartCard
                Title="Top Hiring Sources"
                data={TopHiringSourcesChartData}
                identity="TopHiringSources"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-12 col-md-12">
          <div className="row g-3">
            <div className="col-md-6 col-lg-6 col-xl-12">
              <HignlighterCard />
            </div>
            <div className="col-md-6 col-lg-6 col-xl-12 flex-column">
              <InterviewCard
                value={246}
                iconClass="icofont-users-alt-2 fs-5"
                label="Interviews"
                chartClass="icofont-chart-bar-graph fs-3 text-muted"
              />
              <InterviewCard
                value={101}
                iconClass="icofont-holding-hands fs-5"
                label="Hired"
                chartClass="icofont-chart-line fs-3 text-muted"
              />
            </div>
            <div className="col-md-12 col-lg-12 col-xl-12">
              <UpcommingInterviews />
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <TopPerformers />
        </div>
      </div>
    </div>
  )
}

export default HrDashboard
