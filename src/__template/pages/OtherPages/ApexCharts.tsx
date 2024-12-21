import React from 'react'

import {
  apexSparkData,
  chartOverView,
  circleChart,
  radarChartData,
  simpleChartTileData
} from 'global/data/ChartData'

import PageHeader from 'global/components/__Library/PageHeader'

import ApexSparkTile from '../Pages/ApexSparkTile'
import OverviewTile from '../Pages/OverviewTile'
import RadarTile from '../Pages/RadarTile'
import SimpleChartTile from '../Pages/SimpleChartTile'

function ApexCharts() {
  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Apex Charts" />
      <div className="row clearfix mb-3">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="row gx-3 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
            {simpleChartTileData.map((data, i) => {
              return (
                <div key={'dfjhg' + i} className="col">
                  <SimpleChartTile data={data} key={'SimpleChartTile' + i} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="row gx-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3">
            {circleChart.map((data, i) => {
              return (
                <div key={'dfjdhg' + i} className="col">
                  <RadarTile data={data} key={'RadarTile' + i} />
                </div>
              )
            })}
          </div>
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12">
          {chartOverView.map((data, i) => {
            return <OverviewTile data={data} key={'OverviewTile' + i} index={i} />
          })}
        </div>
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="row gx-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-3">
            {apexSparkData.map((data, i) => {
              return (
                <div key={'dfjdhg' + i} className="col">
                  <ApexSparkTile data={data} key={'ApexSparkTile' + i} />
                </div>
              )
            })}
            {radarChartData.map((data, i) => {
              return (
                <div key={'dfjdhg' + i} className="col">
                  <RadarTile data={data} key={'RadarTile' + i} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApexCharts
