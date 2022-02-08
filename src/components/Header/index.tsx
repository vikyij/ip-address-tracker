import React from 'react'
import styles from './header.module.scss'
import RightArrowIcon from '../../assets/images/icon-arrow.svg'

const Header = () => {
  const {
    wrapper,
    headerWrapper,
    title,
    inputStyle,
    searchBtn,
    inputWrapper,
    addressDetails,
    col,
    addressTitle,
    addressSubTitle,
    verticalLine,
  } = styles

  return (
    <div className={wrapper}>
      <header className={headerWrapper}>
        <h1 className={title}>IP Address Tracker</h1>
        <div className={inputWrapper}>
          <input
            type='text'
            name='ipAddress'
            placeholder='Search for any IP address or domain'
            className={inputStyle}
          />
          <button className={searchBtn}>
            <img src={RightArrowIcon} alt='right-arrow-icon' />
          </button>
        </div>
      </header>
      <div className={addressDetails}>
        <div className={col}>
          <p className={addressTitle}>IP Address</p>
          <h3 className={addressSubTitle}>192.212.174.101</h3>
        </div>
        <div className={verticalLine}></div>
        <div className={col}>
          <p className={addressTitle}>Location</p>
          <h3 className={addressSubTitle}>Brooklyn, NY 10001</h3>
        </div>
        <div className={verticalLine}></div>
        <div className={col}>
          <p className={addressTitle}>Timezone</p>
          <h3 className={addressSubTitle}>UTC -05:00</h3>
        </div>
        <div className={verticalLine}></div>
        <div className={col}>
          <p className={addressTitle}>ISP</p>
          <h3 className={addressSubTitle}>SpaceXStarlink</h3>
        </div>
      </div>
    </div>
  )
}

export default Header
