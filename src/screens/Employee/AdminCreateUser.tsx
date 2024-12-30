import React, { useEffect, useState } from 'react'

//import AdvancedValidationForm from "../../components/Pages/AdvancedValidationForm";
//import BasicForm from "../../components/Pages/BasicForm";
//import BasicValidationForm from "../../components/Pages/BasicValidationForm";
import AddEmployee from '../../__template/pages/Pages/AddEmployee'

import PageHeader from 'global/components/__Library/PageHeader'

export default function AdminCreateUser() {
  return (
    <div className="container-xxl">
      <PageHeader headerTitle="Forms" />
      <div className="row align-item-center">
        <div className="col-md-12">
          <AddEmployee />
        </div>
      </div>
    </div>
  )
}
