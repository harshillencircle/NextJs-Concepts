import Image from "next/image";
import Link from "next/link";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
};

export default async function ProductsPage() {
    const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
    if (!res.ok) {
        throw new Error("Failed To Fetch Products!!");
    }

    const products: Product[] = await res.json();

    return (
        <section className="py-10 px-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Products From Api</h2>
                <div>
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((product: Product) => (
                            <li key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                                <Link href={`/productpage/${product.id}`}>
                                    <div className="flex flex-col items-center p-4">
                                        <div className="mb-4">
                                            <Image src={product.image} alt="Product Image" width={100} height={100} />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 line-clamp-2">{product.title}</h3>
                                            <p className="mt-2 text-blue-600 font-medium">${product.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </section>
    );
}