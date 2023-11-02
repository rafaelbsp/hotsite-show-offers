import { Head } from "$fresh/runtime.ts";

export interface Props {
  title?: string;
}

function offerShowtitle({ title }: Props) {

  return (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" /> */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;900&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
        </Head>
        <section class="bg-[#111010] py-24">
            <div class="container">
                <h1 class="font-[Inter] text-white uppercase font-black min-w-screen-xl text-3xl leading-6 lg:text-8xl lg:leading-[4.5rem]">
                    A BLACK FRIDAY<br /> VAI PEGAR <span class="text-[#FF3D00]">FOGO</span>
                    <img
                        class="inline-block align-baseline pl-2 w-6 lg:w-12"
                        src="/image/fire_icon.svg"
                    />
                </h1>
            </div>        
        </section>
    </>
  );
}

export default offerShowtitle;