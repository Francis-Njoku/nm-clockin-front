import React from 'react'

import { LeadersListData } from 'global/data/AppData'

import DataTable from 'react-data-table-component'

function TableDataTable() {
  return (
    <div className="card mb-3">
      <DataTable
        title="Datatable"
        columns={LeadersListData.columns}
        data={LeadersListData.rows}
        defaultSortField="title"
        pagination
        subHeader
        selectableRows={false}
        className="myDataTable table-hover d-row nowrap dataTable no-footer dtr-inline mb-0 table align-middle"
        highlightOnHover={true}
      />
    </div>
  )
}

export default TableDataTable
