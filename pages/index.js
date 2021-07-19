import { Button, Heading, Page } from "@shopify/polaris";
import { Redirect } from "@shopify/app-bridge/actions";
import { useAppBridge } from "@shopify/app-bridge-react";

function Index() {
  const app = useAppBridge();
  const redirect = Redirect.create(app);

  const handleRedirect = () => {
    redirect.dispatch(Redirect.Action.APP, "/TestPage");
  };
  return (
    <Page>
      <Heading>Shopify app with Node and React 🎉</Heading>
      <Button onClick={handleRedirect}>Click me</Button>
    </Page>
  );
}

export default Index;
