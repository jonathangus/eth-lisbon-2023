import '../globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import Web3Provider from '../components/Web3Provider';
import { NotificationsProvider } from 'reapop';
import NotificationHandler from '../components/NotificationHandler';
import { Inter } from '@next/font/google';
import { NextUIProvider, createTheme } from '@nextui-org/react';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import SelectHandle from '../components/SelectHandle';
import MintHandleView from '../components/MintHandleView';
import CreatePostButton from '../components/CreatePostButton';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// 2. Call `createTheme` and pass your custom values
const theme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#00501e',

      gradient:
        'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
      link: '#5E1DAD',

      // you can also create your own color
      myColor: '#ff4ecd',

      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const [client, setClient] = useState(false);
  const router = useRouter();

  return (
    <main className={`${inter.variable} font-sans`}>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <NotificationsProvider>
            <Web3Provider>
              <div className="p-4">
                <div className="flex justify-between mb-4">
                  <div className="flex items-center">
                    <SelectHandle />
                    {router.asPath !== '/' && (
                      <NextLink className="ml-2" href={`/`}>
                        home
                      </NextLink>
                    )}
                  </div>
                  <div className="flex">
                    <CreatePostButton />
                    <MintHandleView />
                    <ConnectButton />
                  </div>
                </div>
                <Component {...pageProps} />
              </div>
              <NotificationHandler />
            </Web3Provider>
          </NotificationsProvider>
        </QueryClientProvider>
      </NextUIProvider>
    </main>
  );
}

export default MyApp;
