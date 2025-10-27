import Link from "next/link";
import { products } from "../data/products";
import Image from "next/image";

export default function Products() {
    return (
        <section className="py-10 px-6 bg-gray-50">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-gray-800">Product List</h1>
            </div>
            <div>
                <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" >
                    {products.map((product) => (
                        <li key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                            <Link href={`/products/${product.id}`}>
                                <div className="flex flex-col items-center p-4">
                                    <div className="mb-4">
                                        <Image src={product.image} alt="product image" width={200} height={200} className="rounded-md object-contain" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600">{product.title}</h3>
                                        <p className="mt-2 text-blue-600 font-medium">${product.price}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}