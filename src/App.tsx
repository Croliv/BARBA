import React from 'react';
import { ShoppingCart, Star, Truck, Package, CircleDollarSign } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-zinc-900 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">BarbaKing</h1>
          <div className="flex items-center gap-4">
            <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-yellow-500 transition-colors" />
          </div>
        </div>
      </header>

      {/* Hero Section with Minoxidil Promotion */}
      <div className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold">Oferta Especial</span>
            <h2 className="text-4xl font-bold mt-4 mb-2">Minoxidil 5%</h2>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <span className="text-gray-300">(128 avaliações)</span>
            </div>
            <p className="text-gray-300 mb-6">Potencialize o crescimento da sua barba com o tratamento mais eficaz do mercado.</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-yellow-500">R$ 48,99</span>
              <span className="text-gray-400 line-through ml-2">R$ 89,99</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Comprar Agora
              </button>
              <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1621607512022-6aecc4fed814?auto=format&fit=crop&w=600&q=80" 
              alt="Minoxidil Bottle" 
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <Truck className="w-8 h-8 text-yellow-500" />
            <div>
              <h3 className="font-semibold">Frete Grátis para Manaus</h3>
              <p className="text-gray-600">Entrega rápida e segura</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Package className="w-8 h-8 text-yellow-500" />
            <div>
              <h3 className="font-semibold">Produto Original</h3>
              <p className="text-gray-600">Garantia de autenticidade</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <CircleDollarSign className="w-8 h-8 text-yellow-500" />
            <div>
              <h3 className="font-semibold">Melhor Preço</h3>
              <p className="text-gray-600">Economia garantida</p>
            </div>
          </div>
        </div>
      </div>

      {/* Other Products */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Outros Produtos para sua Barba</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Óleo para Barba",
                price: "R$ 39,99",
                image: "https://images.unsplash.com/photo-1621607512419-26b0479b4e26?auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Pente de Madeira",
                price: "R$ 29,99",
                image: "https://images.unsplash.com/photo-1621607512552-5aa614726505?auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Balm para Barba",
                price: "R$ 45,99",
                image: "https://images.unsplash.com/photo-1621607512489-c4a96a26a3d1?auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Kit Barba Premium",
                price: "R$ 149,99",
                image: "https://images.unsplash.com/photo-1621607512486-3e3e54a5c84c?auto=format&fit=crop&w=300&q=80"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-yellow-500 font-bold">{product.price}</p>
                  <button className="w-full mt-4 bg-zinc-900 text-white py-2 rounded hover:bg-zinc-800 transition-colors">
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 BarbaKing - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default App;