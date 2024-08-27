import Header from '../components/Header';
import Category from '../components/Category';
import Sort from '../components/Sort';
import PizzaList from '../components/PizzaList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Sceleton from '../components/Sceleton';

export default function Home({search}) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryType, setCategory] = useState(0);
    const scelet = Array(8).fill(0);

    const filteredData = data.filter(pizza => 
        (categoryType === 0 || pizza.category === categoryType) &&
        (search === "" || pizza.name.toLowerCase().includes(search.toLowerCase()))
    );

    useEffect(() => {
        axios
            .get("https://99880379310eba92.mokky.dev/reacrPizza")
            .then((res) => {
                setData(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Ошибка при получении данных:', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <div className='flex items-center justify-between mt-10'>
                <Category setCategory={setCategory} />
                <Sort />
            </div>
            <div className='mt-10'>
                <div className='mb-10'><h2 className='font-bold text-3xl'>Все пиццы</h2></div>
                <div className='grid grid-cols-4 gap-5'>
                    {isLoading ? (
                        scelet.map((_, index) => <Sceleton key={index} />)
                    ) : (
                        filteredData.map((pizza) => (
                            <PizzaList key={pizza.id} {...pizza} />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}
