import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedModel, setSelectedModel] = useState('iPhone 15 Pro Max');
  const [cartItems, setCartItems] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  const [deliveryMethod, setDeliveryMethod] = useState('courier');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [customerData, setCustomerData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const iphones = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max',
      price: '134 990 ₽',
      originalPrice: '149 990 ₽',
      image: '/img/9f809598-1da3-478a-b4f8-e3f164bd2324.jpg',
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
    },
    {
      id: 4,
      name: 'iPhone 14 Pro Max',
      price: '119 990 ₽',
      originalPrice: '129 990 ₽',
      image: '/img/276f4e8b-c3e3-476b-9d72-b12d1f8d9283.jpg',
      colors: ['Deep Purple', 'Gold', 'Silver', 'Space Black'],
      storage: ['128GB', '256GB', '512GB', '1TB'],
      features: ['A16 Bionic', 'Pro камеры 48 МП', 'Always-On дисплей', 'Dynamic Island'],
      isNew: false,
      discount: '-8%'
    },
    {
      id: 5,
      name: 'iPhone 14',
      price: '74 990 ₽',
      originalPrice: '84 990 ₽',
      image: '/img/a178a47a-44b3-4326-a79b-0b2c48753c15.jpg',
      colors: ['Blue', 'Purple', 'Midnight', 'Starlight', 'Red'],
      storage: ['128GB', '256GB', '512GB'],
      features: ['A15 Bionic', 'Двойная камера', 'Ceramic Shield', 'Emergency SOS'],
      isNew: false,
      discount: '-12%'
    },
    {
      id: 6,
      name: 'iPhone 13 Pro',
      price: '99 990 ₽',
      originalPrice: '109 990 ₽',
      image: '/img/cdda7922-807a-4483-a036-593ea5bab6e9.jpg',
      colors: ['Sierra Blue', 'Graphite', 'Gold', 'Silver'],
      storage: ['128GB', '256GB', '512GB', '1TB'],
      features: ['A15 Bionic', 'Pro камеры', 'ProMotion 120 Гц', 'Macro фото'],
      isNew: false,
      discount: '-9%'
    },
    {
      id: 7,
      name: 'iPhone 13',
      price: '64 990 ₽',
      originalPrice: '74 990 ₽',
      image: '/img/9f7277a9-71af-49fb-8d03-6307b7cdb71f.jpg',
      colors: ['Pink', 'Blue', 'Midnight', 'Starlight', 'Red'],
      storage: ['128GB', '256GB', '512GB'],
      features: ['A15 Bionic', 'Dual камера', 'Cinematic режим', 'Face ID'],
      isNew: false,
      discount: '-13%'
    },
    {
      id: 8,
      name: 'iPhone 12 Pro',
      price: '84 990 ₽',
      originalPrice: '94 990 ₽',
      image: '/img/39a6ead5-0748-41a5-93f3-1866d1a5d4f2.jpg',
      colors: ['Graphite', 'Silver', 'Gold', 'Pacific Blue'],
      storage: ['128GB', '256GB', '512GB'],
      features: ['A14 Bionic', 'Pro камеры', 'LiDAR сканер', 'MagSafe'],
      isNew: false,
      discount: '-10%'
    },
    {
      id: 9,
      name: 'iPhone 12',
      price: '54 990 ₽',
      originalPrice: '64 990 ₽',
      image: '/img/0d30777b-31d3-43c4-96bb-fb944e915376.jpg',
      colors: ['Purple', 'Blue', 'Green', 'Black', 'White', 'Red'],
      storage: ['64GB', '128GB', '256GB'],
      features: ['A14 Bionic', 'Dual камера', '5G', 'Night режим'],
      isNew: false,
      discount: '-15%'
    },
    {
      id: 10,
      name: 'iPhone SE',
      price: '34 990 ₽',
      originalPrice: '49 990 ₽',
      image: '/img/73122f90-477a-4a87-a2c8-25fc27936650.jpg',
      colors: ['Midnight', 'Starlight', 'Red'],
      storage: ['64GB', '128GB', '256GB'],
      features: ['A15 Bionic', 'Touch ID', 'Компактный', 'Водостойкость'],
      isNew: false,
      discount: '-30%',
      isSpecialOffer: true
    }
  ];

  const addToCart = (phone: any) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === phone.id);
      if (existing) {
        return prev.map(item => 
          item.id === phone.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...phone, quantity: 1, selectedColor: phone.colors[0], selectedStorage: phone.storage[0] }];
    });
    setCartItems(prev => prev + 1);
  };

  const removeFromCart = (phoneId: number) => {
    setCart(prev => {
      const item = prev.find(item => item.id === phoneId);
      if (item && item.quantity > 1) {
        setCartItems(prev => prev - 1);
        return prev.map(item => 
          item.id === phoneId 
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      setCartItems(prev => prev - (item?.quantity || 0));
      return prev.filter(item => item.id !== phoneId);
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^0-9]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getDeliveryPrice = () => {
    switch (deliveryMethod) {
      case 'courier': return 990;
      case 'pickup': return 0;
      case 'express': return 1990;
      default: return 990;
    }
  };

  const handleCustomerDataChange = (field: string, value: string) => {
    setCustomerData(prev => ({ ...prev, [field]: value }));
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
              <Button 
                variant="ghost" 
                size="sm" 
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
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
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
                        <Badge variant="outline" className={`absolute top-0 left-0 ${phone.isSpecialOffer ? 'bg-red-500 text-white border-red-500' : 'border-red-500 text-red-500'}`}>
                          {phone.discount}
                        </Badge>
                      )}
                      {phone.isSpecialOffer && (
                        <Badge className="absolute top-8 left-0 bg-orange-500 text-white animate-pulse">
                          АКЦИЯ!
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

      {/* Cart Dialog */}
      <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">Корзина</DialogTitle>
          </DialogHeader>

          {cart.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="ShoppingCart" size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 text-lg">Корзина пуста</p>
              <Button 
                onClick={() => setIsCartOpen(false)} 
                className="mt-4 bg-blue-600 hover:bg-blue-700"
              >
                Продолжить покупки
              </Button>
            </div>
          ) : (
            <Tabs defaultValue="cart" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="cart">Товары</TabsTrigger>
                <TabsTrigger value="delivery">Доставка</TabsTrigger>
                <TabsTrigger value="payment">Оплата</TabsTrigger>
              </TabsList>

              <TabsContent value="cart" className="space-y-4">
                <div className="space-y-4">
                  {cart.map((item) => (
                    <Card key={item.id} className="p-4">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-contain"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-gray-600">
                            {item.selectedColor} • {item.selectedStorage}
                          </p>
                          <p className="text-lg font-semibold">{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="px-3 py-1 bg-gray-100 rounded">
                            {item.quantity}
                          </span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => addToCart(item)}
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between text-lg">
                    <span>Товары:</span>
                    <span>{getTotalPrice().toLocaleString()} ₽</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Доставка:</span>
                    <span>{getDeliveryPrice() === 0 ? 'Бесплатно' : `${getDeliveryPrice().toLocaleString()} ₽`}</span>
                  </div>
                  <div className="flex justify-between text-xl font-semibold border-t pt-2">
                    <span>Итого:</span>
                    <span>{(getTotalPrice() + getDeliveryPrice()).toLocaleString()} ₽</span>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="delivery">
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold mb-4 block">Способ доставки</Label>
                    <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="courier" id="courier" />
                        <Label htmlFor="courier" className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Курьерская доставка</p>
                              <p className="text-sm text-gray-600">1-3 рабочих дня</p>
                            </div>
                            <span className="font-semibold">990 ₽</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="pickup" id="pickup" />
                        <Label htmlFor="pickup" className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Самовывоз</p>
                              <p className="text-sm text-gray-600">Забрать в магазине</p>
                            </div>
                            <span className="font-semibold text-green-600">Бесплатно</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="flex-1 cursor-pointer">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Экспресс доставка</p>
                              <p className="text-sm text-gray-600">В течение дня</p>
                            </div>
                            <span className="font-semibold">1 990 ₽</span>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Адрес доставки</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Имя и фамилия</Label>
                        <Input 
                          id="name"
                          value={customerData.name}
                          onChange={(e) => handleCustomerDataChange('name', e.target.value)}
                          placeholder="Иван Иванов"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input 
                          id="phone"
                          value={customerData.phone}
                          onChange={(e) => handleCustomerDataChange('phone', e.target.value)}
                          placeholder="+7 (999) 123-45-67"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">Город</Label>
                        <Input 
                          id="city"
                          value={customerData.city}
                          onChange={(e) => handleCustomerDataChange('city', e.target.value)}
                          placeholder="Москва"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Индекс</Label>
                        <Input 
                          id="postalCode"
                          value={customerData.postalCode}
                          onChange={(e) => handleCustomerDataChange('postalCode', e.target.value)}
                          placeholder="123456"
                          className="mt-1"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="address">Адрес</Label>
                        <Input 
                          id="address"
                          value={customerData.address}
                          onChange={(e) => handleCustomerDataChange('address', e.target.value)}
                          placeholder="ул. Тверская, д. 1, кв. 1"
                          className="mt-1"
                        />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email"
                          type="email"
                          value={customerData.email}
                          onChange={(e) => handleCustomerDataChange('email', e.target.value)}
                          placeholder="example@mail.ru"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="payment">
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold mb-4 block">Способ оплаты</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <Icon name="CreditCard" size={20} />
                            <div>
                              <p className="font-medium">Банковская карта</p>
                              <p className="text-sm text-gray-600">Visa, MasterCard, МИР</p>
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="flex-1 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <Icon name="Banknote" size={20} />
                            <div>
                              <p className="font-medium">Наличными</p>
                              <p className="text-sm text-gray-600">При получении</p>
                            </div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg">
                        <RadioGroupItem value="sbp" id="sbp" />
                        <Label htmlFor="sbp" className="flex-1 cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <Icon name="Smartphone" size={20} />
                            <div>
                              <p className="font-medium">СБП</p>
                              <p className="text-sm text-gray-600">Система быстрых платежей</p>
                            </div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span>Товары ({cart.length}):</span>
                      <span>{getTotalPrice().toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Доставка:</span>
                      <span>{getDeliveryPrice() === 0 ? 'Бесплатно' : `${getDeliveryPrice().toLocaleString()} ₽`}</span>
                    </div>
                    <div className="flex justify-between text-xl font-semibold border-t pt-2">
                      <span>К оплате:</span>
                      <span>{(getTotalPrice() + getDeliveryPrice()).toLocaleString()} ₽</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                    size="lg"
                  >
                    <Icon name="ShoppingBag" size={20} className="mr-2" />
                    Оформить заказ
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    Нажимая «Оформить заказ», вы соглашаетесь с условиями использования
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;