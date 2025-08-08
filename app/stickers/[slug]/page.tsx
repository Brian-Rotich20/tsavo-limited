// app/stickers/[slug]/page.tsx
import { products } from '../../data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, Phone, Mail } from 'lucide-react';

interface PageProps {
  params: { slug: string };
}

export default function StickerProductPage({ params }: PageProps) {
  const product = products.find(p => 
    p.category === 'stickers' && p.id === params.slug
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Minimalist Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <div>
            <div className="aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden">
              <Image 
                src={product.image} 
                alt={product.name}
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Title & Description */}
            <div className="space-y-4">
              <h1 className="text-4xl font-light text-gray-900">{product.name}</h1>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium text-gray-900">What's included</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-xl font-medium text-gray-900">Specifications</h2>
                <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="text-sm text-gray-600">
                      • {spec}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Related Products */}
        <section className="mt-24 pt-12 border-t border-gray-100">
          <h2 className="text-2xl font-light text-gray-900 mb-12">More sticker solutions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products
              .filter(p => p.category === 'stickers' && p.id !== product.id)
              .map((relatedProduct) => (
                <Link 
                  key={relatedProduct.id} 
                  href={`/stickers/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3 group-hover:bg-gray-100 transition-colors">
                    <Image 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1 group-hover:text-gray-700 transition-colors text-sm">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-xs text-gray-600 font-light line-clamp-2">
                    {relatedProduct.description}
                  </p>
                  {relatedProduct.pricing && (
                    <p className="text-xs text-gray-900 font-medium mt-1">{relatedProduct.pricing}</p>
                  )}
                </Link>
              ))
            }
          </div>
        </section>
      </main>
    </div>
  );
}