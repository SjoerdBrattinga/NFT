import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pumpkins On The Hills</title>
        <link rel="icon" href="/images/favicon.jpg" />

        <meta property="og:title" content="Pumpkins On The Hills" key="ogtitle" />
        <meta property="og:description" content="Get ready for Halloween with Pumpkins On The Hills! 9,999 unique pumpkins ready to get minted!" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://PumpkinsOntheHills.com/" key="ogurl"/>
        <meta property="og:image" content="https://PumpkinsOntheHills.com/images/pumpkin.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://PumpkinsOntheHills.com/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="PumpkinsOntheHills.com" key="twdomain" />
        <meta property="twitter:url" content="https://PumpkinsOntheHills.com/" key="twurl" />
        <meta name="twitter:title" content="Pumpkins On The Hills" key="twtitle" />
        <meta name="twitter:description" content="Get ready for Halloween with Pumpkins On The Hills! 9,999 unique pumpkins ready to get minted!" key="twdesc" />
        <meta name="twitter:image" content="https://PumpkinsOntheHills.com/images/pumpkin.gif" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-6">
            <a href="/" className=""><img src="images/Hola.gif" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="#about" className="text-4xl text-white hover:text-black m-6">About</a>
              <a href="/mint" className="text-4xl text-white hover:text-black m-6">MINT!</a>
              <a href="#traits" className="text-4xl text-white hover:text-black m-6">Pumpkin traits</a>
              <a href="#roadmap" className="text-4xl text-white hover:text-black m-6">Roadmap</a>
              <a href="#team" className="text-4xl text-white hover:text-black m-6">Team</a>
              <a href="#contact" className="text-4xl text-white hover:text-black m-6">Contact</a>
              <a href="https://twitter.com/pumpkinsOTH" className="text-4xl  hover:text-white m-6 text-blau">TWITTER</a>
              <a href="https://discord.gg/PHBw4VUMVX" className="text-4xl  hover:text-white m-6 text-blau">DISCORD</a>
            </nav>

          </div>

        </div>

        <div className="md:w-2/3 w-4/5 " id="about">


          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-7xl Poppitandfinchsans text-white ">Get ready for Halloween with<br/><span className="text-blau">Pumpkins On The Hills!</span></h1>
                    <p className="text-2xl text-white my-6  montserrat"> Do you feel lucky? Choose <span className="text-5xl Poppitandfinch ">Trick</span> or <span className="text-blau text-5xl Poppitandfinchsans">Treat</span> and find out!<br/><span className="text-span-2 font-bold"> Win 5 NFT's</span><br />‍<br />or lose 4 NFT's <br/>‍<span className="text-blau text-5xl Poppitandfinchsans">DO YOU DARE? </span>
                    </p>
                    <p className="text-2xl text-white my-6  montserrat">
                    <strong>LAUNCH DATE:</strong> 17 Oktober 2021. 2pm EST. <br />‍
                    <span className="text-white text-2xl montserrat"><strong>TOTAL SUPPLY: 9999</strong> Pumpkins.<br/><strong>PRICE: 0.01 ETH </strong>each.</span></p>
                    <iframe src="https://free.timeanddate.com/countdown/i7vcex5b/n107/cf11/cm0/cu4/ct0/cs1/ca2/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-10-17T21:00:00" allowtransparency="true" frameBorder="0" width="425" height="25"></iframe>

                  </div>
                  <img className="lg:w-1/2 w-3/4" src="images/Hola.gif" width="500px" />
            </div>
            <div className="flex flex-col items-center">

            <a href="/mint" className="mt-4 Poppitandfinchsans text-4xl border-6 bg-blau  text-white hover:text-black p-2 ">GO TO MINTING PAGE!</a>


            </div>
            </div>





                <div id="traits" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className="border-4 border-blue-300 p-4"><img src="images/Traits4.gif" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">PUMPKINS VARIETIES</h2>
                    <p className="text-xl text-white my-6  montserrat"> Following the recent worldwide pandemic, <span className="font-bold"> emerging reports </span>  suggest that several <span className="font-bold"> banana species </span> have begun exhibiting <span className="font-bold"> strange characteristics. </span> Our research team located across the globe has commenced efforts to <span className="font-bold"> study and document </span>  these unusual phenomena.
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Concerned about parties trying to suppress our research, the team has opted to store our findings On The Hillschain to prevent interference. Although this is a costly endeavour, our mission has never been clearer.
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> The fate of the world's pumpkins depends on it.
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Your support in this time of need is greatly appreciated!
                    </p>
                  </div>
                </div>

                <div id="gallery" className="   mx-6 py-6">
                    <h2 className="text-blau Poppitandfinchsans text-7xl text-center">SIGNATURE SERIES GALLERY</h2>
                  <div className="flex flex-wrap  items-center mx-6   py-6 ">
                    <div className="md:w-1/2">
                      <div className=" border-blue-300 p-2"><img src="images/gallery1.jpeg" alt="" width="600px" className="feature-image"/></div>

                    </div>
                    <div className="md:w-1/2 flex flex-wrap">
                      <div className=" p-2 w-1/2"><img src="images/gallery2.jpeg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/gallery3.jpeg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/gallery4.jpeg" alt="" width="400px" className="feature-image"/></div>
                      <div className=" p-2 w-1/2"><img src="images/gallery5.jpeg" alt="" width="400px" className="feature-image"/></div>

                    </div>
                  </div>
                </div>

              <div id="roadmap" className="">
                <img src="/images/Roadmap.png"/>
              <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">OUR MISSION STATEMENT</h2>
              <p className="text-xl text-white text-center my-6  montserrat"> Our mission is to raise money to start a Blockchain Academy where young adults can learn to code and build platforms on the blockchain.
              </p>
              <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">HOW WE'RE GIVING BACK</h2>
              <p className="text-xl text-white my-6  montserrat">Every dollar made is going back into the Academy and the students!
              </p>
              <p className="text-xl text-white my-6  montserrat"> A minimum of
              <span className="font-bold"> 25% of all sales</span> is needed to rent a office space for one year.
              </p>
              <p className="text-xl text-white my-6  montserrat"> At 100% sellout, we pledge to use <span className="font-bold"> everything </span> for the best learning experience!
              </p>
              // <h2 className="text-6xl text-center Poppitandfinchsans text-blau my-4">ROADMAP</h2>
              // <ul className="">
              //   <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> 4 x 10 ETH donations: </span> The first of these will be made to <a target="_blank" href="https://girlswhocode.com/" className="underline text-black font-bold">Girls Who Code</a>, working to empower young women and <span className="font-bold"> close the gender gap </span> in technology. We know women are unrepresented in the NFT space - lets help to fix this! The remaining donations will be made via community vote using <a target="_blank" href="https://thegivingblock.com/" className="underline text-black font-bold">the Giving Block</a>.</li>
              //   <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> 20 ETH to Community Wallet: </span> Directed towards supporting creators that want to make a positive contribution to the NFT space.</li>
              //   <li className="text-xl text-white my-6  montserrat"><span className="font-bold"> Secondary sales: 5% royalty </span> (2.5% donation, 2.5% to the team). Secondary sales are directed towards charities voted on by the community monthly.</li>
              //
              // </ul>
              // <p className="text-xl text-white my-6  montserrat"> In addition, we have been, and continue to make <span className="font-bold underline"> high quality content for the NFT community </span> through our <span className="font-bold underline"> PROJECT IN PROGRESS </span> series, to help budding creators to along their journey.
              // </p>
              // <p className="text-xl text-white my-6  montserrat"> All fully annotated source code for image generation and the smart contract will be made available after launch as a community resource.
              // </p>


              </div>

              <div id="team" className="mx-12 my-16 ">
                <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">PUMPKIN RESEARCH TEAM</h2>
                <div className="flex justify-around flex-wrap">
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/Mats.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Mats</h3>
                    <a href="https://twitter.com/matsiemaalNFT" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@matsiemaalNFT)</a>
                  </div>
