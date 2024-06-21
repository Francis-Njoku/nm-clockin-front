import React, {useEffect, useState} from "react";
import makeAPICall from "../../utils/apiUtils";
import { message } from "antd";
//import { useNavigate } from 'react-router-dom';
import DataTable from "react-data-table-component";
import PageHeader from "../../components/common/PageHeader";
//import { TimeAttandanceData } from "../../components/Data/AppData";
//import { EmployessYearlyStatusData, TodayTimeUtilisationData } from "../../components/Data/ChartData";
//import RecentActivityCard from "../../components/Employees/RecentActivityCard";
//import StatisticsCard from "../../components/Employees/StatisticsCard";
//import GeneralChartCard from "../../components/Employees/TodayTimeUtilisation";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPaginate from 'react-paginate';
import { useTable, usePagination } from 'react-table';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../../assets/css/paginate.css';

export default function AttendanceEmployees() {
    const localizer = momentLocalizer(moment);
    const [startDate, setStartDate] = useState(new Date());
    const [data, setData] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [fetchData, setFetchData] = useState(0);
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(moment().month());
    const [selectedYear, setSelectedYear] = useState(moment().year());
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        const fetchData = () => {
          return makeAPICall({
            path: "/user/attendance",
            method: "GET",
          })
            .then((res) => {
              setFetchData(res);
              setData(res.data);
              setPageCount(Math.ceil(res.data.length / itemsPerPage));
              setCurrentItems(res.data.slice(0, itemsPerPage));
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
        };
        fetchData();
        //getInvestments();
    }, []);



    useEffect(() => {
        filterEvents();
      }, [data, selectedMonth, selectedYear]);
    
      const filterEvents = () => {
        const filtered = data.filter(item => {
          const eventDate = moment(item.clock);
          return eventDate.month() === selectedMonth && eventDate.year() === selectedYear;
        });
    
        setFilteredEvents(filtered.map(item => ({
          title: `${item.user_id[0].firstName} ${item.user_id[0].lastName} - ${item.attendance.name}`,
          start: new Date(item.clock),
          end: new Date(item.clock),
          allDay: false
        })));
      };




    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
      }, [itemOffset, data]);
    
    /*const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };*/
    
    /*const events = data.map(item => ({
        title: `${item.user_id[0].firstName} ${item.user_id[0].lastName} - ${item.attendance.name}`,
        start: new Date(item.clock),
        end: new Date(item.clock),
        allDay: false
    }));*/

    const handleMonthChange = (event) => {
        setSelectedMonth(parseInt(event.target.value));
    };
    
    const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value));
    };

    const handlePageClick = (event) => {
      setCurrentPage(event.selected);
    };

    /*const filteredEvents = events.filter(event => {
        const eventDate = moment(event.start);
        return eventDate.month() === selectedMonth && eventDate.year() === selectedYear;
    });*/

    const columns = React.useMemo(
      () => [
        {
          Header: 'ID',
          accessor: 'id',
        },
        {
          Header: 'Name',
          accessor: (row) => `${row.user_id[0].firstName} ${row.user_id[0].lastName}`,
        },
        {
          Header: 'Attendance',
          accessor: 'attendance.name',
        },
        {
          Header: 'Status',
          accessor: 'attendance.status',
        },
        {
          Header: 'Clock',
          accessor: 'clock',
        },
        {
          Header: 'IP Address',
          accessor: 'ipAddress',
        },
      ],
      []
    );
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page, // Instead of rows, we use page,
      // which has only the rows for the active page
    } = useTable(
      {
        columns,
        data: React.useMemo(() => {
          const start = currentPage * itemsPerPage;
          const end = start + itemsPerPage;
          return data.slice(start, end);
        }, [data, currentPage]),
        initialState: { pageIndex: 0 },
      },
      usePagination
    );
    

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Attendance" />
            <div className="container mt-5">
      <div className="mb-3">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          dateFormat="Pp"
          className="form-control"
        />
      </div>
      <div className="d-flex justify-content-center mb-3">
        <select className="form-control mr-2" value={selectedMonth} onChange={handleMonthChange}>
          {moment.months().map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>
        <select className="form-control" value={selectedYear} onChange={handleYearChange}>
          {Array.from({ length: 10 }, (v, i) => moment().year() - 5 + i).map((year, index) => (
            <option key={index} value={year}>{year}</option>
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
      <h1>Table Summary</h1>
      <table {...getTableProps()} className="table table-striped table-bordered">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            const rowClass = row.original.attendance.name === 'clock in' ? 'clock-in' : 'clock-out';
            return (
              <tr {...row.getRowProps()} className={rowClass}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'pagination-button'}
        breakLinkClassName={'pagination-button'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination-container'}
        pageClassName={'pagination-button'}
        pageLinkClassName={'pagination-button'}
        previousClassName={'pagination-button'}
        previousLinkClassName={'pagination-button'}
        nextClassName={'pagination-button'}
        nextLinkClassName={'pagination-button'}
        activeClassName={'active'}
      />
    </div>
    </div>
        </div>
    )
};


//export default AttendanceEmployees;