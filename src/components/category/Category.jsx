import { useNavigate } from "react-router";

// category
const category = [
    {
        image: "https://casabibliacajamarca.com/wp-content/uploads/2024/01/cuaderno-classic-a4-color-entero-1020.jpg",
        name: "Cuaderno",
    },
    {
        image: "https://tienda.faber-castell.com.pe/cdn/shop/files/140733-Boligrafo-Grip-Plus-Ball-M-black-1.jpg?v=1723063074&width=1280",
        name: "Lapicero",
    },
    {
        image: "https://tiendartemas.com/cdn/shop/products/artesco-pastel.jpg?v=1671461356",
        name: "Plumon",
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj0i0p7vrjwoJnrXZy6MXKJ4LeEFK2Xby5bQ&s",
        name: "Libros",
    },
    {
        image: "https://cdn-icons-png.flaticon.com/512/7580/7580377.png",
        name: "Otros",
    },
];

const Category = () => {
    // naviaget
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div
                                        onClick={() =>
                                            navigate(`/category/${item.name}`)
                                        }
                                        className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-red-500 transition-all hover:bg-red-400 cursor-pointer mb-1 "
                                    >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=" text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase ">
                                        {item.name}
                                    </h1>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style
                dangerouslySetInnerHTML={{
                    __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n",
                }}
            />
        </div>
    );
};

export default Category;
