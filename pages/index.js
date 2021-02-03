{/*<Head>*/
}
{/*  <title>Create Next App</title>*/
}
{/*  <link rel="icon" href="/favicon.ico" />*/
}
{/*</Head>*/
}

import Image from "next/image";

function Hero() {
    return <section>
        <div className="container mx-auto flex flex-col align-bottom items-center justify-center h-screen">

            <h1 className="text-3xl lg:text-5xl font-bold md:w-1/2 text-center">Simpler social media tools for
                authentic engagement</h1>

            <p className="mt-10 lg:w-1/3 text-center">Tell your brand’s story and grow your audience with a
                publishing, analytics, and engagement platform you can trust.</p>

            <a href="#"
               className="shadow-lg hover:shadow-xl mt-10 bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 px-12 py-4 text-white rounded-md">
                Get started now
            </a>

            <div className="space-x-10 text-sm mt-4 font-light text-gray-600 flex">
                    <span className="flex space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             width={12}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>No credit card</span>
                    </span>

                <span className="flex space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             width={12}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>14 day free trial</span>
                    </span>

                <span className="flex space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             width={12}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                        </svg>
                        <span>Cancel anytime</span>
                    </span>
            </div>
        </div>
    </section>;
}

function TrustSection() {
    return <section className="bg-gray-200">
        <div className="container mx-auto py-20">
            <h2 className="text-center font-bold text-2xl">More than 75,000+ companies trust Buffer</h2>

            <div className="flex space-x-10 justify-between mt-10 xl:px-40">
                {Array.from(Array(6).keys()).map(i =>
                    <svg key={i} height="{30}" viewBox="0 0 152 44" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         space="preserve" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round"
                         strokeMiterlimit="1.41421">
                        <g fill="#B8B8B8" fillRule="nonzero">
                            <path id="s_5_"
                                  d="M53.029 24.522c-1.286-.71-1.962-1.286-1.962-2.098 0-1.049.913-1.692 2.369-1.692 1.692 0 3.181.711 3.181.711l1.184-3.621s-1.083-.846-4.298-.846c-4.467 0-7.58 2.572-7.58 6.159 0 2.03 1.455 3.587 3.384 4.704 1.557.88 2.098 1.523 2.098 2.436 0 .982-.778 1.76-2.233 1.76-2.166 0-4.197-1.117-4.197-1.117l-1.252 3.621s1.895 1.252 5.042 1.252c4.603 0 7.885-2.267 7.885-6.328.068-2.233-1.624-3.79-3.621-4.941z"/>
                            <path id="h_5_"
                                  d="M71.371 16.908c-2.267 0-4.027 1.083-5.414 2.707l-.068-.034 1.963-10.287h-5.144l-4.975 26.159h5.11l1.692-8.934c.677-3.384 2.403-5.449 4.028-5.449 1.15 0 1.59.779 1.59 1.895 0 .711-.068 1.557-.237 2.268l-1.929 10.254h5.11l1.997-10.559c.237-1.116.372-2.436.372-3.35.068-2.944-1.421-4.67-4.095-4.67z"/>
                            <path id="o_5_"
                                  d="M87.108 16.908c-6.159 0-10.254 5.55-10.254 11.743 0 3.959 2.436 7.174 7.039 7.174 6.057 0 10.118-5.414 10.118-11.743.034-3.688-2.098-7.174-6.903-7.174zm-2.505 14.958c-1.759 0-2.47-1.489-2.47-3.351 0-2.944 1.523-7.715 4.298-7.715 1.827 0 2.403 1.556 2.403 3.079 0 3.181-1.523 7.987-4.231 7.987z"/>
                            <path id="p_5_"
                                  d="M107.142 16.908c-3.452 0-5.415 3.046-5.415 3.046h-.068l.305-2.742h-4.535c-.237 1.862-.643 4.671-1.049 6.803l-3.553 18.68h5.11l1.421-7.58h.102s1.049.676 3.012.676c6.023 0 9.949-6.159 9.949-12.386 0-3.418-1.523-6.497-5.279-6.497zm-4.873 15.059c-1.32 0-2.099-.744-2.099-.744l.846-4.772c.61-3.181 2.268-5.313 4.028-5.313 1.556 0 2.03 1.455 2.03 2.809 0 3.283-1.963 8.02-4.805 8.02z"/>
                            <path id="dot_5_"
                                  d="M119.731 9.564c-1.625 0-2.945 1.286-2.945 2.978 0 1.523.948 2.572 2.403 2.572h.068c1.59 0 2.978-1.083 3.012-2.978.034-1.523-.982-2.572-2.538-2.572z"/>
                            <path id="i_5_" d="M112.556 35.453h5.144l3.486-18.139h-5.178l-3.452 18.139z"/>
                            <path id="f_5_"
                                  d="M134.181 17.28h-3.553l.169-.846c.304-1.76 1.32-3.316 3.046-3.316.913 0 1.624.27 1.624.27l1.015-3.993s-.88-.44-2.775-.44c-1.827 0-3.621.508-5.008 1.692-1.76 1.489-2.572 3.621-2.978 5.787l-.136.846h-2.369l-.744 3.858h2.369l-2.708 14.315h5.11l2.708-14.315h3.519l.711-3.858z"/>
                            <path id="y_5_"
                                  d="M146.499 17.314s-3.215 8.054-4.636 12.454h-.068c-.101-1.422-1.252-12.454-1.252-12.454h-5.381l3.08 16.65c.068.372.034.609-.102.846-.609 1.151-1.59 2.267-2.775 3.08-.947.71-2.03 1.15-2.876 1.455l1.421 4.331c1.049-.237 3.181-1.083 5.009-2.775 2.335-2.199 4.501-5.55 6.7-10.152l6.261-13.435h-5.381z"/>
                            <path
                                d="M26.092 5.537s-.474.136-1.252.372a10.02 10.02 0 0 0-.61-1.489c-.879-1.692-2.199-2.605-3.756-2.605-.101 0-.203 0-.338.034-.034-.068-.102-.102-.136-.17C19.323.935 18.444.596 17.394.63c-2.03.068-4.06 1.523-5.685 4.129-1.15 1.827-2.03 4.129-2.267 5.922-2.335.711-3.96 1.218-3.993 1.252-1.185.372-1.219.406-1.354 1.523-.102.846-3.215 24.67-3.215 24.67l25.584 4.434V5.503c-.203 0-.305.034-.372.034zm-5.923 1.828c-1.353.406-2.842.88-4.297 1.319.406-1.59 1.218-3.181 2.165-4.23.373-.372.88-.812 1.456-1.083.575 1.219.71 2.877.676 3.994zm-2.775-5.347c.474 0 .88.101 1.219.304-.542.271-1.083.711-1.591 1.219-1.286 1.387-2.267 3.553-2.673 5.617-1.219.372-2.437.745-3.554 1.083.745-3.249 3.486-8.156 6.599-8.223zM13.469 20.63c.135 2.166 5.854 2.64 6.193 7.75.237 4.027-2.132 6.768-5.55 6.971-4.129.271-6.396-2.165-6.396-2.165l.88-3.723s2.267 1.726 4.095 1.591c1.184-.068 1.624-1.05 1.59-1.726-.169-2.843-4.839-2.674-5.144-7.344-.271-3.925 2.301-7.885 7.987-8.257 2.199-.136 3.316.406 3.316.406l-1.286 4.873s-1.455-.677-3.181-.541c-2.504.169-2.538 1.759-2.504 2.165zm8.054-13.671c0-1.016-.135-2.471-.609-3.689 1.557.304 2.301 2.03 2.64 3.079-.61.17-1.286.373-2.031.61zM27.242 42.492l10.626-2.64S33.3 8.955 33.266 8.752a.394.394 0 0 0-.372-.338c-.169 0-3.147-.068-3.147-.068s-1.828-1.76-2.505-2.437v36.583z"/>
                        </g>
                    </svg>
                )}
            </div>
        </div>
    </section>;
}

