import React from 'react'

import SalaryslipPrint from 'global/components/Employees/SalaryslipPrint'
import PageHeader from 'global/components/__Library/PageHeader'

function Salaryslip() {
  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Salary slip" />
      <div className="row justify-content-center">
        <div className="col-lg-12 col-md-12">
          <SalaryslipPrint />
        </div>
      </div>
    </div>
  )
}

export default Salaryslip
