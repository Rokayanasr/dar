"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";

import logo from "./../../../public/logo.png";
import headerImgDesktop from "./../../../public/FEDEX-1074_wondersuite.avif";
import headerImgMobile from "./../../../public/2.avif";
import cloud from "./../../../public/cloud-banner.7890072e1b8a5f53d30f3776d850827c.svg";
import whyImg from "../../../public/why.png";
import {
    faRocket,
    faSackDollar,
    faPlaneDeparture,
    faBoltLightning,
    faUserGear,
    faBusinessTime,
    faMoneyBill,
    faServer,
    faShield,
    faDatabase,
    faCircleCheck,
    faFingerprint,
    faHardDrive,
    faCloud,
    faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import saudi from "./../../../public/saudi-riyal.svg";
import { Footer } from "./[footer]/footer";

export default function Home() {
    const t = useTranslations("HomePage");
    const [isOpen, setIsOpen] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    const router = useRouter();

    // Initialize lang and direction with default values
    const [lang, setLang] = useState("ar"); // default language
    const [direction, setDirection] = useState("rtl"); // default direction

    const domainservice = t.raw(`domainservice`);
    const packagekey = t.raw(`packagekey`);
    const packagedetail = t.raw(`packagedetail`);
    const featuredetail = t.raw(`featuredetail`);
    const whyusdetail = t.raw(`whyusdes`);
    const transferdetail = t.raw(`transferdesc`);
    const transferdetail2 = t.raw(`transferdesc2`);

    const packageIcon = [faSackDollar, faRocket, faBoltLightning, faBusinessTime];
    const featureIcon = [faCircleCheck, faFingerprint, faHardDrive, faCloud, faLaptopCode, faShield, faServer, faUserGear, faMoneyBill, faDatabase];

    const [expanded, setExpanded] = useState(Array(featuredetail.length).fill(false));

    const handleLanguageChange = (locale) => {
        router.push(`/${locale}`);
        setIsOpen(false);
        console.log(lang);
        console.log(direction);
        console.log(domainservice);
    };

    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar);
        console.log(openSidebar); // بيغير الحالة بين true و false
    };

    useEffect(() => {
        // This will run only in the browser
        const lang = document.documentElement.lang;
        const direction = document.documentElement.dir;
        setLang(lang);
        setDirection(direction);
    }, []);

    return (
        <>
            <nav className='bg-white'>
                <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6'>
                    <a className='flex items-center space-x-3 rtl:space-x-reverse'>
                        <Image className='w-24' alt='logo' src={logo} />
                    </a>
                    <button
                        data-collapse-toggle='navbar-default'
                        type='button'
                        onClick={toggleSidebar}
                        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
                        aria-controls='navbar-default'
                        aria-expanded='false'
                    >
                        <span className='sr-only'>Open main menu</span>
                        <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
                            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M1 1h15M1 7h15M1 13h15' />
                        </svg>
                    </button>
                    <div className={`${openSidebar ? "block" : "hidden"} w-full md:block md:w-auto bg-transparent`} id='navbar-default'>
                        <ul className='font-medium flex flex-col md:items-center items-start p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent '>
                            <li>
                                <a href='#' className='block capitalize py-2 px-3 text-white bg-blue-700 rounded-xl md:bg-blue md:text-white md:p-4' aria-current='page'>
                                    {t("home")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block capitalize py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '
                                >
                                    {t("packages")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block capitalize py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 '
                                >
                                    {t("features")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block capitalize py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'
                                >
                                    {t("aboutus")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block capitalize py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'
                                >
                                    {t("contactus")}
                                </a>
                            </li>
                        </ul>
                        <div className='relative md:hidden block'>
                            <button className='outline outline-[2px] rounded-xl outline-blue px-4 py-2' onClick={() => setIsOpen(!isOpen)}>
                                {t("chooselang")}
                            </button>
                            {isOpen && (
                                <div className='absolute right-0 mt-2 bg-white border rounded-lg shadow-lg'>
                                    <ul className='flex flex-col'>
                                        <li>
                                            <button className='block px-4 py-2 text-gray-900 hover:bg-gray-100' onClick={() => handleLanguageChange("en")}>
                                                English
                                            </button>
                                        </li>
                                        <li>
                                            <button className='block px-4 py-2 text-gray-900 hover:bg-gray-100' onClick={() => handleLanguageChange("ar")}>
                                                العربية
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='relative md:block hidden'>
                        <button className='outline outline-[2px] rounded-xl outline-blue px-4 py-2' onClick={() => setIsOpen(!isOpen)}>
                            {t("chooselang")}
                        </button>
                        {isOpen && (
                            <div className='absolute right-0 mt-2 bg-white border rounded-lg shadow-lg'>
                                <ul className='flex flex-col'>
                                    <li>
                                        <button className='block px-4 py-2 text-gray-900 hover:bg-gray-100' onClick={() => handleLanguageChange("en")}>
                                            English
                                        </button>
                                    </li>
                                    <li>
                                        <button className='block px-4 py-2 text-gray-900 hover:bg-gray-100' onClick={() => handleLanguageChange("ar")}>
                                            العربية
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

            <header className='bg-darkbg h-fit rounded-2xl'>
                <div className='flex flex-col items-center justify-between h-full gap-6 my-container w-full text-white'>
                    <div className='flex flex-col gap-6 items-center'>
                        <h1 className='md:text-3xl text-2xl text-center font-black md:w-[74%] uppercase'>{t("headertitle")}</h1>
                        <h2 className='md:text-2xl text-xl md:text-center text-justify tracking-wider capitalize '>{t("headerdesc")}</h2>
                    </div>

                    <div>
                        {/* For medium screens and above */}
                        <Image className='hidden md:block md:h-fit' alt='header' src={headerImgDesktop} />
                        {/* For mobile screens */}
                        <Image className='block md:hidden h-68' alt='header' src={headerImgMobile} />
                    </div>
                </div>
            </header>

            {/* DOMAIN */}
            <section>
                <div className='my-container text-darkblue flex flex-col gap-10'>
                    <div className='flex flex-col gap-4 items-center'>
                        <h2 className='md:text-3xl text-2xl text-center font-black uppercase'>{t("domaintitle")}</h2>
                        <h3 className='md:text-2xl text-xl md:text-center text-justify md:tracking-wide capitalize'>{t("domaindesc")}</h3>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <button className={`md:w-2/12 w-3/12 bg-blue text-white font-bold ${direction === "rtl" ? "rounded-r-lg" : "rounded-l-lg"}`}>{t("domainbtn")}</button>
                            <input
                                placeholder='yourdomain.com'
                                className={`border border-darkblue md:w-10/12 w-9/12 p-4 h-14 ${lang === "ar" ? "rounded-l-lg" : "rounded-r-lg"}`}
                                type='text'
                            />
                        </div>
                        <div className='flex justify-between md:px-4 py-5'>
                            {domainservice.map((domain, index) => (
                                <div key={index} className='flex gap-2 items-center justify-center'>
                                    <p className='text-yellow font-bold'>{domain}</p>
                                    <p className='text-darkblue font-semibold '>{t("domainprice")}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PACKAGES */}
            <section>
                <div className='my-container bg-gray rounded-xl flex flex-col items-center gap-8'>
                    {/* TEXT */}
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='flex gap-2 items-center justify-center'>
                            <h2 className='md:text-3xl text-2xl text-center font-black uppercase text-darkblue'>{t("packagetitle")}</h2>

                            <FontAwesomeIcon icon={faPlaneDeparture} size='2x' className='text-darkblue' />
                        </div>
                        <h3 className='md:text-2xl text-xl md:text-center text-justify md:tracking-wide capitalize text-darkblue'>{t("packagedesc")}</h3>
                    </div>

                    {/* CARDS */}
                    {/* EACH CARD */}
                    <div className='grid w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between'>
                        {packagedetail.map(
                            (
                                {
                                    title,
                                    price,
                                    currency,
                                    ram,
                                    hard_disk,
                                    traffic,
                                    processor,
                                    file_count,
                                    connections_count,
                                    emails_count,
                                    databases_count,
                                    ssl_certificate,
                                    ssh_access,
                                    support,
                                    button,
                                },
                                index
                            ) => (
                                <div key={index} className='flex flex-col gap-4  justify-center text-darkblue bg-white rounded-xl m-2 p-4 md:p-8'>
                                    <h3 className='text-2xl font-bold uppercase text-center text-darkblue flex gap-3 items-center justify-center'>
                                        {title}

                                        <FontAwesomeIcon icon={packageIcon[index]} size='lg' className='text-yellow' />
                                    </h3>
                                    <h2 className='text-blue text-center text-4xl font-black '>
                                        {price} {""}
                                        <span className='text-base text font-semibold '>{currency}</span>
                                    </h2>
                                    <div className='flex flex-col gap-2'>
                                        {[
                                            { key: packagekey.ram, value: ram },
                                            { key: packagekey.hard_disk, value: hard_disk },
                                            { key: packagekey.traffic, value: traffic },
                                            { key: packagekey.processor, value: processor },
                                            { key: packagekey.file_count, value: file_count },
                                            { key: packagekey.connections_count, value: connections_count },
                                            { key: packagekey.emails_count, value: emails_count },
                                            { key: packagekey.databases_count, value: databases_count },
                                            { key: packagekey.ssl_certificate, value: ssl_certificate },
                                            { key: packagekey.ssh_access, value: ssh_access },
                                            { key: packagekey.support, value: support },
                                        ].map(({ key, value }, index) => (
                                            <div key={index} className='flex justify-between items-center w-full text-darkblue'>
                                                <strong className='w-1/3 leading-5'>{key}:</strong>
                                                <span className='w-2/3 flex justify-end'>{value}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className='btn bg-blue hover:bg-darkbg text-white p-3 rounded-xl'>{button}</button>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className='mt-8'>
                <div className='my-container flex flex-col gap-8 bg-darkbg rounded-xl'>
                    <h2 className='text-3xl text-center font-black uppercase text-white'>{t("whyustitle")}</h2>
                    <div className='flex md:flex-row flex-col justify-center items-center w-full gap-8'>
                        <div className=' text-white text-justify flex flex-col sm:order-first order-last md:w-1/3 gap-4'>
                            {whyusdetail.map((detail, index) => {
                                return (
                                    <h4 className='flex gap-4' key={index}>
                                        <FontAwesomeIcon icon={faCircleCheck} />
                                        {detail}
                                    </h4>
                                );
                            })}
                        </div>
                        <div className='flex items-center md:justify-end md:w-2/3'>
                            <Image className='h-48  w-[90%] md:h-full' src={whyImg} alt='whyus' />
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section>
                <div className='my-container flex flex-col gap-8'>
                    <h2 className='text-3xl text-center font-black uppercase text-darkblue'>{t("featuretitle")}</h2>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-between items-start'>
                        {/* استخدام state لتخزين حالة كل كارت (بدءًا بقيم false) */}
                        {featuredetail.map((feature, index) => {
                            // دالة للتبديل بين النص الكامل والمقطوع لكل كارت على حدة
                            const toggleText = (idx) => {
                                const newExpanded = [...expanded];
                                newExpanded[idx] = !newExpanded[idx]; // تبديل حالة الكارت الحالي
                                setExpanded(newExpanded);
                            };

                            // قص النص لو كان أكبر من 100 حرف
                            const shortText = feature.desc.length > 95 ? feature.desc.substring(0, 95) + "..." : feature.desc;

                            return (
                                <div
                                    key={index}
                                    className={`flex flex-col gap-4 m-2 bg-gray p-8 rounded-xl text-darkblue items-center justify-between ${
                                        expanded[index] ? "h-fit" : "h-[370px]"
                                    }`}
                                >
                                    {index <= 9 ? (
                                        featureIcon[index] && <FontAwesomeIcon icon={featureIcon[index]} size='2xl' className='text-blue' />
                                    ) : index === 10 ? (
                                        <Image className='w-10' src={saudi} alt='saudi' />
                                    ) : index === 11 ? (
                                        <Image className='w-16' src={logo} alt='logo' />
                                    ) : null}

                                    <h3 className='text-2xl sm:text-base font-bold text-center'>{feature.title}</h3>

                                    {/* عرض النص المقطوع أو الكامل بناءً على حالة الزر */}
                                    <h3 className='text-justify'>{expanded[index] ? feature.desc : shortText}</h3>

                                    {/* زرار "See More" يظهر لو النص أكبر من 95 حرف */}
                                    {feature.desc.length > 95 && (
                                        <button onClick={() => toggleText(index)} className='text-blue font-bold'>
                                            {expanded[index] ? t("seeless") : t("seemore")}
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* TRANSFER */}
            <section className='bg-cloud bg-gray rounded-xl'>
                <div className='my-container flex flex-col gap-8  justify-center'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-3xl text-center font-black uppercase text-darkblue'>{t("transfertitle")}</h2>
                        <h3 className='text-2xl capitalize text-center text-darkblue'>{t("transfersubtitle")}</h3>
                    </div>
                    <div className='flex md:flex-row flex-col justify-between gap-8'>
                        <div className='flex flex-col items-start justify-center bg-white md:w-fit p-8 gap-8 rounded-xl'>
                            <h3 className='text-2xl text-center font-bold'>{transferdetail.title}</h3>
                            <div className='flex flex-col gap-2'>
                                {transferdetail.desc.map((desc, index) => {
                                    return (
                                        <p key={index} className='text-justify md:w-[300px]'>
                                            -{transferdetail.desc[index]}
                                        </p>
                                    );
                                })}
                            </div>

                            <button className='btn bg-blue p-3 hover:bg-darkbg text-white rounded-xl'>{transferdetail.btn}</button>
                        </div>
                        <div className='flex flex-col items-start justify-center bg-white md:w-fit p-8 gap-8 rounded-xl'>
                            <h3 className='text-2xl text-center font-bold'>{transferdetail2.title}</h3>
                            <div className='flex flex-col gap-2'>
                                {transferdetail2.desc.map((desc, index) => {
                                    return (
                                        <p key={index} className='text-justify md:w-[300px]'>
                                            -{transferdetail2.desc[index]}
                                        </p>
                                    );
                                })}
                            </div>{" "}
                            <button className='btn bg-blue p-3 hover:bg-darkbg text-white rounded-xl'>{transferdetail2.btn}</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* WORLDWIDE */}
            <section className=''>
                <div className='my-container '>
                    <div className=' wordlwide-bg  flex items-center justify-center'>
                        <div className='bg-white p-4 flex items-center justify-center flex-col gap-4 rounded-xl'>
                            <h2 className='text-3xl text-center font-black uppercase text-blue'>{t("worldtitle")}</h2>
                            <h3 className='text-2xl capitalize text-center text-darkblue'>{t("worldsubtitle")}</h3>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </>
    );
}
