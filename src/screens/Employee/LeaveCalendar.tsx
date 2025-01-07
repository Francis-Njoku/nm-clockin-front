import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-datepicker/dist/react-datepicker.css'

import { useLeaveRedux } from 'global/store/leave/useLeaveRedux'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import DataTable from 'react-data-table-component'
import DatePicker from 'react-datepicker'
import ReactPaginate from 'react-paginate'

import PageHeader from 'global/components/__Library/PageHeader'

import 'global/styles/paginate.css'

export default function AttendanceEmployees() {
  const localizer = momentLocalizer(moment)
  const [startDate, setStartDate] = useState(new Date())
  const [currentItems, setCurrentItems] = useState([])
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedMonth, setSelectedMonth] = useState(moment().month())
  const [selectedYear, setSelectedYear] = useState(moment().year())
  const [filteredEvents, setFilteredEvents] = useState([])

  const [refresh, setRefresh] = useState(true)

  const { leavesAdmin, getLeavesAdmin } = useLeaveRedux()
  getLeavesAdmin([refresh])

  const leaves = leavesAdmin?.data || []
  const columns = [
    {
      name: 'EMPLOYEE',
      sortable: true,
      cell: (row) => (
        <div className="flex flex-col items-center justify-center">
          {/* <img className="avatar rounded-circle" src={row.user.avatar} alt=""></img> */}
          <span className="fw-bold ms-1">{`${row.user.firstName} ${row.user.lastName}`}</span>
          <a href="members-profile" className="fw-bold text-secondary">
            {row.user.name}
          </a>
        </div>
      )
    },
    {
      name: 'LEAVE TYPE',
      selector: (row) => row.leave_type,
      sortable: true
    },
    {
      name: 'FROM',
      selector: (row) => row.start,
      sortable: true
    },
    {
      name: 'TO',
      selector: (row) => row.end,
      sortable: true
    },
    {
      name: 'REASON',
      selector: (row) => row.name,
      sortable: true
    },
    {
      name: 'STATUS',
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <a
          href="members-profile"
          className={`fw-bold ${
            row.status === 'Pending'
              ? 'text-secondary'
              : row.status === 'Approved'
                ? 'text-success'
                : row.status === 'Rejected'
                  ? 'text-danger'
                  : ''
          }`}>
          {row.status}
        </a>
      )
    }
    /*  {
      name: 'ACTION',
      sortable: true,
      cell: (row) => (
        <div className="btn-group" role="group" aria-label="Basic outlined example">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => {
              // approveLeave(row.id, refresh, setRefresh, setIsEditModal)
            }}>
            <i className="icofont-check-circled text-success"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary deleterow flex flex-row items-center justify-between gap-1"
            onClick={() => {
              // setIsCommentsModal(true)
              // setDeleteId(row.id)
            }}>
            <i className="icofont-comment text-danger"></i>
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary deleterow"
            onClick={() => {
              // rejectLeave(row.id, refresh, setRefresh, setIsDeleteModal)
            }}>
            <i className="icofont-close-circled text-danger"></i>
          </button>
        </div>
      )
    } */
  ]

  useEffect(() => {
    const filtered = leaves
      .filter((item: { start: string | number | Date }) => {
        const eventDate = moment(item.start)
        return eventDate.month() === selectedMonth && eventDate.year() === selectedYear
      })
      .map(
        (item: {
          user: { firstName: string; lastName: string }
          leave_type: string
          start: string | number | Date
          end: string | number | Date
        }) => ({
          title: `${item.user.firstName} ${item.user.lastName} - ${item.leave_type}`,
          start: new Date(item.start),
          end: new Date(item.end),
          allDay: false
        })
      )
    setFilteredEvents(filtered as any)
  }, [leaves, selectedMonth, selectedYear])
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(leaves.slice(itemOffset, endOffset))
  }, [itemOffset, leaves])

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value))
  }
  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value))
  }
  const handlePageClick = (event) => {
    setCurrentPage(event.selected)
  }

  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Leave Calendar" />
      <div className="d-flex justify-content-center mb-3">
        <select className="form-control mr-2" value={selectedMonth} onChange={handleMonthChange}>
          {moment.months().map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
        <select className="form-control" value={selectedYear} onChange={handleYearChange}>
          {Array.from({ length: 10 }, (v, i) => moment().year() - 5 + i).map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          views={['month', 'week', 'day', 'agenda']}
          defaultView="month"
          step={60}
          showMultiDayTimes
        />
      </div>
      <div className="container mt-5">
        <PageHeader headerTitle="Leave Summary" />
        <DataTable
          title={'Leave Summary'}
          columns={columns}
          data={leaves}
          defaultSortFieldId="title"
          pagination
          selectableRows={false}
          className="myDataTable table-hover d-row nowrap dataTable no-footer dtr-inline mb-0 table align-middle"
          highlightOnHover={true}
        />
      </div>
    </div>
  )
}
//export default AttendanceEmployees;
