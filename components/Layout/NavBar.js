import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = ({ showMenu, setShowMenu }) => {
  const menuList = [
    { name: 'Stock Video', link: '#' },
    { name: 'Video Templates', link: '#' },
    { name: 'Music', link: '#' },
    { name: 'Sound Effects', link: '#' },
    { name: 'Graphic Templates', link: '#' },
    { name: 'Graphics', link: '#' },
    { name: 'Presentation Templates', link: '#' },
    { name: 'Music', link: '#' },
    { name: 'Sound Effects', link: '#' },
    { name: 'More', link: '#' },
  ]
  return (
    <>
      <nav className={`${showMenu ? '-translate-x-0' : '-translate-x-[100%]'} py-7 transition-all lg:shadow-md nav-section`}>
        <div className='custom-container mx-auto'>
          <ul className={` nav-list`}>
            <Image
              onClick={() => setShowMenu(!showMenu)}
              src='/image/cross-2.svg'
              height={30}
              width={30}
              className='ml-auto lg:hidden'
              alt=''
            />
            {menuList?.map((item, index) => <Link key={index} href={item.link}>
              <span className='text-textColor text-sm font-semibold hover:text-primary'>{item.name}</span>
            </Link>
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar