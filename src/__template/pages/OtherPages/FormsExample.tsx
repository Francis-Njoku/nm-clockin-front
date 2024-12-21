import React from 'react'

import PageHeader from 'global/components/__Library/PageHeader'

import AdvancedValidationForm from '../Pages/AdvancedValidationForm'
import BasicForm from '../Pages/BasicForm'
import BasicValidationForm from '../Pages/BasicValidationForm'

function FormsExample() {
  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Forms" />
      <div className="row align-item-center">
        <div className="col-md-12">
          <BasicForm />
          <BasicValidationForm />
          <AdvancedValidationForm />
        </div>
      </div>
    </div>
  )
}

export default FormsExample
