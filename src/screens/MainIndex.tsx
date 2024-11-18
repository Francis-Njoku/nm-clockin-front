import React from 'react'
import { Route, Routes as ReactRoutes } from 'react-router-dom'
import PrivateRoute from '../routes/privateRoute'

import Header from '../partials/Header'
import Expenses from './Accounts/Expenses'
import Invoices from './Accounts/Invoices'
import Payments from './Accounts/Payments'
import UserDashboard from './Dashboard/UserDashboard'
import HrDashboard from './Dashboard/HrDashboard'
import ProjectDashboard from './Dashboard/ProjectDashboard'
import Attendance from './Employee/Attendance'
import AttendanceEmployees from './Employee/AttendanceEmployees'
import Departments from './Employee/Departments'
import EmployeeProfile from './Employee/EmployeeProfile'
import Holidays from './Employee/Holidays'
import LeaveRequest from './Employee/LeaveRequest'
import Members from './Employee/Members'
import ClientProfile from './Our Clients/ClientProfile'
import Clients from './Our Clients/Clients'
import Salaryslip from './Payroll/Salaryslip'
import Leaders from './Projects/Leaders'
import Projects from './Projects/Projects'
import Tasks from './Projects/Tasks'
import Timesheet from './Projects/Timesheet'
import TicketsDetail from './Tickets/TicketsDetail'
import TicketsView from './Tickets/TicketsView'
import Alerts from './UIComponents/Alerts'
import Calendar from './App/Calendar'
import ChatApp from './App/ChatApp'
import ApexCharts from './OtherPages/ApexCharts'
import FormsExample from './OtherPages/FormsExample'
import TablesExample from './OtherPages/TablesExample'
import ReviewsPage from './OtherPages/ReviewsPage'
import Icons from './OtherPages/Icons'
import Widgets from './OtherPages/Widgets'
import Badges from './UIComponents/Badges'
import Breadcrumb from './UIComponents/Breadcrumb'
import Buttons from './UIComponents/Buttons'
import Cards from './UIComponents/Cards'
import Carousel from './UIComponents/Carousel'
import Collapse from './UIComponents/Collapse'
import Dropdowns from './UIComponents/Dropdowns'
import ListGroup from './UIComponents/ListGroup'
import ModalUI from './UIComponents/ModalUI'
import NavsUI from './UIComponents/NavsUI'
import NavbarUI from './UIComponents/NavbarUI'
import PaginationUI from './UIComponents/PaginationUI'
import PopoversUI from './UIComponents/PopoversUI'
import ProgressUI from './UIComponents/ProgressUI'
import Scrollspy from './UIComponents/Scrollspy'
import SpinnersUI from './UIComponents/SpinnersUI'
import ToastsUI from './UIComponents/ToastsUI'
import StaterPage from './Stater/StaterPage'
import PageHeader1 from '../partials/PageHeader1'
import Documentation from './Documentation/Documentation'
import Changelog from './Changelog/Changelog'
import Help from './Dashboard/Help'
import AdminCreateUser from './OtherPages/AdminCreateUser'

function MainIndex(props) {
  const { activekey } = props
  return (
    <div className="main px-lg-4 px-md-4">
      {activekey !== '/chat-app' ? (
        activekey === '/documentation' ? (
          <PageHeader1 />
        ) : (
          <Header />
        )
      ) : (
        ''
      )}
      <div className="body d-flex py-lg-3 py-md-2">
        <ReactRoutes>
          <Route
            path={`/`}
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
          />
          <Route path={`/hr-dashboard`} element={<HrDashboard />} />
          <Route path={`/project-dashboard`} element={<ProjectDashboard />} />
          <Route
            path={`/projects`}
            element={
              <PrivateRoute>
                <Projects />
              </PrivateRoute>
            }
          />
          <Route path={`/tasks`} element={<Tasks />} />
          <Route path={`/timesheet`} element={<Timesheet />} />
          <Route path={`/leaders`} element={<Leaders />} />
          <Route path={`/tickets-view`} element={<TicketsView />} />
          <Route path={`/tickets-detail`} element={<TicketsDetail />} />
          <Route path={`/clients`} element={<Clients />} />
          <Route path={`/client-profile`} element={<ClientProfile />} />
          <Route path={`/members`} element={<Members />} />
          <Route
            path={`/members-profile`}
            element={
              <PrivateRoute>
                <EmployeeProfile />
              </PrivateRoute>
            }
          />
          <Route
            path={`/attendance-summary`}
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
          />
          <Route path={`/holidays`} element={<Holidays />} />
          <Route
            path={`/attendance-employees`}
            element={
              <PrivateRoute>
                <AttendanceEmployees />
              </PrivateRoute>
            }
          />
          <Route path={`/attendance`} element={<Attendance />} />
          <Route path={`/leave-request`} element={<LeaveRequest />} />
          <Route path={`/department`} element={<Departments />} />
          <Route path={`/invoices`} element={<Invoices />} />
          <Route path={`/payments`} element={<Payments />} />
          <Route path={`/expenses`} element={<Expenses />} />
          <Route path={`/employee-salary`} element={<Salaryslip />} />
          <Route path={`/calander`} element={<Calendar />} />
          <Route path={`/chat-app`} element={<ChatApp />} />
          <Route path={`/apex-charts`} element={<ApexCharts />} />
          <Route path={`/forms-example`} element={<FormsExample />} />
          <Route
            path={`/admin/create-user`}
            element={
              <PrivateRoute>
                <AdminCreateUser />
              </PrivateRoute>
            }
          />
          <Route path={`/table-example`} element={<TablesExample />} />
          <Route path={`/reviews-page`} element={<ReviewsPage />} />
          <Route path={`/icons`} element={<Icons />} />
          <Route path={`/widgets`} element={<Widgets />} />
          <Route path={`/ui-alerts`} element={<Alerts />} />
          <Route path={`/ui-badge`} element={<Badges />} />
          <Route path={`/ui-breadcrumb`} element={<Breadcrumb />} />
          <Route path={`/ui-buttons`} element={<Buttons />} />
          <Route path={`/ui-card`} element={<Cards />} />
          <Route path={`/ui-carousel`} element={<Carousel />} />
          <Route path={`/ui-collapse`} element={<Collapse />} />
          <Route path={`/ui-dropdowns`} element={<Dropdowns />} />
          <Route path={`/ui-listgroup`} element={<ListGroup />} />
          <Route path={`/ui-modalui`} element={<ModalUI />} />
          <Route path={`/ui-navsui`} element={<NavsUI />} />
          <Route path={`/ui-navbarui`} element={<NavbarUI />} />
          <Route path={`/ui-paginationui`} element={<PaginationUI />} />
          <Route path={`/ui-popoversui`} element={<PopoversUI />} />
          <Route path={`/ui-progressui`} element={<ProgressUI />} />
          <Route path={`/ui-Scrollspyui`} element={<Scrollspy />} />
          <Route path={`/ui-spinnersui`} element={<SpinnersUI />} />
          <Route path={`/ui-toastsui`} element={<ToastsUI />} />
          <Route path={`/stater-page`} element={<StaterPage />} />
          <Route path={`/documentation`} element={<Documentation />} />
          <Route path={`/changelog`} element={<Changelog />} />
          <Route path={`/help`} element={<Help />} />
        </ReactRoutes>
      </div>
    </div>
  )
}

export default MainIndex