//                   <div className="flex flex-col  my-6" style={{width:"360px"}}>
//                     <div className="cards-image-mask"><img src="/images/MJ.png" width="360px" alt="" className="cards-image" /></div>
//                     <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">MJDATA</h3>
//                     <a href="https://twitter.com/champagneman" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@champagneman)</a>                </div>
//                   <div className="flex flex-col  my-6" style={{width:"360px"}}>
//                     <div className="cards-image-mask"><img src="/images/MB.png" width="360px" alt="" className="cards-image" /></div>
//                     <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">MADBOOGIE</h3>
//                     <a href="https://twitter.com/madboogieart" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@madboogieart)</a>                </div>
//                   <div className="flex flex-col  my-6" style={{width:"360px"}}>
//                     <div className="cards-image-mask"><img src="/images/Jui.png" width="360px" alt="" className="cards-image" /></div>
//                     <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Jui</h3>
//                     <a href="https://twitter.com/mz09art" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@mz09art)</a>                </div>
//                   <div className="flex flex-col  my-6" style={{width:"360px"}}>
//                     <div className="cards-image-mask"><img src="/images/Berk.png" width="360px" alt="" className="cards-image" /></div>
//                     <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">BERK</h3>
//                     <a href="https://twitter.com/berkozdemir" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> (@berkozdemir)</a>                </div>

//                 </div>



              </div>
              <div id="contact" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className=" p-4"><img src="images/letstalk.png" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">CONTACT</h2>
                    <p className="text-xl text-white my-6  montserrat"> We'd love to hear from you!
                    </p>
                    <p className="text-xl text-white my-6  montserrat"> Drop us a line at <a className="text-black underline font-bold" target="_blank" href="mailto:PumpkinsOntheHills@gmail.com">info@PumpkinsOntheHills.com</a>,<br/>
                    or alternatively reach out to us on Twitter <a className="text-black underline font-bold" target="_blank" href="https://twitter.com/PumpkinsOTH">@PumpkinsOntheHills</a><br/>
                    Or alternatively, join our <a className="text-black underline font-bold" target="_blank" href="https://discord.gg/8Wk9Hp6UyV">Discord Server</a>.
                    </p>
                  </div>



              </div>
          </div>
    </div>
    )
  }
