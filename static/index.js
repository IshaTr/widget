const script = document.createElement("script");
script.src="./static/widget.js";

script.onload = () => {
    addDiscountedPrice();
}

document.body.appendChild(script);
