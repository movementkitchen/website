import React from "react"
import Helmet from "react-helmet"

export default () =>
    <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>Movement Kitchen – Home</title>
        <meta name="title" content="Movement Kitchen – Home" />
        <meta name="description" content="Bridging the gap between physiotherapy and strength and conditioning" />
        <meta http-equiv='content-language' content='en-gb' />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.movementkitchen.co.uk/" />
        <meta property="og:title" content="Movement Kitchen – Home" />
        <meta property="og:description" content="Bridging the gap between physiotherapy and strength and conditioning" />
        <meta property="og:image" content="/images/meta.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.movementkitchen.co.uk/" />
        <meta property="twitter:title" content="Movement Kitchen – Home" />
        <meta property="twitter:description" content="Bridging the gap between physiotherapy and strength and conditioning" />
        <meta property="twitter:image" content="/images/meta.jpg" />
    </Helmet>