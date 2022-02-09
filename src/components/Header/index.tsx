import styles from './header.module.scss'
import RightArrowIcon from '../../assets/images/icon-arrow.svg'
import React from 'react'

interface HeaderProps {
  ip: string | undefined
  isp: string | undefined
  country: string | undefined
  region: string | undefined
  timezone: string | undefined
  handleSearch: (value: string) => void
  getIPInformation: () => void
}

const Header: React.FC<HeaderProps> = ({
  ip,
  isp,
  country,
  region,
  timezone,
  handleSearch,
  getIPInformation,
}) => {
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
    hideMobile,
  } = styles

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value
    handleSearch(value)
  }

  const handleClick = () => {
    getIPInformation()
  }

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
            onChange={handleChange}
          />
          <button className={searchBtn} onClick={handleClick}>
            <img src={RightArrowIcon} alt='right-arrow-icon' />
          </button>
        </div>
      </header>
      <div className={addressDetails}>
        <div className={col}>
          <p className={addressTitle}>IP Address</p>
          <h3 className={addressSubTitle}>{ip}</h3>
        </div>
        <div className={`${verticalLine} ${hideMobile}`}></div>
        <div className={col}>
          <p className={addressTitle}>Location</p>
          <h3 className={addressSubTitle}>{`${country}, ${region}`}</h3>
        </div>
        <div className={`${verticalLine} ${hideMobile}`}></div>
        <div className={col}>
          <p className={addressTitle}>Timezone</p>
          <h3 className={addressSubTitle}>{timezone}</h3>
        </div>
        <div className={`${verticalLine} ${hideMobile}`}></div>
        <div className={col}>
          <p className={addressTitle}>ISP</p>
          <h3 className={addressSubTitle}>{isp}</h3>
        </div>
      </div>
    </div>
  )
}

export default Header
