import "./Product.css"
import Price from "./Price.jsx"

function Product({title, idx}){
    let oldPrices = ["12,323", "11,234", "10,432", "9,323"];
    let newPrices = ["11,303", "10,200", "8,402", "8,399"];
    let description = [["9,000 DPI", "5 Programmable button"],["intuitive surface", "Designed for iPad Pro"], ["designed for iPad Pro", "intuitive surface"], ["wireless", "intuitive surface"]]; 
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;