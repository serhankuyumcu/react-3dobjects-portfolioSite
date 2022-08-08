import { Header, SocialBar, Banner, Loader } from "../Components";
import React from "react";

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <SocialBar />
      <Banner />
    </>
  );
};

export default Home;
