import { Head } from "$fresh/runtime.ts";
import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import CountdownTimer from "$store/islands/CountdownTimer.tsx"

export interface itemOffer {
  image: ImageWidget;
  name: string;
  highPrice: string;
  lowPrice: string;
  url: string;
  /**
   * @title Expires at date
   * @format datetime
   */
  expiresAt: string;
}
export interface Props {
  title?: string;
  listOffers: itemOffer[];
}

function showHighLightItem(item:itemOffer) {
  return (
    <div class="flex flex-col pt-16 gap-y-10 items-center rounded-2xl h-full lg:flex-row lg:gap-y-10 lg:gap-x-20">
      <figure>
        <Image
          class="card"
          src={item.image}
          alt={item.name}
          width={500}
          height={500}
          loading="lazy"
        />
      </figure>
      <div class="flex max-w-2xl flex-grow flex-col h-full gap-2 font-[Inter] text-white bg-[#111010]">
        <CountdownTimer size="big" targetDate={item.expiresAt} />
        <div class="my-2">
          <p class="font-light text-base lg:text-3xl">{item.name}</p>
        </div>
        <div class="flex gap-2 lg:gap-6 w-full">
          <p class="relative font-black lg:text-4xl uppercase text-[#464646]">
            R$ {item.highPrice}
            <span class="content-[''] absolute w-full h-[7px] bg-[#464646] block -rotate-6 m-auto rounded-full border-2 border-solid border-[#111010] inset-y-0"></span></p>
          <p class="font-black lg:text-4xl uppercase text-[#FF3D00]">R$ {item.lowPrice}</p>
        </div>
        <div class="flex w-full lg:pt-8">
          <a href={item.url} class="text-base font-black uppercase bg-[#FF3D00] rounded px-8 py-3 border-b-4 border-[#A12700]">Eu quero</a>
        </div>
      </div>
    </div>
  )
}

function offerShow({ title, listOffers }: Props) {
  const items = listOffers;
  const highLightItem = items.length ? items.splice(0,1)[0] : null;
  
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" /> */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;900&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
    </Head>
    <section class="bg-[#111010] py-24">
      <div class="container px-8 2xl:px-0 pl-30 pr-30">
        <h1 class="font-[Inter] text-white uppercase font-black min-w-screen-xl text-3xl leading-6 lg:text-8xl lg:leading-[4.5rem]">
          A BLACK FRIDAY<br /> VAI PEGAR <span class="text-[#FF3D00]">FOGO</span>
          <img
            class="inline-block align-baseline pl-2 w-6 lg:w-12"
            src="/image/fire_icon.svg"
          />
        </h1>

        { highLightItem !== null && showHighLightItem(highLightItem) }
      </div>        
    </section>
    <section class="bg-[#1E1C1C] py-24 bg-[url('/image/bg_triangle_top.svg'),_url('/image/bg_triangle_bottom.svg')] bg-[position:top,bottom] bg-repeat-x">
      <div class="max-w-screen-2xl px-8 2xl:px-0">
        <h3 class="font-[Inter] text-white uppercase font-light text-2xl mb-6">{title}</h3>

          
        <ul class="grid grid-cols-1 gap-2 items-center sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
          {
            items ? items.map(({image, name, highPrice, lowPrice, url, expiresAt}) => (
              <li class="font-[Inter] text-white bg-[#111010] p-4 flex flex-col items-center rounded-2xl h-full">
                <figure class="mb-9">
                  <Image
                    class="card"
                    src={image}
                    alt={name}
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                </figure>
                <CountdownTimer size="normal"  targetDate={expiresAt} />
                <div class="my-2">
                  <p class="font-light text-base text-center">{name}</p>
                </div>
                <div class="flex gap-2 w-full items-center justify-center mb-10 ">
                  <p class="font-black uppercase text-[#464646]">R$ {highPrice}</p>
                  <p class="font-black uppercase text-[#FF3D00]">R$ {lowPrice}</p>
                </div>
                <div class="flex w-full justify-center">
                  <a href={url} class="text-base font-black uppercase bg-[#FF3D00] rounded px-8 py-3 border-b-4 border-[#A12700]">Eu quero</a>
                </div>
              </li>
            )) : ''
          }
        </ul>
      </div>
    </section>
    </>
    );
  }
  
  export default offerShow;