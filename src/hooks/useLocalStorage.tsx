import { useEffect, useState } from "react";

type StorageKey = 'productsInCart'

export function useLocalStorage<G>(key: StorageKey, defaultValue: G) {
    const [value, setValue] = useState<G>(() => {
        const localStorageValue = localStorage.getItem(key);

        return localStorageValue
            ? JSON.parse(localStorageValue)
            : defaultValue;        
    });

    useEffect(() => {
        if (value) {
            localStorage.setItem(key, JSON.stringify(value));
        } else {
            localStorage.removeItem(key);        
        }
    }, [key, value]);

    return { value, setValue };
}
