import Image from "next/image";
import Link from "next/link";

export const revalidate = 10;
export default async function ProductDetailPage({ params }: { params: any }) {
    const Params = await params;

    const res = await fetch(`https://fakestoreapi.com/products/${Params.id}`, { cache: "no-store"});
    if (!res.ok) {
        throw new Error("Failed To Fetch Product Details!!");
    }
    const product = await res.json();

    return (
        <section className="py-10 px-6 bg-gray-50 min-h-screen flex justify-center">
            <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-8">
                <div className="flex justify-center items-center">
                    <Image src={product.image} alt="product image" width={400} height={400} className="rounded-md object-contain" />
                </div>
                <div className="flex flex-col justify-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-3">{product.title}</h3>
                        <p className="text-xl font-medium text-blue-600 mb-4">${product.price}</p>
                        <p className="text-gray-600 leading-relaxed">{product.category}</p>
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </div>
                    <div className="mt-8">
                        <Link href="/productpage" className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300">Back To Products Page</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
