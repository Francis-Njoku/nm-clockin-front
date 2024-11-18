import React from 'react'
import PageHeader from '../../partials/PageHeader'
import imag1 from '../../assets/images/no-data.svg'

function StaterPage() {
  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Stater Page" />
      <div className="col-12">
        <div className="card mb-3">
          <div className="card-body p-5 text-center">
            <img src={imag1} className="img-fluid mx-size" alt="No Data" />
            <div className="mb-2 mt-4">
              <span className="text-muted">No data to show</span>
            </div>
            <button type="button" className="btn btn-white lift mt-1 border">
              Get Started
            </button>
            <button type="button" className="btn btn-primary lift mt-1 border">
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StaterPage
