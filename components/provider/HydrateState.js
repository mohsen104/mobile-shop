import { getProducts } from '@/context/cartSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function HydrateState({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("products"));
        dispatch(getProducts(storage));
    }, [dispatch]);

    return children;
}
