import Head from "next/head";
import Image from "next/image";
import Title from "../../../components/Title";
import { getProduct, getProducts } from "../../../lib/products";

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
    return { notFound: true };
}
}

function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>Next Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>{product.title}</Title>
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
       
      </main>
    </>
  );
}

export default ProductPage;
