import Head from 'next/head';
import RegistrationFrom from './components/RegistrationFrom';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Registration Form</title>
      </Head>
      <div className="container mx-auto p-4">
        <RegistrationFrom />
      </div>
    </div>
  );
}
