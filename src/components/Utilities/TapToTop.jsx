import { useEffect, useState } from "react";
import { FaAnglesLeft } from "react-icons/fa6";
import { scrollToTop } from "./RequiredFunctions";

function TapToTop() {
	const [scrollTop, setScrollTop] = useState(0);

	// --------------------------------------------------
	// ***************** TAP TO TOP *****************
	// --------------------------------------------------
	const handleScroll = () => {
		setScrollTop(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		//WHEN COMPONENT UNMOUNTS
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	// --------------------------------------------------

	return (
		<div>
			{scrollTop > 700 && (
				<FaAnglesLeft
					className="rotate-90 w-10 h-10 bg-orange-500 p-3 rounded-full shadow-xl fixed bottom-10 right-10 z-50 cursor-pointer text-white opacity-40 hover:opacity-100 hover:scale-125 transition"
					onClick={scrollToTop}
				/>
			)}
		</div>
	);
}

export default TapToTop;
