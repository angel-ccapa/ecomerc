/* eslint-disable react/prop-types */
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-100 bg-red-600 border border-transparent dark:border-gray-700 hover:border-red-500 hover:text-red-700 hover:bg-red-100 rounded-xl"
            >
                Comprar ahora
            </Button>
            <Dialog open={open} handler={handleOpen} className=" bg-red-50">
                <DialogBody className="">
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    name: e.target.value,
                                });
                            }}
                            placeholder="Nombre"
                            className="bg-red-50 border border-red-200 px-2 py-2 w-full rounded-md outline-none text-red-600 placeholder-red-300"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    address: e.target.value,
                                });
                            }}
                            placeholder="Direccion"
                            className="bg-red-50 border border-red-200 px-2 py-2 w-full rounded-md outline-none text-red-600 placeholder-red-300"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    pincode: e.target.value,
                                });
                            }}
                            placeholder="Codigo Postal"
                            className="bg-red-50 border border-red-200 px-2 py-2 w-full rounded-md outline-none text-red-600 text-red-600 placeholder-red-300"
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="Numero de celular"
                            value={addressInfo.mobileNumber}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    mobileNumber: e.target.value,
                                });
                            }}
                            placeholder="Enter your mobileNumber"
                            className="bg-red-50 border border-red-200 px-2 py-2 w-full rounded-md outline-none text-red-600 placeholder-red-300"
                        />
                    </div>

                    <div className="">
                        <Button
                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="w-full px-4 py-3 text-center text-gray-100 bg-red-600 border border-transparent dark:border-gray-700 rounded-lg"
                        >
                            Comprar ahora
                        </Button>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
};

export default BuyNowModal;
