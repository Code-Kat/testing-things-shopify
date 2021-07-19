import MyApolloProvider from "../components/MyApolloProvider";
import { AppProvider } from "@shopify/polaris";
import { Provider as AppBridgeProvider } from "@shopify/app-bridge-react";
import "@shopify/polaris/dist/styles.css";
import translations from "@shopify/polaris/locales/en.json";

function MyApp(props) {
  const { Component, pageProps, host } = props;
  return (
    <AppProvider i18n={translations}>
      <AppBridgeProvider
        config={{
          apiKey: API_KEY,
          host: host,
          forceRedirect: true,
        }}
      >
        <MyApolloProvider Component={Component} {...pageProps} />
      </AppBridgeProvider>
    </AppProvider>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  return {
    host: ctx.query.host,
  };
};

export default MyApp;
