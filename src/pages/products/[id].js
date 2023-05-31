import Image from "next/image";
import { ApiError } from "../../../lib/api";
import { getProduct, getProducts } from "../../../lib/products";
import Page from "../../../components/Page";

export async function getStaticPaths() {
    const products = await getProducts();
    return {
        paths: products.map((product) => ({
            params: { id: product.id.toString() }
        })),
        fallback: 'blocking',
    }
}

export async function getStaticProps( { params: { id } } ) {
    try {
    const product = await getProduct(id)
    return {
        props: { product },
        revalidate: 30, 
    };
} catch (err) {
  if (err instanceof ApiError && err.status === 404) {
    return { notFound: true };
  }
}
}

function ProductPage({ product }) {
  return (
    <Page title={product.title}>
        <div className="lg:flex justify-between items-center">
        <Image src={product.pictureUrl} alt='' height={480} width={640} />
        <div className='flex-1 lg:ml-4'>
        <p className='text-sm'>
            {product.description}
        </p>
        <p className="mt-2 text-lg font-bold">
          {product.price}
        </p>
        </div>
       
        </div>
       
    </Page>
  );
}

export default ProductPage;
