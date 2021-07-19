import React from "react";
import { Page, Heading, Button } from "@shopify/polaris";
import axios from "axios";
import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation productCreate($input: ProductInput!) {
    productCreate(input: $input) {
      product {
        id
      }
    }
  }
`;

function TestPage() {
  const [createProduct, { data }] = useMutation(CREATE_PRODUCT);

  const handleCreateProduct = () => {
    createProduct({
      variables: {
        input: {
          descriptionHtml:
            "This is the nest hat you will ever own. It's wonderful.",
          title: "The Best Hat",
          images: [
            {
              src:
                "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
            },
          ],
        },
      },
    });
  };

  return (
    <div className="w-full mt-10 flex flex-col justify-center items-center">
      {data && console.log(data)}
      <Page>
        <Heading>Test page</Heading>

        <div className="m-10">
          <Button onClick={handleCreateProduct}>Create Product</Button>
        </div>
      </Page>
    </div>
  );
}

export default TestPage;
