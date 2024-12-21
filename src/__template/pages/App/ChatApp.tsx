import React from 'react'

import { chatAppData } from 'global/data/AppData'

import Chattile from '../Pages/Chattile'

function ChatApp() {
  return (
    <div className="container-xxl">
      <div className="row clearfix g-3">
        <Chattile data={chatAppData} />
      </div>
    </div>
  )
}

export default ChatApp
