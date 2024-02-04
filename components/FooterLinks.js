import Link from 'next/link'
import React from 'react'

const FooterLinks = ({ title, links = [] }) => {
    return (
        <>
            <div>
                <h3 className='text-textColor text-base font-semibold'>{title}</h3>
                <ul className='flex flex-col gap-y-1 mt-3'>
                    {links?.map((item, index) => <Link key={index} href={item?.path}>
                        <span className='text-sm text-textColor '>{item?.name}</span>
                    </Link>
                    )}
                </ul>
            </div>
        </>
    )
}

export default FooterLinks