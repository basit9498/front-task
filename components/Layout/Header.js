import Image from 'next/image'
import React from 'react'
import Button from '../common/Button'

const Header = ({ showMenu, setShowMenu }) => {
  return (
    <>
      <header className='header-section custom-container mx-auto '>
        <div className='logo'>
          <span>
            <Image
              alt='logo'
              src='/image/setting.svg'
              height={35}
              width={35}
            />
          </span>
          <h1>Zin Tools</h1>
        </div>
        <Image
          onClick={() => setShowMenu(!showMenu)}
          src={'/image/bars.svg'}
          className='lg:hidden'
          width={30}
          height={30}
          alt=''
        />
        <div className='header-search relative hidden lg:block'>
          <Image
            className='absolute right-3 top-3'
            role='button'
            src={'/image/search.svg'}
            height={25}
            width={25}
            alt=''

          />
          <input type='text' placeholder='Search' className='h-11' />
        </div>
        <div className='flex-1 hidden lg:flex justify-end items-center gap-x-3'>
          <Button
            text='Login' />
          <Button
            className='bg-primary text-white'
            text='Sign up' />
        </div>
      </header>
    </>
  )
}

export default Header