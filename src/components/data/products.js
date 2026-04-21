import soapImage from "../../assets/images/soap.jpg";
import yoghurtImage from "../../assets/images/yoghurt.jpg";
import cheeseImage from "../../assets/images/cheese.jpg";
import riceImage from "../../assets/images/rice.jpg";
import butterImage from "../../assets/images/butter.jpg";
import coconutSoap from "../../assets/images/coconut-soap.jpg";

const products = [
    {
        id: 1,
        name: 'Soap',
        price: 100,
        originalPrice: 150,
        rating: 4.8,
        reviews: 93,
        description: 'A gentle cleansing bar formulated for everyday freshness, with a clean finish and a mild fragrance suitable for daily use.',
        image: soapImage,
    },

    {
        id: 2,
        name: 'Butter',
        price: 300,
        originalPrice: 500,
        rating: 4.7,
        reviews: 723,
        description: 'Rich and smooth table butter prepared to deliver consistent taste and texture for cooking, baking, and everyday meals.',
        image: butterImage,
    },
    {
        id: 3,
        name: 'Cheese',
        price: 500,
        originalPrice: 700,
        rating: 4.3,
        reviews: 436,
        description: 'A carefully selected cheese variety with a balanced flavor profile, ideal for breakfast platters, sandwiches, and light snacks.',
        image: cheeseImage,
    },
    {
        id: 4,
        name: 'Yoghurt',
        price: 500,
        originalPrice: 1000,
        rating: 4.9,
        reviews: 4847,
        description: 'Premium quality cheese offering a smooth texture and refined taste, suitable for serving, cooking, and entertaining guests.',
        image: yoghurtImage,
    },
    {
        id: 5,
        name: 'Coconut Soap',
        price: 100,
        originalPrice: 150,
        rating: 4.8,
        reviews: 93,
        description: 'A dependable soap bar designed for regular use, offering a refreshing wash and a neat, comfortable feel after every use.',
        image: coconutSoap,
    },

    {
        id: 6,
        name: 'Rice',
        price: 300,
        originalPrice: 500,
        rating: 4.7,
        reviews: 723,
        description: 'A practical kitchen butter with a creamy finish, well suited for spreading, frying, and enhancing everyday recipes.',
        image: riceImage,
    },
]

export default products;
