import { Prisma } from "@prisma/client";
import ProductItem from "./product-item";

interface ProductListProps {
    products: Prisma.ProductGetPayload<{
        include: {
            restaurant: {
                select: {
                    name: true,
                }
            }
        }
    }>[];
}

const ProductsList = async ({products}: ProductListProps) => {
    return (
        <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden px-5">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}
 
export default ProductsList;