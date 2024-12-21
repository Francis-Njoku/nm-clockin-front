import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import AddNewUserModal from '../../partials/AddNewUserModal'
import PageHeader from '../../partials/PageHeader'
import { LeadersListData } from '../../data/AppData'

function Leaders() {
  const [isAddUserModal, setIsAddUserModal] = useState(false)

  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Leaders" />
      <div className="row clearfix g-3">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <DataTable
                title={LeadersListData.title}
                columns={LeadersListData.columns}
                data={LeadersListData.rows}
                defaultSortField="title"
                pagination
                selectableRows={false}
                className="myDataTable table-hover d-row nowrap dataTable no-footer dtr-inline mb-0 table align-middle"
                highlightOnHover={true}
                onRowClicked={() => {
                  setIsAddUserModal(true)
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <AddNewUserModal
        show={isAddUserModal}
        onClose={() => {
          setIsAddUserModal(false)
        }}
      />
    </div>
  )
}

export default Leaders
