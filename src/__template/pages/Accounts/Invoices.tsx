import React from 'react'

import { InvoiceData } from 'global/data/DashboardData'

import { Tab } from 'react-bootstrap'

import EmailInvoice from 'global/__template/components/Invoices/EmailInvoice'
import InvoiceList from 'global/__template/components/Invoices/InvoiceList'
import SampleInvoice from 'global/__template/components/Invoices/SampleInvoice'

import PageHeader from 'global/components/__Library/PageHeader'

function Invoices() {
  return (
    <div className="container-xxl">
      <Tab.Container id="left-tabs-example" defaultActiveKey="Invoice List">
        <div className="row clearfix g-3">
          <PageHeader headerTitle="Invoice" isTabShow={true} />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12">
            <Tab.Content>
              <Tab.Pane eventKey="Invoice List">
                <InvoiceList data={InvoiceData} />
              </Tab.Pane>
              <Tab.Pane eventKey="Simple invoice">
                <SampleInvoice />
              </Tab.Pane>
              <Tab.Pane eventKey="Email invoice">
                <EmailInvoice />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  )
}

export default Invoices
