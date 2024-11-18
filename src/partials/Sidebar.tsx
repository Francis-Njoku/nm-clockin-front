import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { menu, menu2 } from '../components/Data'
// @ts-expect-error abc
import NMLogo from '../assets/images/NMLogo.png'

export default function Sidebar({ activekey }) {
  const navigate = useNavigate()

  const [isSidebarMini, setIsSidebarMini] = useState(false)
  const [menuData, setMenuData] = useState(menu)
  const [darkLightMode, setDarkLightMode] = useState('light')
  const [updateRtl, setUpdateRtl] = useState(false)

  useEffect(() => {
    const htmlElement = document.documentElement
    if (htmlElement) {
      htmlElement.setAttribute('data-theme', 'light')
    }
  }, [])

  function openChildren(id: string) {
    const otherTabs = document.getElementsByClassName('has-children')
    if (otherTabs) {
      for (let i = 0; i < otherTabs.length; i++) {
        const tab = otherTabs[i]
        if (tab && tab.id !== id) {
          tab.className = tab.className.replace(' show', '')
          const parent = tab.parentElement
          if (parent && parent.children.length > 1) {
            const firstChild = parent.children[0]
            if (firstChild) {
              firstChild.setAttribute('aria-expanded', 'false')
            }
          }
        }
      }
    }
    const menutab = document.getElementById(id)
    if (menutab) {
      if (menutab.classList.contains('show')) {
        menutab.classList.remove('show')
        const parent = menutab.parentElement
        if (parent && parent.children.length > 1) {
          const firstChild = parent.children[0]
          if (firstChild) {
            firstChild.setAttribute('aria-expanded', 'false')
          }
        }
      } else {
        menutab.classList.add('show')
        const parent = menutab.parentElement
        if (parent && parent.children.length > 1) {
          const firstChild = parent.children[0]
          if (firstChild) {
            firstChild.setAttribute('aria-expanded', 'true')
          }
        }
      }
    }
  }

  function openChildren1(id: string) {
    const otherTabs = Array.from(document.getElementsByClassName('has-children'))
    otherTabs?.forEach((tab) => {
      if (tab) {
        tab.className = tab.className.replace(' show', '')
      }
    })

    const menutab = document.getElementById(id)
    if (menutab) {
      menutab.classList.add('show')
      const parent = menutab.parentElement
      if (parent && parent.children.length > 1) {
        const firstChild = parent.children[0]
        if (firstChild) {
          firstChild.setAttribute('aria-expanded', 'true')
        }
      }
    }
  }

  function closeChildren() {
    const otherTabs = document.getElementsByClassName('has-children')
    if (otherTabs) {
      for (let i = 0; i < otherTabs.length; i++) {
        const tab = otherTabs[i]
        if (tab) {
          tab.className = tab.className.replace(' show', '')
          const parent = tab.parentElement
          if (parent && parent.children.length > 1) {
            const firstChild = parent.children[0]
            if (firstChild) {
              firstChild.setAttribute('aria-expanded', 'false')
            }
          }
        }
      }
    }
  }

  function GotoChangeMenu(val) {
    if (val === 'UI Components') {
      //props.history.push("ui-alerts");
      navigate(`/ui-alerts`)
      setMenuData(menu2)
    } else {
      //props.history.push("hr-dashboard");
      navigate(`/hr-dashboard`)
      setMenuData(menu)
    }
  }

  function onChangeDarkMode() {
    const htmlElement = document.documentElement
    if (htmlElement.getAttribute('data-theme') === 'light') {
      htmlElement.setAttribute('data-theme', 'dark')
      setDarkLightMode('dark')
    } else {
      htmlElement.setAttribute('data-theme', 'light')
      setDarkLightMode('light')
    }
  }

  function onChangeRTLMode() {
    if (document.body.classList.contains('rtl_mode')) {
      document.body.classList.remove('rtl_mode')
    } else {
      document.body.classList.add('rtl_mode')
    }
    setUpdateRtl(!updateRtl)
  }

  return (
    <div
      id="mainSideMenu"
      className={`sidebar py-md-5 me-0 px-4 py-4 ${isSidebarMini ? 'sidebar-mini' : ''}`}>
      <div className="d-flex flex-column h-100">
        <a
          href="attendance-summary"
          className="brand-icon align-center mb-0 flex flex-col justify-center">
          <img src={NMLogo} alt="" width={200} />
          <span className="logo-text text-center">Employee Management</span>
        </a>
        <ul className="menu-list flex-grow-1 mt-3">
          {menuData.map((item, i) => {
            if (item.isToggled) {
              return (
                <li key={'shsdg' + i}>
                  <a
                    className={`m-link`}
                    href="#!"
                    onClick={(e) => {
                      e.preventDefault()
                      GotoChangeMenu(item.name)
                    }}>
                    <i className={item.iconClass}></i>
                    <span>{item.name}</span>
                  </a>
                </li>
              )
            }
            if (item.children.length === 0) {
              return (
                <li key={'dsfshsdg' + i} className="collapsed">
                  <Link
                    to={`` + '/' + item.routerLink[0]}
                    className={`m-link ${item.routerLink[0] === activekey ? 'active' : ''}`}>
                    <i className={item.iconClass}></i>
                    <span>{item.name}</span>
                    <span className="arrow icofont-dotted-down fs-5 ms-auto text-end"></span>
                  </Link>
                </li>
              )
            }
            return (
              <li key={'shsdg' + i} className="collapsed">
                <a
                  className={`m-link ${item.children.filter((d) => '/' + d.routerLink[0] === activekey).length > 0 ? 'active' : ''}`}
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault()
                    openChildren('menu-Pages' + i)
                  }}>
                  <i className={item.iconClass}></i>
                  <span>{item.name}</span>
                  <span className="arrow icofont-dotted-down fs-5 ms-auto text-end"></span>
                </a>
                {item.children.length > 0 ? (
                  <ul className="sub-menu has-children" id={'menu-Pages' + i}>
                    {item.children.map((data, ind) => {
                      if (item.children.length > 0) {
                        if (activekey === '/' + data.routerLink[0]) {
                          setTimeout(() => {
                            openChildren1('menu-Pages' + i)
                          }, 500)
                        }
                      }
                      return (
                        <li key={'jfdgj' + ind}>
                          <Link
                            className={`ms-link ${activekey === '/' + data.routerLink[0] ? 'active' : ''} `}
                            to={`` + '/' + data.routerLink[0]}>
                            <span>{data.name}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                ) : null}
              </li>
            )
          })}
        </ul>
        <ul className="list-unstyled mb-0">
          <li className="d-flex align-items-center justify-content-center">
            <div className="form-check form-switch theme-switch">
              <input
                className="form-check-input"
                type="checkbox"
                checked={darkLightMode === 'dark' ? true : false}
                id="theme-switch"
                onChange={() => {
                  onChangeDarkMode()
                }}
              />
              <label className="form-check-label" htmlFor="theme-switch">
                Enable Dark Mode!
              </label>
            </div>
          </li>
          <li className="d-flex align-items-center justify-content-center">
            <div className="form-check form-switch theme-rtl">
              <input
                className="form-check-input"
                type="checkbox"
                checked={document.body.classList.contains('rtl_mode')}
                id="theme-rtl"
                onChange={() => {
                  onChangeRTLMode()
                }}
              />
              <label className="form-check-label" htmlFor="theme-rtl">
                Enable RTL Mode!
              </label>
            </div>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-link sidebar-mini-btn text-light"
          onClick={() => {
            setIsSidebarMini(!isSidebarMini)
          }}>
          <span className="ms-2">
            <i className="icofont-bubble-right"></i>
          </span>
        </button>
      </div>
    </div>
  )
}

//export default Sidebar
