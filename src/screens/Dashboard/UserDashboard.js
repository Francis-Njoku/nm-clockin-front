import React, {useEffect, useState} from "react";
import makeAPICall from "../../utils/apiUtils";
import { message } from "antd";
import Employeesavaibility from "../../components/Dashboard/Employeesavaibility";
import HignlighterCard from "../../components/Dashboard/HignlighterCard";
import InterviewCard from "../../components/Dashboard/InterviewCard";
import TopPerformers from "../../components/Dashboard/TopPerformers";
import UpcommingInterviews from "../../components/Dashboard/UpcommingInterviews";
import GeneralChartCard from "../../components/Dashboard/GeneralChartCard";
import { EmployeeInfoChartData,TotalEmployeesChartData,TopHiringSourcesChartData } from "../../components/Data/DashboardData";
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

export default function UserDashboard (){
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    const [barChartData, setBarChartData] = useState({
        labels: [],
        datasets: []
    });

    const [pieChartData, setPieChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        // Fetch data from API
        const fetchData = () => {
            return makeAPICall({
              path: "/user/attendance/",
              method: "GET",
            })
              .then((res) => {
                processChartData(res.data);
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          };

          const processChartData = (data) => {
            const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
            const clockInCounts = Array(31).fill(0);
            const clockOutCounts = Array(31).fill(0);
            let totalClockIn = 0;
            let totalClockOut = 0;

            data.forEach(entry => {
                const clockDate = new Date(entry.clock);
                const day = clockDate.getDate() - 1;  // getDate() returns 1-31

                if (entry.attendance.name === 'clock in') {
                    clockInCounts[day]++;
                    totalClockIn++;
                } else if (entry.attendance.name === 'clock out') {
                    clockOutCounts[day]++;
                    totalClockOut++;
                }
            });

            setBarChartData({
                labels: daysInMonth,
                datasets: [
                    {
                        label: 'Clock In',
                        data: clockInCounts,
                        backgroundColor: 'rgba(75, 192, 192, 0.6)'
                    },
                    {
                        label: 'Clock Out',
                        data: clockOutCounts,
                        backgroundColor: 'rgba(153, 102, 255, 0.6)'
                    }
                ]
            });

            setPieChartData({
                labels: ['Clock In', 'Clock Out'],
                datasets: [
                    {
                        data: [totalClockIn, totalClockOut],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)'
                        ]
                    }
                ]
            });
        };
        fetchData();
    }, []);

        return(
            <div className="container-xxl">             
                <div className="row clearfix g-3">
                    <div className="col-xl-8 col-lg-12 col-md-12 flex-column">
                        <div className="row g-3">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h4 className="mb-0 fw-bold">Attendance Report for the Month</h4>
                                    </div>
                                    <div className="card-body">
                                        <Bar
                                            data={barChartData}
                                            options={{
                                                scales: {
                                                    x: {
                                                        title: {
                                                            display: true,
                                                            text: 'Days of the Month'
                                                        }
                                                    },
                                                    y: {
                                                        title: {
                                                            display: true,
                                                            text: 'Number of Events'
                                                        },
                                                        beginAtZero: true
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                </div>                              
                            </div>

                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h4 className="mb-0 fw-bold">Overall Attendance Distribution</h4>
                                    </div>
                                    <div className="card-body">
                                        <Pie
                                            data={pieChartData}
                                            options={{
                                                plugins: {
                                                    legend: {
                                                        display: true,
                                                        position: 'bottom'
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                </div>                                
                            </div>
                            {/*<div className="col-md-6">
                                <Employeesavaibility />
                            </div>
                            <div className="col-md-6">
                                <GeneralChartCard Title="Total Employees" data={TotalEmployeesChartData} TitleRight="423" identity="totalemployee"/>
                            </div>
                            <div className="col-md-12">
                                <GeneralChartCard Title="Top Hiring Sources" data={TopHiringSourcesChartData} identity="TopHiringSources"/>
                            </div>*/}
                        </div>
                    </div>
                    {/*<div className="col-xl-4 col-lg-12 col-md-12">
                        <div className="row g-3">
                            <div className="col-md-6 col-lg-6 col-xl-12"><HignlighterCard /></div>
                            <div className="col-md-6 col-lg-6 col-xl-12 flex-column">
                                <InterviewCard value={246} iconClass="icofont-users-alt-2 fs-5" label="Interviews" chartClass="icofont-chart-bar-graph fs-3 text-muted"/>
                                <InterviewCard value={101} iconClass="icofont-holding-hands fs-5" label="Hired" chartClass="icofont-chart-line fs-3 text-muted"/>
                            </div>
                            <div className="col-md-12 col-lg-12 col-xl-12"><UpcommingInterviews /></div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <TopPerformers />
                    </div>*/}
                </div>
            </div>
        )
    }


//export default HrDashboard;