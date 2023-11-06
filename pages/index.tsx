import Head from 'next/head';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Reel Talk Final</title>
        <meta name="description" content="Reel Talk Final" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl font-bold underline">
          Welcome to Reel Talk Final!
        </h1>
      </main>
    </div>
  );
};

export default Home;
