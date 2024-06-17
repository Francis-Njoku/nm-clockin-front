import React, {useEffect, useState} from "react";
import makeAPICall from "../../utils/apiUtils";
import { message } from "antd";
//import { useNavigate } from 'react-router-dom';
import DataTable from "react-data-table-component";
import PageHeader from "../../components/common/PageHeader";
import { TimeAttandanceData } from "../../components/Data/AppData";
import { EmployessYearlyStatusData, TodayTimeUtilisationData } from "../../components/Data/ChartData";
import RecentActivityCard from "../../components/Employees/RecentActivityCard";
import StatisticsCard from "../../components/Employees/StatisticsCard";
import GeneralChartCard from "../../components/Employees/TodayTimeUtilisation";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactPaginate from 'react-paginate';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AttendanceEmployees() {
    const localizer = momentLocalizer(moment);
    const [startDate, setStartDate] = useState(new Date());
    const [data, setData] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [fetchData, setFetchData] = useState(0);
    const itemsPerPage = 10;
    const [selectedMonth, setSelectedMonth] = useState(moment().month());
    const [selectedYear, setSelectedYear] = useState(moment().year());
    const [filteredEvents, setFilteredEvents] = useState([]);

    useEffect(() => {
        const fetchData = () => {
          return makeAPICall({
            path: "/user/attendance/",
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
    
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    
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

    /*const filteredEvents = events.filter(event => {
        const eventDate = moment(event.start);
        return eventDate.month() === selectedMonth && eventDate.year() === selectedYear;
    });*/
    

    return (
        <div className="container-xxl">
            <PageHeader headerTitle="Attendance Employees" />
            <div className="row align-item-center row-deck g-3 mb-3">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
                    <GeneralChartCard Title="Today Time Utilisation" extraDivBody={() =>
                        <div className="timesheet-info d-flex align-items-center justify-content-between flex-wrap">
                            <div className="intime d-flex align-items-center mt-2">
                                <i className="icofont-finger-print fs-4 color-light-success"></i>
                                <span className="fw-bold ms-1">Punching: 10:00 Am</span>
                            </div>
                            <div className="outtime mt-2 w-sm-100">
                                <button type="button" className="btn btn-dark w-sm-100"><i className="icofont-foot-print me-2"></i>Punch Out</button>
                            </div>
                        </div>
                    }
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
                    <GeneralChartCard Title="Employess Yearly Status" identity="Employessyearlystatus" data={EmployessYearlyStatusData} />
                </div>

            </div>





            <div className="container mt-5">
      <h1>Calendar with Paginated Data and Date Picker</h1>
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
      <div className="mt-3">
        <ul className="list-group">
          {currentItems.map((item) => (
            <li key={item.id} className="list-group-item">
              <p><strong>Name:</strong> {item.user_id[0].firstName} {item.user_id[0].lastName}</p>
              <p><strong>Attendance:</strong> {item.attendance.name} ({item.attendance.status})</p>
              <p><strong>Clock:</strong> {item.clock}</p>
              <p><strong>IP Address:</strong> {item.ipAddress}</p>
            </li>
          ))}
        </ul>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakLinkClassName={"page-link"}
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
                        className="table myDataTable table-hover align-middle mb-0 d-row nowrap dataTable no-footer dtr-inline"
                        highlightOnHover={true}
                    />
                </div>
            </div>
        </div>
    )
};


//export default AttendanceEmployees;