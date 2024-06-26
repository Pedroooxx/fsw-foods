import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import ProductsList from "./_components/product-list";
import Search from "./_components/search";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { db } from "./_lib/prisma";
import PromoBanner from "./_components/promo-banner";
import RestaurantList from "./_components/restaurant-list";


const Home = async () => {

  const products = await db.product.findMany({
    where: {
        discountPercentage: {
            gt: 0,
        }
    },
    take: 10,
    include: {
        restaurant: {
            select: {
                name: true,
            },
        },
    },
})

  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>
      
      <div className="px-5 pt-6">
        <PromoBanner src="/promo-banner-01.png" alt="Até 30% de desconto em Pizzas!"/>
      </div>

      <div className="pt-6 space-y-4">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button variant="ghost" className="h-fit p-0 text-primary hover:bg-transparent">
            Ver Todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductsList products={products} />
      </div>

      <div className="px-5 pt-6">
        <PromoBanner src="/promo-banner-02.png" alt="a partir de R$17,90 em Lanches!"/>
      </div>

      <div className="py-6 space-y-4">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Restaurantes Recomendados</h2>
          <Button variant="ghost" className="h-fit p-0 text-primary hover:bg-transparent">
            Ver Todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <RestaurantList />
      </div>
      
    </>
  );
}

export default Home;



