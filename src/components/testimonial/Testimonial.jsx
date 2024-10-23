/* eslint-disable react/no-unescaped-entities */

const Testimonial = () => {
    return (
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main  */}
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading  */}
                    <h1 className=" text-center text-3xl font-bold text-black">
                        Testimonios
                    </h1>
                    {/* para  */}
                    <br />
                    <div className="flex flex-wrap -m-4">
                        {/* Testimonial 1 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://img.freepik.com/foto-gratis/cierre-dientes-hombre-moreno-sonriendo_1187-5800.jpg"
                                />
                                <p className="leading-relaxed">
                                    Desde que empecé mi negocio, el nuevo sol ha
                                    facilitado las transacciones. Me gusta cómo
                                    su valor es más estable que el de otras
                                    monedas en la región, lo que me permite
                                    planificar mejor mis costos y precios.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                                    Ana Choque
                                </h2>
                                <p className="text-gray-500">Estudiante</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6cfhBhK3vhxHVIF-uDaeFbog7sW7wkBUbbQ&s"
                                />
                                <p className="leading-relaxed">
                                    Cuando recibí mi primera paga en soles, me
                                    sentí emocionado. Usar el símbolo S/ me hizo
                                    sentir más conectado con mi país y su
                                    economía. Además, al aprender sobre
                                    finanzas, entender el valor del sol ha sido
                                    muy útil.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                                    Iveth Mamani
                                </h2>
                                <p className="text-gray-500">Empresaria</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img
                                    alt="testimonial"
                                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWDstSqdvjS0FZcI9NORxHewwgw3a4kheXA&s"
                                />
                                <p className="leading-relaxed">
                                    Al viajar a Perú, me sorprendió lo fácil que
                                    fue cambiar mi dinero a soles. Todo estaba
                                    claramente marcado con S/, y la gente fue
                                    muy amigable. Usar la moneda local me
                                    permitió disfrutar de la cultura de una
                                    manera más auténtica.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                                    XYZ{" "}
                                </h2>
                                <p className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;
