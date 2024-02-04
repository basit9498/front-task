import Image from 'next/image'
import React from 'react'
import FooterLinks from '../FooterLinks'
import Link from 'next/link'

const Footer = () => {

    const soicalIcon = ['/image/facebook.svg', '/image/twitter.svg', '/image/youtube.svg']
    const footer_links = [
        {
            title: 'Internal Links',
            links: [
                { name: 'Documentaries', path: '#' },
                { name: ' Themes', path: '#' },
                { name: ' Chrome casts', path: '#' },
            ]
        },
        {
            title: 'Enterprise',
            links: [
                { name: 'Download Chrome Browser', path: '#' },
                { name: 'Chrome Browser for Enterprise', path: '#' },
                { name: 'Chrome Browser Devices', path: '#' },
                { name: 'ChromeOS', path: '#' },
                { name: 'Google Cloud', path: '#' },
                { name: 'Google Workspace', path: '#' },
            ]
        },
        {
            title: 'Internal Links',
            links: [
                { name: 'Documentaries', path: '#' },
                { name: ' Themes', path: '#' },
                { name: ' Chrome casts', path: '#' },
            ]
        },
        {
            title: 'Enterprise',
            links: [
                { name: 'Download Chrome Browser', path: '#' },
                { name: 'Chrome Browser for Enterprise', path: '#' },
                { name: 'Chrome Browser Devices', path: '#' },
                { name: 'ChromeOS', path: '#' },
                { name: 'Google Cloud', path: '#' },
                { name: 'Google Workspace', path: '#' },
            ]
        },
    ]
    const footer_menu = [
        { name: 'Privacy Policy', path: '#' },
        { name: 'Terms and conditions', path: '#' },
        { name: 'Cookies Policy', path: '#' },
        { name: 'About us', path: '#' },
        { name: 'EULA', path: '#' },
        { name: 'Contact', path: '#' },

    ]
    return (
        <>
            <footer className='bg-bg '>
                <section className='custom-container mx-auto'>
                    <div className='flex items-center gap-x-3 border-b py-8'>
                        <h3 className='text-textColor text-sm font-semibold'>Follow us:</h3>
                        <div className='flex items-center gap-x-2'>
                            {soicalIcon?.map((item, index) => <Image
                                key={index}
                                src={item}
                                height={30}
                                width={30}
                                alt=''
                            />
                            )}
                        </div>
                    </div>
                    <section className='grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 py-10'>
                        {footer_links?.map((item, index) => <FooterLinks key={index} title={item?.title} links={item?.links} />)}
                    </section>
                    <section className='border-t py-8 gap-y-4 flex-col lg:flex-row flex lg:justify-between lg:items-center'>
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
                        <ul className='flex flex-col lg:flex-row lg:items-center gap-x-3'>
                            {footer_menu?.map((item, index) => <Link key={index} href={item?.path}>
                                <span className='text-sm text-textColor '>{item?.name}</span>
                            </Link>)}
                        </ul>
                    </section>
                </section>
            </footer>
        </>
    )
}

export default Footer