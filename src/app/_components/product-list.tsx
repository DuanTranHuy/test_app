import Image from "next/image"
import Link from "next/link"
import ProductCard from "@/app/_components/product/product-card"

interface Product {
  id: number
  name: string
  originalPrice: string
  salePrice?: string
  image: string
  label?: "Sale" | "Label" | "Promotion"
}

const products: Product[] = [
  {
    id: 1,
    name: "FRUIT CUPCAKE",
    originalPrice: "160.000 VNĐ",
    salePrice: "110.000 VNĐ",
    image: "/products/1.png",
    label: "Sale"
  },
  {
    id: 2,
    name: "NAME",
    originalPrice: "360.000 VNĐ",
    salePrice: "296.000 VNĐ",
    image: "/products/2.png",
    label: "Label"
  },
  {
    id: 3,
    name: "CONCHAS",
    originalPrice: "360.000 VNĐ",
    salePrice: "240.000 VNĐ",
    image: "/products/3.png",
    label: "Sale"
  },
  {
    id: 4,
    name: "CHOCOLATE CAKE SLICE",
    originalPrice: "80.000 VNĐ",
    salePrice: "60.000 VNĐ",
    image: "/products/4.png",
    label: "Sale"
  },
  {
    id: 5,
    name: "MOCHA TRES CAKE",
    originalPrice: "150.000 VNĐ",
    salePrice: "120.000 VNĐ",
    image: "/products/1.png",
    label: "Promotion"
  },
  {
    id: 6,
    name: "MOCHA TRES CAKE",
    originalPrice: "140.000 VNĐ",
    salePrice: "120.000 VNĐ",
    image: "/products/2.png",
    label: "Promotion"
  },
  {
    id: 7,
    name: "ALMOND CAKE",
    originalPrice: "400.000 VNĐ",
    salePrice: "350.000 VNĐ",
    image: "/products/3.png",
    label: "Promotion"
  },
  {
    id: 8,
    name: "CONCHAS",
    originalPrice: "260.000 VNĐ",
    salePrice: "240.000 VNĐ",
    image: "/products/4.png",
    label: "Sale"
  }
]

export default function BestSeller() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="legend-36 mb-4">Best Seller Product</h1>
        <p className="text-neutralsdove-gray-gray-3 text-center font-['SVN-Gotham'] text-[18px] font-normal leading-[150%] max-w-2xl mx-auto mb-12">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since 1500s.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="#"
            className="inline-block px-14 py-2 border border-neutralsmine-shaft-gray-1 border-solid text-secondary-sandal "
          >
            VIEW MORE
          </Link>
        </div>
      </div>
    </section>
  )
}
