import React, { useContext } from "react";
import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

function ProductsSlider() {
	const { allProducts } = useContext(MyContext);
	const navigateTo = useNavigate();

	const handleNavigate = (product) => {
		navigateTo(`/ProductsSubCategory/${product.subCategory}`);
	};

	const productCategories = [
		{
			image: "https://assets.nikshanonline.com/wp-content/uploads/2023/10/Mobiles-1-300x193.png",
			subCategory: "mobiles",
		},
		{
			image: "https://www.myg.in/images/companies/1/untitled%20folder/BlogLAP-1.png?1676451582608",
			subCategory: "laptops",
		},
		{
			image: "https://images-cdn.ubuy.co.in/633b51122af1ce605a57ae50-10-1.jpg",
			subCategory: "tablets",
		},
		{
			image: "https://m.media-amazon.com/images/I/81CD1VoqQGL._SL1500_.jpg",
			subCategory: "mens_shirts",
		},

		{
			image: "https://m.media-amazon.com/images/I/61ai5LJMmjL._SL1500_.jpg",
			subCategory: "mens_jackets",
		},
		{
			image: "https://m.media-amazon.com/images/I/71JNSeO-nbL._SX679_.jpg",
			subCategory: "smart_watches",
		},

		{
			image: "https://rukminim2.flixcart.com/image/850/1000/kkoc70w0/shoe/y/p/b/7-grey-7-asr-max-grey-original-imafzyq2hpr7pmsq.jpeg?q=90&crop=false",
			subCategory: "mens_footwear",
		},
		{
			image: "https://m.media-amazon.com/images/I/812nLaEhA1L._SL1500_.jpg",
			subCategory: "womens_tops",
		},
		{
			image: "https://m.media-amazon.com/images/I/71FTGCh6gnL._SL1500_.jpg",
			subCategory: "jewellery_silver",
		},
		{
			image: "https://m.media-amazon.com/images/I/71JS7mbe8RL._SY395_.jpg",
			subCategory: "jewellery_gold",
		},
		{
			image: "https://m.media-amazon.com/images/I/71Wc35K+cFL._SY425_.jpg",
			subCategory: "books_programming",
		},
	];

	return (
		<div className="flex gap-3 items-center  overflow-x-scroll scroll-smooth px-2   bg-white">
			{productCategories.map((product, index) => (
				<div
					key={index}
					className="min-w-[70px] min-h-[70px] py-5 px-2 flex items-center flex-col gap-1"
					onClick={() => handleNavigate(product)}
				>
					<img
						src={product.image}
						alt=""
						className="w-[50px] h-[50px] object-contain"
					/>
					<span className="capitalize text-sm text-gray-500">
						{product.subCategory
							.replace(/_/g, " ")
							.replace(/mens/g, " ")
							.replace(/smart/g, " ")
							.replace(/wo/g, " ")
							.replace(/jewellery/g, " ")
							.replace(/books programming/g, "Books")}
					</span>
				</div>
			))}
		</div>
	);
}

export default ProductsSlider;
