import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import ProductsList from "./_components/products-list";
import Search from "./_components/search";
import Image from "next/image";
import { Button } from "./_components/ui/button";
import { ChevronRightIcon } from "lucide-react";


const Home = () => {

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
        <Image src="/promo-banner-01.png"
          alt="Até 30% de desconto em Pizzas"
          height={0}
          width={0}
          className="w-full h-auto object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>

      <div className="pt-6 space-y-4">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button variant="ghost" className="h-fit p-0 text-primary hover:bg-transparent">
            Ver Todos
            <ChevronRightIcon size={16} />
          </Button>
        </div>
        <ProductsList />
      </div>
    </>
  );
}

export default Home;



