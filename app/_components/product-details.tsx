"use client";

import Image from "next/image";
import { calculateProductTotalPrice, formatCurrency } from "../_lib/_helpers/price";
import DiscountBadge from "./discount-badge";
import { Prisma } from "@prisma/client";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface ProductDetailsProps {
    product: Prisma.ProductGetPayload<{
        include: {
            restaurant: true
        }
    }>
}

const ProductDetails = ({product}: ProductDetailsProps) => {

    return (
    <div className="p-5">
        <div className="flex items-center gap=[0.375rem]">
            <div className="relative h-6  w-6">
                <Image src={product.restaurant.imageUrl}
                    alt={product.restaurant.name}
                    fill
                    className="rounded-full object-cover"
                />
            </div>
            <span className="text-xs text-muted-foreground px-1">{product.restaurant.name}</span>
        </div>
        <h1 className="text-xl font-semibold mb-3 mt-1">{product.name}</h1>

        <div className="flex justify-between px-5">
            <div>
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">
                        {formatCurrency(Number(calculateProductTotalPrice(product)))}
                    </h2>
                    {product.discountPercentage > 0 && (
                        <DiscountBadge product={product} />
                    )}
                </div>
                    
                {product.discountPercentage > 0 && (
                    <p className="text-muted-foreground text-sm">
                    De: {formatCurrency(Number(product.price))}
                    </p>
                )}
                <div className="flex gap-3 items-center">
                    <Button size="icon" variant="ghost" className="border-muted-foreground border border-dolid">
                        <ChevronLeftIcon />
                    </Button>
                    1
                    <Button  size="icon">
                        <ChevronRightIcon />
                    </Button>    
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default ProductDetails;