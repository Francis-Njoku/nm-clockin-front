import React from 'react'

import PageHeader from 'global/components/__Library/PageHeader'

import BasicTable from '../Pages/BasicTable'
import HoverableTable from '../Pages/HoverableTable'
import StripedTable from '../Pages/StripedTable'
import TableDataTable from '../Pages/TableDataTable'
import VariantsTable from '../Pages/VariantsTable'

function TablesExample() {
  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Tables Example" />
      <div className="row align-item-center">
        <div className="col-md-12">
          <BasicTable />
          <VariantsTable />
          <StripedTable />
          <HoverableTable />
          <TableDataTable />
        </div>
      </div>
    </div>
  )
}

export default TablesExample
