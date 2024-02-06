import React, {useState} from 'react';
import {Button} from "primereact/button";
import {Tag} from "primereact/tag";
import {DataScroller} from "primereact/datascroller";
import {Rating} from "primereact/rating";
import {CarList} from "./styled/CarListStyled.js";

const ComponentTest = () => {
    const [products, setProducts] = useState({
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
    })

    const getSeverity = (product) => {
        switch (product) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://cdn.iset.io/assets/55268/produtos/966/adesivo-para-geladeira-homer-simpson-com-cerveja-3.jpg`}
                         alt={"homer"} />
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <div className="text-2xl font-bold text-900">Homer</div>
                                <div className="text-700">Um grande pai de Familia</div>
                            </div>
                            <div className="flex flex-column gap-2">
                                <Rating value={5} readOnly cancel={false}></Rating>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag product-category-icon"></i>
                                    <span className="font-semibold">Baita cara</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-2xl font-semibold">$1,000,000.00</span>
                            <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={0 === 'OUTOFSTOCK'}></Button>
                            <Tag value={"Macho"} severity={getSeverity(data)}></Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    return (
            <div className="card shadow-5">
                <CarList>
                    <DataScroller value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight={`${0.09388 * window.screen.height}vh`}
                                  header="Scroll Down to Load More"/>
                </CarList>
            </div>
    )
};

export default ComponentTest;