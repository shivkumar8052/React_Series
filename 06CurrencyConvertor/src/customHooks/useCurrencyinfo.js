import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {

        fetch(`https://api.frankfurter.dev/v2/rates?base=${currency}`)
            .then((res) => res.json())
            .then((res) => {

                // console.log("API response:", res);

                const rates = {};//empty object creating ...........

                res.forEach((item) => {
                    rates[item.quote] = item.rate; // taking rates
                });

                setData(rates);
                
            });

    }, [currency]);
    
    return data;
}

export default useCurrencyInfo;