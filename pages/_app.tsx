import '../styles/main.scss';
import type { AppProps } from 'next/app';
// import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

config.autoAddCss = false;



export default function App({ Component, pageProps }: AppProps) {
  // const [queryClient] = useState(() => new QueryClient())

  useEffect(()=>{
    AOS.init();
  },[])


  return (
    <>
        <Component {...pageProps} />
        <ToastContainer />
    </>
  );

  // return (
  //   <QueryClientProvider client={queryClient}>
  //     <Hydrate state={pageProps.dehydratedState}>
  //       <Component {...pageProps} />
  //       <ToastContainer />
  //     </Hydrate>
  //   </QueryClientProvider>
  // );
}
