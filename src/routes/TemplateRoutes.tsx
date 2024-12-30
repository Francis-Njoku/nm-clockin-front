import React from 'react'

import { Routes as ReactRoutes, Route } from 'react-router-dom'

import Alerts from '../__template/components/UIComponents/Alerts'
import Badges from '../__template/components/UIComponents/Badges'
import Breadcrumb from '../__template/components/UIComponents/Breadcrumb'
import Buttons from '../__template/components/UIComponents/Buttons'
import Cards from '../__template/components/UIComponents/Cards'
import Carousel from '../__template/components/UIComponents/Carousel'
import Collapse from '../__template/components/UIComponents/Collapse'
import Dropdowns from '../__template/components/UIComponents/Dropdowns'
import ListGroup from '../__template/components/UIComponents/ListGroup'
import ModalUI from '../__template/components/UIComponents/ModalUI'
import NavbarUI from '../__template/components/UIComponents/NavbarUI'
import NavsUI from '../__template/components/UIComponents/NavsUI'
import PaginationUI from '../__template/components/UIComponents/PaginationUI'
import PopoversUI from '../__template/components/UIComponents/PopoversUI'
import ProgressUI from '../__template/components/UIComponents/ProgressUI'
import Scrollspy from '../__template/components/UIComponents/Scrollspy'
import SpinnersUI from '../__template/components/UIComponents/SpinnersUI'
import ToastsUI from '../__template/components/UIComponents/ToastsUI'
import Expenses from '../__template/pages/Accounts/Expenses'
import Invoices from '../__template/pages/Accounts/Invoices'
import Payments from '../__template/pages/Accounts/Payments'
import Calendar from '../__template/pages/App/Calendar'
import ChatApp from '../__template/pages/App/ChatApp'
import Changelog from '../__template/pages/Changelog/Changelog'
import Help from '../__template/pages/Dashboard/Help'
import HrDashboard from '../__template/pages/Dashboard/HrDashboard'
import ProjectDashboard from '../__template/pages/Dashboard/ProjectDashboard'
import Documentation from '../__template/pages/Documentation/Documentation'
import ApexCharts from '../__template/pages/OtherPages/ApexCharts'
import FormsExample from '../__template/pages/OtherPages/FormsExample'
import Icons from '../__template/pages/OtherPages/Icons'
import ReviewsPage from '../__template/pages/OtherPages/ReviewsPage'
import TablesExample from '../__template/pages/OtherPages/TablesExample'
import Widgets from '../__template/pages/OtherPages/Widgets'
import ClientProfile from '../__template/pages/Our Clients/ClientProfile'
import Clients from '../__template/pages/Our Clients/Clients'
import Salaryslip from '../__template/pages/Payroll/Salaryslip'
import Leaders from '../__template/pages/Projects/Leaders'
import Projects from '../__template/pages/Projects/Projects'
import Tasks from '../__template/pages/Projects/Tasks'
import Timesheet from '../__template/pages/Projects/Timesheet'
import StaterPage from '../__template/pages/Stater/StaterPage'
import TicketsDetail from '../__template/pages/Tickets/TicketsDetail'
import TicketsView from '../__template/pages/Tickets/TicketsView'
import AdminCreateUser from '../screens/Employee/AdminCreateUser'
import Attendance from '../screens/Employee/Attendance'
import Departments from '../screens/Employee/Departments'
import Holidays from '../screens/Employee/Holidays'
import Members from '../screens/Employee/Members'

import AdminRoute from 'global/utils/auth/adminRoute'

function MainIndex() {
  return (
    <AdminRoute>
      <ReactRoutes>
        <Route path={`/admin/create-user`} element={<AdminCreateUser />} />
        <Route path={`/projects`} element={<Projects />} />
        <Route path={`/hr-dashboard`} element={<HrDashboard />} />
        <Route path={`/project-dashboard`} element={<ProjectDashboard />} />
        <Route path={`/holidays`} element={<Holidays />} />
        <Route path={`/tasks`} element={<Tasks />} />
        <Route path={`/timesheet`} element={<Timesheet />} />
        <Route path={`/leaders`} element={<Leaders />} />
        <Route path={`/tickets-view`} element={<TicketsView />} />
        <Route path={`/tickets-detail`} element={<TicketsDetail />} />
        <Route path={`/clients`} element={<Clients />} />
        <Route path={`/client-profile`} element={<ClientProfile />} />
        <Route path={`/members`} element={<Members />} />
        <Route path={`/attendance`} element={<Attendance />} />
        <Route path={`/department`} element={<Departments />} />
        <Route path={`/invoices`} element={<Invoices />} />
        <Route path={`/payments`} element={<Payments />} />
        <Route path={`/expenses`} element={<Expenses />} />
        <Route path={`/employee-salary`} element={<Salaryslip />} />
        <Route path={`/calander`} element={<Calendar />} />
        <Route path={`/chat-app`} element={<ChatApp />} />
        <Route path={`/apex-charts`} element={<ApexCharts />} />
        <Route path={`/forms-example`} element={<FormsExample />} />
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
    </AdminRoute>
  )
}

export default MainIndex
