// import MultiLanguage from "test-nextjs-package-g3";

const Home = ({ isSSRMobileView }) => {
  return (
    <>
     hello
     {/* <MultiLanguage /> */}
    </>
  );
};

Home.getInitialProps = async (ctx) => {
  let userAgent;
  if (ctx?.req) {
    userAgent = ctx.req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const isSSRMobileView = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  return {
    isSSRMobileView,
  };
};

export default Home;
