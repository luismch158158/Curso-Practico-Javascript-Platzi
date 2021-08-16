function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    
    return precioConDescuento;
}

const coupons = [
    {
        name: "Soy Kalujo 2021",
        discount: 15,
    },
    {
        name: "Feliz Navidad Kalujo",
        discount: 30,
    },
    {
        name: "Feliz Dia Mamita Kalujo",
        discount: 25,
    },
];


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const isCouponValueValid = function(coupons){
        return coupons.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon){
        alert("El cupón " + couponValue + " no es válido");
    } 
    else {
        const descuento =userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);

        const  ResultPrecio = document.getElementById("ResultP");
        ResultPrecio.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
}