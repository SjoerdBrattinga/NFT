import Head from 'next/head'

export default function Home() {

  return (

    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>NFT</title>
        <link rel="icon" href="/images/logo.png" />

        <meta property="og:title" content="Matsiemaal" key="ogtitle" />
        <meta property="og:description" content="Get ready for NFTs with Matsiemaal! " key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://Matsiemaal.nl/" key="ogurl"/>
        <meta property="og:image" content="https://Matsiemaal.nl/images/pumps.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://Matsiemaal.nl/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="Matsiemaal.nl" key="twdomain" />
        <meta property="twitter:url" content="https://Matsiemaal.nl/" key="twurl" />
        <meta name="twitter:title" content="Matsiemaal" key="twtitle" />
        <meta name="twitter:description" content="Get ready for NFTs with Matsiemaal! " key="twdesc" />
        <meta name="twitter:image" content="https://Matsiemaal.nl/images/pumps.gif" key="twimage" />
      </Head>

      <div className="">
        <div className="flex items-center justify-between w-full border-b-2	pb-6">
          <a href="/" className=""><img src="images/logo.png" width="108" alt="" className="logo-image" /></a>
          <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
            <a href="#about" className="text-4xl text-white hover:text-black m-6">About</a>
            <a href="/mint" className="text-4xl text-white hover:text-black m-6">MINT!</a>
            <a href="#traits" className="text-4xl text-white hover:text-black m-6">Traits</a>
            <a href="#roadmap" className="text-4xl text-white hover:text-black m-6">Roadmap</a>
            <a href="#team" className="text-4xl text-white hover:text-black m-6">Team</a>
            <a href="#contact" className="text-4xl text-white hover:text-black m-6">Contact</a>
            {/* <a href="https://twitter.com/matsiemaalNFT" className="text-4xl  hover:text-white m-6 text-blau">TWITTER</a> */}
            <a href="https://discord.gg/v2zXsSwBUg" className="text-4xl  hover:text-white m-6 text-blau">DISCORD</a>
          </nav>
        </div>
      </div>

      <div className="md:w-2/3 w-4/5 " id="about">
        <div className="mt-6 border-b-2 py-6">
          <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
            <div className="lg:w-1/2 w-3/4">
              <h1 className="text-7xl Poppitandfinchsans text-white ">Get ready for NFTs with<br/><span className="text-blau">Matsiemaal!</span></h1>
              <p className="text-2xl text-white my-6  montserrat">
              <strong>LAUNCH DATE:</strong> 1 Januari 2022. 2pm EST. <br />‍
              <span className="text-white text-2xl montserrat"><strong>TOTAL SUPPLY: 9999</strong> Matsies.<br/><strong>PRICE: 0.01 ETH </strong>each.</span></p>
              <iframe src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2022=2-01-1T21:00:00" allowtransparency="true" frameBorder="0" width="425" height="25"></iframe>
            </div>
            <img className="lg:w-1/2 w-3/4" src="images/matsiemaal.jpeg" width="500px" />
          </div>
          <div className="flex flex-col items-center">
            <a href="/mint" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">GO TO MINTING PAGE!</a>
          </div>
        </div>
      </div>

      <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
        <div className="border-4 border-blue-300 p-4">
          <img src="images/earth.gif" alt="" width="400px" className="feature-image"/></div>
        <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
          <h2 className="text-blau Poppitandfinchsans text-6xl text-center">TRAITS</h2>
          <p className="text-xl text-white my-6  montserrat">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>

      {/* <div id="gallery" className="   mx-6 py-6">
        <h2 className="text-blau Poppitandfinchsans text-7xl text-center"> VARIETIES</h2>
        <div class="container mx-auto">
          <div class="grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
            <div class="w-full rounded">
                <img src="images_sjoerd/ZB1.jpg" alt="image"/>
            </div>
            <div class="w-full col-span-2 row-span-2 rounded">
              <img src="images_sjoerd/LDM165.jpg" alt="image"/> 
            </div>
            <div class="w-full rounded">
              <img src="images_sjoerd/KW90.jpg" alt="image"/>
            </div>
            <div class="w-full rounded">
              <img src="images_sjoerd/LDM120.jpg" alt="image"/>   
            </div>
            <div class="w-full rounded">              
              <img src="images_sjoerd/ZB2.jpg" alt="image"/>
            </div>
            <div class="w-full rounded">
              <img src="images_sjoerd/MNM.jpg" alt="image"/>
            </div>
          </div>
        </div>                 
      </div>                 */}

      <div id="roadmap" className="">
        <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">OUR MISSION STATEMENT</h2>
        <p className="text-xl text-white text-center my-6  montserrat"> We want to change the world!</p>
        <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">HOW WE'RE GIVING BACK</h2>
        <p className="text-xl text-white text-center my-6 my-6  montserrat"> 10% </p>
        <p className="text-xl text-white text-center my-6 my-6  montserrat"> 25% </p>
        <p className="text-xl text-white text-center my-6 my-6  montserrat"> 50% </p>
        <p className="text-xl text-white text-center my-6 my-6  montserrat"> 75% </p>
        <p className="text-xl text-white text-center my-6 my-6  montserrat"> 100% </p>
      </div>

      <div id="team" className="mx-12 my-16 ">
        <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">RESEARCH TEAM</h2>
        <div className="flex justify-around flex-wrap">
          <div className="flex flex-col  my-6" style={{width:"360px"}}>
            <div className="cards-image-mask"><img src="/images/Mats.jpg" width="360px" alt="" className="cards-image" /></div>
            <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Mats</h3>
            <a href="https://twitter.com/matsiemaalNFT" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@matsiemaalNFT)</a>
          </div>
        </div>
      </div>
        
      <div id="contact" className="flex flex-wrap justify-around items-center  mx-6 py-6">
        <div className=" p-4">
          <img src="images/contact.png" alt="" width="400px" className="feature-image"/>
        </div>
        <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
          <h2 className="text-blau Poppitandfinchsans text-6xl text-center">CONTACT</h2>
          <p className="text-xl text-white my-6  montserrat"> We'd love to hear from you!</p>
          <p className="text-xl text-white my-6  montserrat"> Drop us a line at <a className="text-orange underline font-bold" target="_blank" href="mailto:info@matsiemaal.nl">info@Matsiemaal.nl</a>,<br/>
          or alternatively reach out to us on Twitter <a className="text-orange underline font-bold" target="_blank" href="https://twitter.com/MatsiemaalNFT">@matsiemaalNFT</a><br/>
          Or alternatively, join our <a className="text-orange underline font-bold" target="_blank" href="https://discord.gg/8Wk9Hp6UyV">Discord Server</a>.
          </p>
        </div>
      </div>     

    </div>
    )
  }
