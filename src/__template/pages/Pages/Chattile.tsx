import React, { useEffect, useState } from 'react'

import Avatar1 from 'global/assets/images/xs/avatar1.jpg'
import Avatar2 from 'global/assets/images/xs/avatar2.jpg'
import Avatar4 from 'global/assets/images/xs/avatar4.jpg'
import Avatar6 from 'global/assets/images/xs/avatar6.jpg'
import Avatar7 from 'global/assets/images/xs/avatar7.jpg'
import Avatar10 from 'global/assets/images/xs/avatar10.jpg'

import { Dropdown } from 'react-bootstrap'

function Chattile(props) {
  const { data } = props
  const [chatData, setChatData] = useState([...data])
  const [activeChatIndex, setActiveChatIndex] = useState(0)
  const [txtMessage, setTxtMessage] = useState('')

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('chatHistory').scrollTo({
        top: document.getElementById('chatHistory').scrollHeight + 100,
        behavior: 'smooth'
      })
    }, 10)
  }, [])

  const onChangeMessageText = (e) => {
    setTxtMessage(e)
  }

  const onMessgeSend = () => {
    if (txtMessage !== '') {
      var dd = chatData
      var d = new Date()
      var am_pm = 'AM'
      if (d.getHours() >= 12) {
        am_pm = 'PM'
      }
      dd[activeChatIndex].messages.push({
        message: txtMessage,
        type: 'send',
        images: [],
        time: `${d.getHours()}:${d.getMinutes()} ${am_pm}`
      })
      setChatData([...dd])
      setTxtMessage('')
      setTimeout(() => {
        document.getElementById('chatHistory').scrollTo({
          top: document.getElementById('chatHistory').scrollHeight + 100,
          behavior: 'smooth'
        })
      }, 10)

      setTimeout(() => {
        onBackMessage()
        document.getElementById('chatHistory').scrollTo({
          top: document.getElementById('chatHistory').scrollHeight + 100,
          behavior: 'smooth'
        })
      }, 1500)
    }
  }

  const onBackMessage = () => {
    var dd = chatData
    var d = new Date()
    var am_pm = 'AM'
    if (d.getHours() >= 12) {
      am_pm = 'PM'
    }
    dd[activeChatIndex].messages.push({
      message: 'Hey, I m Fine.',
      type: 'received',
      images: [],
      time: `${d.getHours()}:${d.getMinutes()} ${am_pm}`
    })

    setChatData([...dd])
  }

  const onDeleteMessage = (index) => {
    var dd = chatData
    dd[activeChatIndex].messages.splice(index, 1)

    setChatData([...dd])
  }

  function tabEvents(e, id) {
    e.preventDefault()
    document.getElementById('tab1').classList.remove('active')
    document.getElementById('tab2').classList.remove('active')
    document.getElementById('tab3').classList.remove('active')
    document.getElementById('tab' + id).classList.add('active')

    document.getElementById('tab-conatain1').classList.remove('active')
    document.getElementById('tab-conatain1').classList.add('show')
    document.getElementById('tab-conatain2').classList.remove('active')
    document.getElementById('tab-conatain2').classList.add('show')
    document.getElementById('tab-conatain3').classList.remove('active')
    document.getElementById('tab-conatain3').classList.add('show')
    document.getElementById('tab-conatain' + id).classList.add('active')
    document.getElementById('tab-conatain' + id).classList.add('show')
  }

  function onClickToggle(e) {
    e.preventDefault()
    var ele = document.getElementById('chatMenuList')
    if (ele) {
      if (ele.classList.contains('open')) {
        ele.classList.remove('open')
      } else {
        ele.classList.add('open')
      }
    }
  }

  return (
    <div className="col-12 d-flex">
      <div
        id="chatMenuList"
        className="card card-chat border-right border-top-0 border-bottom-0 order-0 w380">
        <div className="py-md-4 px-4 py-3">
          <div className="input-group mb-3">
            <input type="text" className="form-control mb-1" placeholder="Search..." />
          </div>

          <div className="nav nav-pills justify-content-between text-center" role="tablist">
            <a
              className="flex-fill nav-link active rounded border-0"
              data-bs-toggle="tab"
              id="tab1"
              href="#!"
              onClick={(e) => {
                e.preventDefault()
                tabEvents(e, 1)
              }}
              role="tab"
              aria-selected="true">
              Chat
            </a>
            <a
              className="flex-fill nav-link rounded border-0"
              data-bs-toggle="tab"
              id="tab2"
              href="#!"
              onClick={(e) => {
                e.preventDefault()
                tabEvents(e, 2)
              }}
              role="tab"
              aria-selected="false">
              Groups
            </a>
            <a
              className="flex-fill nav-link rounded border-0"
              data-bs-toggle="tab"
              id="tab3"
              href="#!"
              onClick={(e) => {
                e.preventDefault()
                tabEvents(e, 3)
              }}
              role="tab"
              aria-selected="false">
              Contact
            </a>
          </div>
        </div>
        <div className="tab-content border-top">
          <div className="tab-pane fade show active" id="tab-conatain1" role="tabpanel">
            <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
              {chatData.map((d, i) => {
                return (
                  <li
                    key={'545' + i}
                    className={`list-group-item px-md-4 py-md-4 py-3 ${activeChatIndex === i ? 'open' : ''}`}>
                    <a
                      href="#!"
                      className="d-flex"
                      onClick={(e) => {
                        e.preventDefault()
                        setActiveChatIndex(i)
                      }}>
                      <img className="avatar rounded-circle" src={d.image} alt="" />
                      <div className="flex-fill text-truncate ms-3">
                        <h6 className="d-flex justify-content-between mb-0">
                          <span>{d.Name}</span> <small className="msg-time">{d.lastSeen}</small>
                        </h6>
                        <span className="text-muted">
                          {d.messages.length > 0 ? d.messages[d.messages.length - 1].message : ''}
                        </span>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="tab-pane fade" id="tab-conatain2" role="tabpanel">
            <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
              <li className="list-group-item px-md-4 py-md-4 py-3">
                <a href="#!" className="d-flex">
                  <div className="avatar rounded-circle no-thumbnail">GI</div>
                  <div className="flex-fill text-truncate ms-3">
                    <h6 className="d-flex justify-content-between mb-0">
                      <span>Design UI</span> <small className="msg-time">9/10/2020</small>
                    </h6>
                    <span className="text-muted">The point of using Lorem Ipsum</span>
                  </div>
                </a>
              </li>
              <li className="list-group-item px-md-4 py-md-4 py-3">
                <a href="#!" className="d-flex">
                  <div className="avatar rounded-circle no-thumbnail">AD</div>
                  <div className="flex-fill text-truncate ms-3">
                    <h6 className="d-flex justify-content-between mb-0">
                      <span>Angular Dev Team</span> <small className="msg-time">22/8/2020</small>
                    </h6>
                    <span className="text-muted">If you are going to use a passage</span>
                  </div>
                </a>
              </li>
              <li className="list-group-item px-md-4 py-md-4 py-3">
                <a href="#!" className="d-flex">
                  <div className="avatar rounded-circle no-thumbnail">AT</div>
                  <div className="flex-fill text-truncate ms-3">
                    <h6 className="d-flex justify-content-between mb-0">
                      <span>Account Team</span> <small className="msg-time">11/7/2020</small>
                    </h6>
                    <span className="text-muted">The point of using Lorem Ipsum</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-pane fade" id="tab-conatain3" role="tabpanel">
            <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
              <li className="list-group-item px-md-4 py-md-4 py-3">
                <a href="#!" className="d-flex">
                  <img className="avatar rounded-circle" src={Avatar2} alt="" />
                  <div className="flex-fill text-truncate ms-3">
                    <div className="d-flex justify-content-between mb-0">
                      <h6 className="mb-0">Chris Fox</h6>
                      <div className="text-muted">
                        <i className="fa fa-heart ps-2"></i>
                        <i className="fa fa-trash ps-2"></i>
                      </div>
                    </div>
                    <span className="text-muted">chris.fox@mytask.com</span>
                  </div>
                </a>
              </li>
              <li className="list-group-item px-md-4 py-md-4 py-3">
                <a href="#!" className="d-flex">
                  <img className="avatar rounded-circle" src={Avatar1} alt="" />
                  <div className="flex-fill text-truncate ms-3">
                    <div className="d-flex justify-content-between mb-0">
                      <h6 className="mb-0">Barbara Kelly</h6>
                      <div className="text-muted">
                        <i className="fa fa-heart-o ps-2"></i>
                        <i className="fa fa-trash ps-2"></i>
                      </div>
                    </div>
                    <span className="text-muted">barbara.kelly@mytask.com</span>
                  </div>
                </a>
              </li>
              <li className="list-group-item px-md-4 py-md-4 py-3">
                <a href="#!" className="d-flex">
                  <img className="avatar rounded-circle" src={Avatar10} alt="" />
                  <div className="flex-fill text-truncate ms-3">
                    <div className="d-flex justify-content-between mb-0">
                      <h6 className="mb-0">Brian Swader</h6>
                      <div className="text-muted">
                        <i className="fa fa-heart-o ps-2"></i>
                        <i className="fa fa-trash ps-2"></i>
                      </div>
                    </div>
                    <span className="text-muted">brian.swader@mytask.com</span>
                  </div>
                </a>
              </li>
              <li className="list-group-item px-md-4 py-md-4 py-3">
                <a href="#!" className="d-flex">
                  <img className="avatar rounded-circle" src={Avatar7} alt="" />
                  <div className="flex-fill text-truncate ms-3">
                    <div className="d-flex justify-content-between mb-0">
                      <h6 className="mb-0">Richard Foos</h6>
                      <div className="text-muted">
                        <i className="fa fa-heart ps-2"></i>
                        <i className="fa fa-trash ps-2"></i>
                      </div>
                    </div>
                    <span className="text-muted">richard.foos@mytask.com</span>
                  </div>
                </a>
              </li>
              <li className="list-group-item px-md-4 py-md-4 py-3">
                <a href="#!" className="d-flex">
                  <img className="avatar rounded-circle" src={Avatar4} alt="" />
                  <div className="flex-fill text-truncate ms-3">
                    <div className="d-flex justify-content-between mb-0">
                      <h6 className="mb-0">Frank Camly</h6>
                      <div className="text-muted">
                        <i className="fa fa-heart-o ps-2"></i>
                        <i className="fa fa-trash ps-2"></i>
                      </div>
                    </div>
                    <span className="text-muted">frank.camly@mytask.com</span>
                  </div>
                </a>
              </li>
              <li className="list-group-item px-md-4 py-md-4 py-3">
                <a href="#!" className="d-flex">
                  <img className="avatar rounded-circle" src={Avatar6} alt="" />
                  <div className="flex-fill text-truncate ms-3">
                    <div className="d-flex justify-content-between mb-0">
                      <h6 className="mb-0">Brian Swader</h6>
                      <div className="text-muted">
                        <i className="fa fa-heart-o ps-2"></i>
                        <i className="fa fa-trash ps-2"></i>
                      </div>
                    </div>
                    <span className="text-muted">brianswader@mytask.com</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card card-chat-body w-100 px-md-5 py-md-4 order-1 border-0 px-4 py-3">
        <div className="chat-header d-flex justify-content-between align-items-center border-bottom pb-3">
          <div className="d-flex">
            <a href="hr-dashboard" title="Home">
              <i className="icofont-arrow-left fs-4"></i>
            </a>
            <a href="#!" title="">
              <img className="avatar rounded" src={chatData[activeChatIndex].image} alt="avatar" />
            </a>
            <div className="ms-3">
              <h6 className="mb-0">{chatData[activeChatIndex].Name}</h6>
              <small className="text-muted">Last seen: {chatData[activeChatIndex].lastSeen}</small>
            </div>
          </div>
          <div className="d-flex">
            <a className="nav-link d-none d-lg-block px-3 py-2 text-muted" href="#!">
              <i className="fa fa-camera"></i>
            </a>
            <a className="nav-link d-none d-lg-block px-3 py-2 text-muted" href="#!">
              <i className="fa fa-video-camera"></i>
            </a>
            <a className="nav-link d-none d-lg-block px-3 py-2 text-muted" href="#!">
              <i className="fa fa-gear"></i>
            </a>
            <a className="nav-link d-none d-lg-block px-3 py-2 text-muted" href="#!">
              <i className="fa fa-info-circle"></i>
            </a>
            <a
              className="nav-link d-block d-xl-none chatlist-toggle px-3 py-2"
              href="!#"
              onClick={(e) => onClickToggle(e)}>
              <i className="fa fa-bars"></i>
            </a>
            <div className="nav-item list-inline-item d-block d-xl-none">
              <Dropdown className="hide-toggle">
                <Dropdown.Toggle as="a" className="nav-link text-muted">
                  <i className="fa fa-ellipsis-v"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu border-0 shadow">
                  <li>
                    <a className="dropdown-item" href="!#">
                      <i className="fa fa-camera"></i> Share Images
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="!#">
                      <i className="fa fa-video-camera"></i> Video Call
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="!#">
                      <i className="fa fa-gear"></i> Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="!#">
                      <i className="fa fa-info-circle"></i> Info
                    </a>
                  </li>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <ul
          id="chatHistory"
          className="chat-history list-unstyled py-lg-5 py-md-4 flex-grow-1 mb-0 py-3">
          {chatData[activeChatIndex].messages.map((data, i) => {
            return (
              <li
                key={'messages' + i}
                className={
                  data.type === 'received'
                    ? 'd-flex align-items-end mb-3 flex-row'
                    : 'd-flex align-items-end mb-3 flex-row-reverse'
                }>
                <div className={`max-width-70 ${data.type === 'received' ? '' : 'text-end'}`}>
                  <div className="user-info mb-1">
                    {data.type === 'received' ? (
                      <img
                        className="avatar sm rounded-circle me-1"
                        src={chatData[activeChatIndex].image}
                        alt="avatar"
                      />
                    ) : null}
                    <span className="small text-muted">{data.time}</span>
                  </div>
                  <div
                    className={`card border-0 p-3 ${data.type === 'received' ? '' : 'color-bg-100 text-light'}`}>
                    <div className="message">
                      {data.message}
                      <p className="mb-0">
                        {data.images.map((d, i) => {
                          return (
                            <img key={'images' + i} className="w120 img-thumbnail" src={d} alt="" />
                          )
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="btn-group">
                  <Dropdown className="hide-toggle">
                    <Dropdown.Toggle
                      as="a"
                      variant=""
                      id=""
                      className="nav-link px-3 py-2 text-muted">
                      <i className="fa fa-ellipsis-v"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu as="ul" className="border-0 shadow">
                      <li>
                        <a className="dropdown-item" href="#!">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          Share
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#!"
                          onClick={(e) => {
                            e.preventDefault()
                            onDeleteMessage(i)
                          }}>
                          Delete
                        </a>
                      </li>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </li>
            )
          })}
        </ul>
        <div className="chat-message">
          <textarea
            type="text"
            className="form-control"
            value={txtMessage}
            placeholder="Enter text here..."
            onChange={(e) => {
              onChangeMessageText(e.target.value)
            }}></textarea>
          <button className="btn btn-dark" type="button" onClick={onMessgeSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chattile