function FeaturesSection() {
    return <section>
        <div className="container mx-auto py-20">
            <h2 className="font-bold text-3xl lg:w-1/3 mx-auto text-center">Social media tools built with your small
                business in mind</h2>


            <div className="flex space-x-8 lg:w-1/2 mx-auto mt-10">

                <article className="bg-gray-100 relative p-6 pt-20 flex flex-col">
                    <div className="bg-white absolute left-6 -top-6 p-4 shadow-2xl">
                        <svg width={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M13.0341 14.1021L20.8357 21.9238V32.8416L2.07935 14.1021H13.0341Z"
                                  fill="#132062"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M33.3402 28.0072V1.60889H6.94531L33.3402 28.0072Z" fill="#6B81FF"/>
                        </svg>
                    </div>

                    <h3 className="text-lg font-bold mb-10">Publish your content</h3>

                    <div className="pb-10">
                        <p>Queue up thumb-stopping content across your social channels, and enjoy up-to-date
                            Instagram tools.</p>
                    </div>


                    <div className="block">
                        <a href="#"
                           className="bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 block text-center py-4 text-white rounded-md">
                            Get started
                        </a>
                    </div>

                </article>

                <article className="bg-gray-100 relative p-6 pt-20 flex flex-col">
                    <div className="bg-white absolute left-6 -top-6 p-4 shadow-2xl">
                        <svg width={35} viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M13.0341 14.1021L20.8357 21.9238V32.8416L2.07935 14.1021H13.0341Z"
                                  fill="#132062"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M33.3402 28.0072V1.60889H6.94531L33.3402 28.0072Z" fill="#6B81FF"/>
                        </svg>
                    </div>

                    <h3 className="text-lg font-bold mb-10">Publish your content</h3>

                    <div className="pb-10">
                        <p>Queue up thumb-stopping content across your social channels, and enjoy up-to-date
                            Instagram tools.</p>
                    </div>


                    <div className="block">
                        <a href="#"
                           className="bg-blue-700 hover:bg-blue-800 transition-all ease-in-out duration-200 block text-center py-4 text-white rounded-md">
                            Get started
                        </a>
                    </div>

                </article>

            </div>
        </div>
    </section>;
}

function Testimonial() {
    return <section className="bg-blue-600">
        <div className="container mx-auto py-20 flex">
            <div className="xl:w-2/3 flex mx-auto items-center">
                <div className="flex-1 pr-8">
                    <Image
                        src="/img/huckberry.png"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="flex-1 pl-8">

                    <svg className="pb-8" width={48} viewBox="0 0 267 212" xmlns="http://www.w3.org/2000/svg"
                         fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
                        <path
                            d="M16.408 211.16C5.46 179.879-.014 148.872-.014 118.1c0-35.464 9.384-64.008 28.152-85.63C46.907 10.846 74.278.015 110.25.015v49.267c-27.644 0-41.447 17.712-41.447 53.177v11.73h50.049v96.97H16.408zm147.8 0c-10.44-31.79-15.64-62.835-15.64-93.06 0-35.464 9.267-64.008 27.762-85.63C194.825 10.846 222.078.015 258.05.015v49.267c-27.096 0-40.664 17.712-40.664 53.177v11.73h49.267v96.97H164.209z"
                            fill="#ffffff" fillRule="nonzero"/>
                    </svg>

                    <h2 className="text-white text-3xl font-bold ">Buffer has made sharing our story and building
                        our brand on social media so much easier.</h2>

                    <svg className="mt-8" viewBox="0 0 98 16" height={22} xmlns="http://www.w3.org/2000/svg">
                        <g fill="#ffffff" fillRule="evenodd">
                            <path
                                d="M18.159.966a8.36 8.36 0 0 1 .444 2.706v1.865h-4.668V.687h-3.761l.1.281c.297.874.444 1.799.444 2.721v9.386h3.217V8.21h4.668v4.866h3.217V.688h-3.761l.1.278zM37.245 5.09c.991 0 1.47.545 1.616 1.799l2.853-.166c-.149-1.137-.395-1.716-1.071-2.458-.857-.924-2.014-1.403-3.515-1.403-3.067 0-5.13 2.111-5.13 5.262 0 3.085 1.98 5.13 4.967 5.13 1.681 0 2.985-.561 3.86-1.699.528-.644.742-1.171.874-2.243l-2.853-.165c-.18 1.171-.742 1.715-1.698 1.715-1.22 0-1.716-.825-1.716-2.838-.002-1.994.56-2.934 1.813-2.934zM28.32 8.702c0 .527.05 1.204-.28 1.65a1.751 1.751 0 0 1-1.352.676c-.776 0-1.122-.412-1.122-1.286V3.077h-2.87v6.665c0 1.403.131 1.896.56 2.506.513.725 1.436.957 2.26 1.006 1.09.083 2.458-.132 3.12-1.123.1.396.231.874.246.94h2.36V3.075l-2.953.017.032 5.61zM52.322 3.077h-2.984s-3.761 4.354-3.959 4.586V.685h-3.431l.1.298a8.36 8.36 0 0 1 .444 2.706v9.403h2.87V10.52l1.782-1.98 2.16 4.537h3.382L49.304 6.48l3.018-3.402zM77.132 4.959V3.077h-2.804v9.996h2.97V8.998c0-2.08.857-3.185 3.019-3.185V2.86c-1.255.004-2.756.68-3.185 2.099zM84.043 4.959V3.077H81.24v9.996h2.97V8.998c0-2.08.857-3.185 3.019-3.185V2.86c-1.254.004-2.738.68-3.185 2.099zM94.85 3.077l-1.914 5.674-1.896-5.674H87.92l3.597 9.996-.925 2.853h2.392c.28-.808 3.893-11.514 4.354-12.866h-2.492v.017h.002z"/>
                            <path
                                d="M59.168 2.896c-1.089 0-1.896.413-2.558 1.452V.685h-3.597l.1.298c.298.874.445 1.782.445 2.69v9.402h2.425c0-.017.15-.544.264-.973.71.89 1.403 1.171 2.59 1.171 2.623 0 4.172-1.947 4.172-5.247.02-3.15-1.466-5.13-3.841-5.13zm.742 5.757c-.034.479-.115 1.057-.313 1.55-.246.593-.676 1.04-1.418 1.04-.973 0-1.583-.791-1.583-2.111v-1.65c0-1.435.61-2.343 1.615-2.343 1.748-.015 1.782 2.277 1.699 3.514zM73.6 8.587c-.016-1.764-.23-2.589-.841-3.58-.776-1.303-2.326-2.11-4.058-2.11-2.97 0-4.998 2.16-4.998 5.278 0 3.05 2.045 5.098 5.112 5.098 1.518 0 2.624-.43 3.532-1.352.512-.527.79-.974 1.088-1.816l-2.755-.18c-.264.825-.857 1.269-1.765 1.269-1.203 0-1.996-.857-1.996-2.145 0-.083 0-.298.017-.462h6.665zM68.853 4.81c1.105 0 1.615.61 1.75 2.045h-3.664c.147-1.384.76-2.045 1.914-2.045z"
                                fillRule="nonzero"/>
                            <path
                                d="M6.167 5.073l-.264-.33.346.233c.776.495 1.55.94 2.31 1.32a7.735 7.735 0 0 0 .297-1.633C6.464 2.569 5.226.622 4.897.06 4.567.622 3.347 2.567.94 4.663c.049.544.149 1.088.298 1.633a25.06 25.06 0 0 0 2.308-1.32l.347-.232-.264.33A23.009 23.009 0 0 1 .395 8.306c.017.578.1 1.154.246 1.715 1.418-.527 2.673-1.137 4.24-1.979L3.527 9.66v.115c0 1.122-.18 2.243-.544 3.3h3.81a10.226 10.226 0 0 1-.545-3.3V8.768c.808.413 1.65.791 2.87 1.27a9.902 9.902 0 0 0 .247-1.716 24.398 24.398 0 0 1-3.2-3.249z"/>
                        </g>
                    </svg>
                    <div className="text-white font-light text-sm"><strong>Testimonial name</strong>, company name
                    </div>
                </div>
            </div>
        </div>
    </section>;
}

function Panyc() {

    const data = [
        {
            title: 'PUBLISH',
            titleExtraClass: 'text-blue-600',
            mainTitle: 'Visually plan and schedule your social media campaigns',
            mainTitleExtraClass: 'text-gray-800',
            description: 'Coordinate creative campaigns to drive engagement on social.',
            linkExtraClass: 'text-blue-600',
            image: '/img/features_1.jpg'
        },
        {
            title: 'PUBLISH',
            titleExtraClass: 'text-red-600',
            mainTitle: 'Visually plan and schedule your social media campaigns',
            mainTitleExtraClass: 'text-gray-800',
            description: 'Coordinate creative campaigns to drive engagement on social.',
            linkExtraClass: 'text-red-600',
            image: '/img/features_2.jpg'
        },
        {
            title: 'PUBLISH',
            titleExtraClass: 'text-green-600',
            mainTitle: 'Visually plan and schedule your social media campaigns',
            mainTitleExtraClass: 'text-gray-800',
            description: 'Coordinate creative campaigns to drive engagement on social.',
            linkExtraClass: 'text-green-600',
            image: '/img/features_3.jpg'
        }
    ]

    return <section>

        <div className="container mx-auto px-4 md:p-0">
            {data.map((item, index) => {

                const isEven = index % 2 === 0

                return <div key={index} className="md:grid md:grid-cols-2 xl:px-10 md:gap-x-4 md:mb-10 items-center">
                    <div className={`py-20 ${isEven ? 'xl:pr-40 order-1' : 'xl:pl-40 order-2'}`} >
                        <div>
                            <span className={`${item.titleExtraClass} text-xs font-bold`}>{item.title}</span>
                        </div>

                        <h3 className={`${item.mainTitleExtraClass} mb-4 font-bold text-4xl`}>{item.mainTitle}</h3>

                        <p>{item.description}</p>
                        <p>{isEven.toString()}</p>

                        <div className="mt-8 hover:text-blue-800 font-bold">
                            <a className={`${item.linkExtraClass} mt-8 flex items-center`} href="#"><span
                                className="pr-2">Learn more</span>
                                <svg width="30" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className={`relative ${isEven ? 'order-2' : 'order-1'}`}>


                        <img src={item.image} />
                        {/*<Image src={item.image}  objectFit={"contain"} layout="fill" />*/}

                    </div>
                </div>
            })}
        </div>
    </section>

}

export default function Home() {
    return <div className="page">

        <Hero />

        <TrustSection />

        <FeaturesSection />

        <Testimonial />

        <Panyc />


        {/*<div className="container flex mx-auto flex-nowrap">*/}
        {/*    <div className="bg-red-200 w-1/2 ">*/}
        {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ex fuga ipsum iste magni nihil officiis quas quod sint voluptatibus! Alias aut autem deleniti, pariatur quis sunt veniam. Consequatur, nam?</p>*/}
        {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ex fuga ipsum iste magni nihil officiis quas quod sint voluptatibus! Alias aut autem deleniti, pariatur quis sunt veniam. Consequatur, nam?</p>*/}
        {/*        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ex fuga ipsum iste magni nihil officiis quas quod sint voluptatibus! Alias aut autem deleniti, pariatur quis sunt veniam. Consequatur, nam?</p>*/}
        {/*    </div>*/}
        {/*    <div className="bg-yellow-200 w-1/2 flex-none  "><b>asdasd</b></div>*/}
        {/*</div>*/}

    </div>
}
