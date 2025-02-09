import React from 'react'

import { PaymentsData } from 'global/data/AppData'

import DataTable from 'react-data-table-component'

import PageHeader from 'global/components/__Library/PageHeader'

function Payments() {
  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Payments" />
      <div className="row clearfix g-3">
        <div className="col-sm-12">
          <DataTable
            title={PaymentsData.title}
            columns={PaymentsData.columns}
            data={PaymentsData.rows}
            defaultSortField="title"
            pagination
            selectableRows={false}
            className="myDataTable table-hover d-row nowrap dataTable no-footer dtr-inline mb-0 table align-middle"
            highlightOnHover={true}
          />
        </div>
      </div>
    </div>
  )
}

export default Payments
