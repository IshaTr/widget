addDiscountedPrice = () => {
    let discountedPrice = null;
    const productPriceElement =
        Array.prototype.slice.call(document.querySelectorAll("p[class^=price-]"));

    productPriceElement.map(prodPrice  => {
        const price = (prodPrice.innerText.slice(2,));

        if(price < 20) {
            discountedPrice = " ";
            return
        } else if(price < 100 && price >= 20) {
            discountedPrice = price - (0.2 * price);
        } else if (price >= 100 && price < 500) {
            discountedPrice = price - (0.3 * price);
        } else if (price > 500) {
            discountedPrice = price - (0.4 * price);
        }

        discountedPrice = discountedPrice.toString()
                            .substring(0,5);

        const label = document.createElement("div");
        label.classList.add("discounted-price");
        label.innerHTML =
            `<span>
                Discount Price: $ ${discountedPrice}
            </span>`;
        prodPrice.appendChild(label);
    });
}
