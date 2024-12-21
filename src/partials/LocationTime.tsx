import React, { useState, useEffect } from 'react'
import makeAPICall from '../utils/api'
import { Table, message, Modal, Input } from 'antd'

export default function LocationTime({ city }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const formattedTime = time.toLocaleTimeString('en-US', {
    timeZone: city.gmt,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  const [inputValues, setInputValues] = useState({
    punch: ''
  })

  function handleChangeInput(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value
    })
  }

  const handleOk = () => {
    //setModalLoading(true);
    //setIsModalOpen(true);
    const data = {
      punch: 'punch'
    }
    return makeAPICall({
      path: `/punch`,
      method: 'POST',
      payload: data
    })
      .then((res) => {
        // console.log(res);
        //modalLoading;
        //setModalLoading(false);
        //setIsModalOpen(false);
        //showInvestment();
        message.success(res.message)
      })
      .catch((err) => {
        //setModalLoading(false);
        //setIsModalOpen(false);
        // console.log(err);
        message.error(err.message, 5)
      })
  }

  return (
    <div className="city-zone">
      <form>
        <input
          name="punch"
          type="hidden"
          value={inputValues.punch}
          onChange={handleChangeInput}
          className="form-control form-control-lg"
          placeholder="name@example.com"
        />
      </form>

      <div className="font-weight-bold fs-5 px-3">
        {' '}
        <button
          className="btn btn-lg btn-block btn-light lift text-uppercase"
          type="button"
          onClick={handleOk}>
          {city.clock}
        </button>
        {formattedTime}
      </div>
    </div>
  )
}
