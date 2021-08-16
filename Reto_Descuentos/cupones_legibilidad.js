function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    
    return precioConDescuento;
}

const coupons = [
    "Soy Kalujo 2021",
    "Feliz Navidad Kalujo",
    "Feliz Dia Mamita Kalujo",
];

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    if (!coupons.includes(couponValue)){
        alert("El cupón "+ couponValue + " no es válido");
    }
    else if (couponValue == "Soy Kalujo 2021"){
        descuento =15;
    }
    else if (couponValue == "Feliz Navidad Kalujo"){
        descuento =30;
    }
    else if (couponValue == "Feliz Dia Mamita Kalujo"){
        descuento =25;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);

    const  ResultPrecio = document.getElementById("ResultP");
    ResultPrecio.innerText = "El precio con descuento son: $" + precioConDescuento;
}