import React from 'react'

import { BugImageAttechedData, OurClientsData, ProjectCardData } from 'global/data/AppData'

import CurrentClientProject from 'global/__template/components/Clients/CurrentClientProject'
import OurClients from 'global/__template/components/Clients/OurClients'
import BrandInfoSmallcard from 'global/__template/components/Dashboard/BrandInfoSmallcard'
import DylanHunter from 'global/__template/components/Dashboard/DylanHunter'
import Employeesavaibility from 'global/__template/components/Dashboard/Employeesavaibility'
import ProjectCredentials from 'global/__template/components/Dashboard/ProjectCredentials'
import TaskCard from 'global/__template/components/Dashboard/TaskCard'
import TopPerformers from 'global/__template/components/Dashboard/TopPerformers'
import UpcommingInterviews1 from 'global/__template/components/Dashboard/UpcommingInterviews1'
import AttechedCard from 'global/__template/components/Ticket/AttechedCard'
import StatusCard from 'global/__template/components/Ticket/StatusCard'

import PageHeader from 'global/components/__Library/PageHeader'

function Widgets() {
  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Widgets" />
      <div className="row g-3 mb-3 mt-3">
        {ProjectCardData.map((d, i) => {
          if (i === 0) {
            return (
              <div key={'ljsdhl' + i} className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                <CurrentClientProject
                  teamImage={d.teamImage}
                  logo={d.logo}
                  logoBg={d.logoBg}
                  title={d.title}
                  sl={d.sl}
                  onClickEdit={() => {
                    this.setState({ isModal: true })
                  }}
                  onClickDelete={() => {
                    this.setState({ isDeleteModal: true })
                  }}
                  onClickAdd={() => {
                    this.setState({ isAddUserModa: true })
                  }}
                />
              </div>
            )
          }
          return null
        })}
        {OurClientsData.map((data, i) => {
          if (i === 0) {
            return (
              <div key={'skhd' + i} className="col">
                <OurClients
                  avatar={data.avatar}
                  post={data.post}
                  name={data.name}
                  Companyname={data.Companyname}
                  onClickEdit={() => {
                    this.setState({ isModal: true })
                  }}
                  onClickDelete={() => {
                    this.setState({ isModalDelete: true })
                  }}
                  details="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices."
                />
              </div>
            )
          }
          return null
        })}
      </div>
      <div className="row g-3 mb-3 mt-3">
        <div className="col-lg-4">
          <Employeesavaibility />
        </div>
        <div className="col-lg-4">
          <UpcommingInterviews1 />
        </div>
        <div className="col-lg-4">
          <AttechedCard data={BugImageAttechedData} />
        </div>
      </div>
      <div className="row g-3 mb-3 mt-3">
        <div className="col-md-12">
          <TopPerformers />
        </div>
      </div>
      <div className="row g-3 mb-3 mt-3">
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
      <div className="row g-3 mb-3 mt-3">
        <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
          <TaskCard label="Total Task" value="122" iconClass="bi bi-journal-check fs-4" />
        </div>
        <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
          <TaskCard label="Completed Task" value="376" iconClass="bi bi-list-check fs-4" />
        </div>
        <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
          <TaskCard label="Progress Task" value="74" iconClass="bi bi-clipboard-data fs-4" />
        </div>
      </div>
      <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 row-cols-xxl-4 mb-3">
        <div className="col">
          <BrandInfoSmallcard title="Total Projects" value="550" iconClass="icofont-data fs-3" />
        </div>
        <div className="col">
          <BrandInfoSmallcard
            title="Coming Projects"
            value="210"
            iconClass="icofont-chart-flow fs-3"
          />
        </div>
        <div className="col">
          <BrandInfoSmallcard
            title="Progress Projects"
            value="8456 Files"
            iconClass="icofont-chart-flow-2 fs-3"
          />
        </div>
        <div className="col">
          <BrandInfoSmallcard
            title="Finished Projects"
            value="88 Files"
            iconClass="icofont-tasks fs-3"
          />
        </div>
      </div>
      <div className="row g-3 row-deck mb-3">
        <div className="col-md-12 col-lg-8 col-xl-7 col-xxl-7">
          <DylanHunter />
        </div>
        <div className="col-md-12 col-lg-4 col-xl-5 col-xxl-5">
          <ProjectCredentials />
        </div>
      </div>
    </div>
  )
}

export default Widgets
