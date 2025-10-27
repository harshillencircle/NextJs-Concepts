"use client";

import { products } from "@/app/data/products";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function ProductDeails() {
    const params = useParams();
    const router = useRouter();

    const product = products.find((p) => p.id === Number(params.id))
    if (!product) {
        return <p>Product Not Found!!</p>
    }
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
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </div>
                    <div className="mt-8">
                        <button onClick={() => router.push('/products')} className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300">Back To Products</button>
                    </div>
                </div>
            </div>
        </section>
    );
}