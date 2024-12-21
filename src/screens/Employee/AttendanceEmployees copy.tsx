import React from 'react'

import { TimeAttandanceData } from 'global/data/AppData'
import { EmployessYearlyStatusData, TodayTimeUtilisationData } from 'global/data/ChartData'

import DataTable from 'react-data-table-component'

import RecentActivityCard from 'global/components/Employees/RecentActivityCard'
import StatisticsCard from 'global/components/Employees/StatisticsCard'
import GeneralChartCard from 'global/components/Employees/TodayTimeUtilisation'
import PageHeader from 'global/components/__Library/PageHeader'

function AttendanceEmployees() {
  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Attendance Employees" />
      <div className="row align-item-center row-deck g-3 mb-3">
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
          <GeneralChartCard
            Title="Today Time Utilisation"
            extraDivBody={() => (
              <div className="timesheet-info d-flex align-items-center justify-content-between flex-wrap">
                <div className="intime d-flex align-items-center mt-2">
                  <i className="icofont-finger-print fs-4 color-light-success"></i>
                  <span className="fw-bold ms-1">Punching: 10:00 Am</span>
                </div>
                <div className="outtime w-sm-100 mt-2">
                  <button type="button" className="btn btn-dark w-sm-100">
                    <i className="icofont-foot-print me-2"></i>Punch Out
                  </button>
                </div>
              </div>
            )}
            identity="todaytimeutl"
            data={TodayTimeUtilisationData}
            footerBody={
              <div class="timesheet-info d-flex align-items-center justify-content-around flex-wrap">
                <div class="intime d-flex align-items-center">
                  <i class="icofont-lunch fs-3 color-lavender-purple"></i>
                  <span class="fw-bold ms-1">Break: 1:10 Hr</span>
                </div>
                <div class="intime d-flex align-items-center">
                  <i class="icofont-ui-timer fs-4 color-light-success"></i>
                  <span class="fw-bold ms-1">Overtime: 02:10 Hr</span>
                </div>
              </div>
            }
          />
        </div>
        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
          <GeneralChartCard
            Title="Employess Yearly Status"
            identity="Employessyearlystatus"
            data={EmployessYearlyStatusData}
          />
        </div>
      </div>
      <div className="row clearfix g-3 mb-3">
        <div className="col-lg-12 col-md-12 flex-column">
          <div className="row g-3 row-deck">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <StatisticsCard />
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <RecentActivityCard />
            </div>
          </div>
        </div>
      </div>
      <div className="row clearfix g-3">
        <div className="col-sm-12">
          <DataTable
            title={TimeAttandanceData.title}
            columns={TimeAttandanceData.columns}
            data={TimeAttandanceData.rows}
            defaultSortField="title"
            pagination
            selectableRows={false}
            className="myDataTable table-hover d-row nowrap dataTable no-footer dtr-inline mb-0 table align-middle"
            highlightOnHover={true}
          />
        </div>
      </div>
    </div>
  )
}

export default AttendanceEmployees
