import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedModel, setSelectedModel] = useState('iPhone 15 Pro Max');
  const [cartItems, setCartItems] = useState(0);

  const iphones = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: '134 990 ₽',
      originalPrice: '149 990 ₽',
      image: '/img/41eecf7a-dd0d-4d17-b243-70852f190916.jpg',
      colors: ['Space Black', 'White Titanium', 'Blue Titanium', 'Natural Titanium'],
      storage: ['256GB', '512GB', '1TB'],
      features: ['A17 Pro чип', 'Камера 48 МП', 'Action Button', 'USB-C'],
      isNew: true,
      discount: '-10%'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro',
      price: '114 990 ₽',
      originalPrice: '124 990 ₽',
      image: '/img/2050cdb9-d71e-4205-8515-bb8097542a2e.jpg',
      colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
      storage: ['128GB', '256GB', '512GB', '1TB'],
      features: ['A17 Pro чип', 'Pro камеры', 'Action Button', 'USB-C'],
      isNew: true,
      discount: '-8%'
    },
    {
      id: 3,
      name: 'iPhone 15',
      price: '89 990 ₽',
      originalPrice: '94 990 ₽',
      image: '/img/33c30e6c-728a-48b1-a7b5-d8f211ecf304.jpg',
      colors: ['Pink', 'Yellow', 'Green', 'Blue', 'Black'],
      storage: ['128GB', '256GB', '512GB'],
      features: ['A16 Bionic', 'Камера 48 МП', 'USB-C', 'Dynamic Island'],
      isNew: false,
      discount: '-5%'
    }
  ];

  const addToCart = (phone: any) => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="Smartphone" size={24} className="text-black" />
                <span className="text-xl font-semibold text-black">iPhone Store</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-black transition-colors">iPhone</a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">Аксессуары</a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">Поддержка</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-blue-600 text-white text-xs">
                    {cartItems}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - 3D Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-thin text-black mb-6 tracking-tight">
            iPhone
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Познакомьтесь с самой передовой линейкой iPhone
          </p>
          
          {/* 3D Product Showcase */}
          <div className="relative mb-16">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {iphones.map((phone, index) => (
                <Card 
                  key={phone.id}
                  className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 bg-white/60 backdrop-blur-sm ${
                    selectedModel === phone.name ? 'ring-2 ring-blue-600 scale-105' : ''
                  }`}
                  onClick={() => setSelectedModel(phone.name)}
                >
                  <CardContent className="p-8">
                    <div className="relative mb-6">
                      {phone.isNew && (
                        <Badge className="absolute top-0 right-0 bg-blue-600 text-white">
                          NEW
                        </Badge>
                      )}
                      {phone.discount && (
                        <Badge variant="outline" className="absolute top-0 left-0 border-red-500 text-red-500">
                          {phone.discount}
                        </Badge>
                      )}
                      <img 
                        src={phone.image} 
                        alt={phone.name}
                        className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-black mb-4">{phone.name}</h3>
                    
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-3xl font-semibold text-black">{phone.price}</span>
                      {phone.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{phone.originalPrice}</span>
                      )}
                    </div>

                    <div className="space-y-3 mb-6 text-left">
                      {phone.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Icon name="Check" size={16} className="text-green-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Цвета:</p>
                        <div className="flex justify-center space-x-2">
                          {phone.colors.slice(0, 4).map((color, idx) => (
                            <div 
                              key={idx}
                              className="w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer hover:scale-110 transition-transform"
                              style={{
                                backgroundColor: 
                                  color.includes('Black') ? '#1a1a1a' :
                                  color.includes('White') ? '#f5f5f5' :
                                  color.includes('Blue') ? '#007aff' :
                                  color.includes('Natural') ? '#f1e7dc' :
                                  color.includes('Pink') ? '#f2b5d4' :
                                  color.includes('Yellow') ? '#fdd835' :
                                  color.includes('Green') ? '#4caf50' :
                                  '#6b7280'
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full transition-all duration-300 hover:shadow-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(phone);
                        }}
                      >
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Купить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-thin text-black mb-6">Почему iPhone?</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Zap', title: 'A17 Pro чип', desc: 'Невероятная производительность для всех задач' },
              { icon: 'Camera', title: 'Pro камеры', desc: 'Профессиональная съёмка в любых условиях' },
              { icon: 'Battery', title: 'Батарея на весь день', desc: 'До 29 часов воспроизведения видео' },
              { icon: 'Shield', title: 'Защита данных', desc: 'Передовые технологии безопасности' }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon as any} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-thin mb-6">
            Готовы к новому iPhone?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Оформите предзаказ и получите бесплатную доставку
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg rounded-full">
              Выбрать iPhone
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg rounded-full">
              Сравнить модели
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-black mb-4">Магазин</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">iPhone</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Аксессуары</a></li>
                <li><a href="#" className="hover:text-black transition-colors">AirPods</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">Служба поддержки</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Ремонт</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-black transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-black mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-600">
                <li>8 800 555-35-35</li>
                <li>info@iphonestore.ru</li>
                <li>Москва, Красная площадь, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 iPhone Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;