// "use client";

// import { useState } from "react";

// export default function SheetMusicDownloader() {
//     const [formData, setFormData] = useState({
//         instrumento: "",
//         id: "",
//         music: "",
//         tamaño: "",
//         numero: "",
//         paginas: "",
//     });

//     const [isLoading, setIsLoading] = useState(false);
//     const [showSuccess, setShowSuccess] = useState(false);
//     const [showError, setShowError] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setShowError(false);

//         // Set timeout for network issues
//         const networkTimeout = setTimeout(() => {
//             setIsLoading(false);
//             setErrorMessage(
//                 "No se pudo conectar con el servidor. Verifique su conexión a internet."
//             );
//             setShowError(true);
//         }, 15000);

//         try {
//             const response = await fetch("http://127.0.0.1:5000/descargar_zip", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(formData),
//             });

//             // Clear timeout since we got a response
//             clearTimeout(networkTimeout);
//             setIsLoading(false);

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 setErrorMessage(errorData.error || "Ocurrió un error.");
//                 setShowError(true);
//                 throw new Error(errorData.error || "Error desconocido");
//             }

//             const blob = await response.blob();
//             const url = window.URL.createObjectURL(blob);
//             const a = document.createElement("a");
//             a.href = url;
//             a.download = `${formData.instrumento}_partituras.zip`;
//             a.click();
//             window.URL.revokeObjectURL(url);

//             setShowSuccess(true);
//         } catch (error) {
//             clearTimeout(networkTimeout);
//             console.error("Error:", error);
//             setIsLoading(false);

//             if (!navigator.onLine) {
//                 setErrorMessage("Error. No hay conexión.");
//             } else {
//                 setErrorMessage(
//                     "No se pudo descargar la partitura. Error de conexión."
//                 );
//             }
//             setShowError(true);
//         }
//     };

//     return (

//         <section className="font-outfit bg-transparent w-full h-auto flex items-center justify-center overflow-hidden">
//             <div
//                 className="max-w-lg mx-auto relative overflow-hidden z-10 bg-gray-900 p-8 rounded-3xl shadow-md 
//         before:w-24 before:h-24 before:absolute before:bg-[#2dd4bf]/40 before:rounded-full before:-z-10 before:blur-2xl 
//         after:w-32 after:h-32 after:absolute after:bg-[#5154ee]/40 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
//             >
//                 <h2 className="text-2xl font-ovo text-light mb-6">Download Sheet Music</h2>
//                 <form onSubmit={handleSubmit} className="font-ovo">

//                     <div className="mb-4">
//                         <label className="block text-md font-medium text-gray-300" htmlFor="instrumento">Instrument:</label>
//                         <input
//                             className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-xl text-light focus:outline-none focus:ring-1 focus:ring-purple-600 "
//                             type="text"
//                             name="instrumento"
//                             id="instrumento"
//                             value={formData.instrumento}
//                             placeholder="e.g., Oboe 1"
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-md font-medium text-gray-300" htmlFor="id">ID:</label>
//                         <input
//                             className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-xl text-light focus:outline-none focus:ring-1 focus:ring-purple-600"
//                             type="text"
//                             name="id"
//                             id="id"
//                             value={formData.id}
//                             placeholder="e.g., 5184-107"
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-md font-medium text-gray-300" htmlFor="music">Type of score:</label>
//                         <input
//                             className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-xl text-light focus:outline-none focus:ring-1 focus:ring-purple-600"
//                             type="text"
//                             name="music"
//                             id="music"
//                             value={formData.music}
//                             placeholder="e.g., MP or MS"
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-md font-medium text-gray-300" htmlFor="size">Size:</label>
//                         <input
//                             className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-xl text-light focus:outline-none focus:ring-1 focus:ring-purple-600"
//                             type="text"
//                             name="tamaño"
//                             id="tamaño"
//                             value={formData.tamaño}
//                             placeholder="e.g., 1200 - 3000"
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-md font-medium text-gray-300" htmlFor="numero">Number:</label>
//                         <input
//                             className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-xl text-light focus:outline-none focus:ring-1 focus:ring-purple-600"
//                             type="text"
//                             name="numero"
//                             id="numero"
//                             value={formData.numero}
//                             placeholder="e.g., 5"
//                             onChange={handleChange}
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-md font-medium text-gray-300" htmlFor="paginas">Pages:</label>
//                         <input
//                             className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-xl text-light focus:outline-none focus:ring-1 focus:ring-purple-600"
//                             type="text"
//                             name="paginas"
//                             id="paginas"
//                             value={formData.paginas}
//                             placeholder="e.g., 1-5"
//                             onChange={handleChange}
//                         />
//                     </div>
                    
//                     <div className="flex justify-center items-center mt-8">
//                         <button
//                             className="w-full text-xl bg-gradient-to-r from-[#2dd4bf] via-[#6e70e6]  to-[#5154ee] text-light px-4 py-2 font-outfit rounded-xl hover:opacity-90 hover:scale-99 transition duration-200 ease-in-out"
//                             type="submit"
//                         >
//                             Download
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </section>

//     );
// }


        //     <section className="flex h-[75vh] w-[300px] lg:w-[450px]md:w-[350px] justify-center items-center px-4">
        //     <div className="max-w-4xl w-full h-full bg-white/10 rounded-3xl p-4 shadow-lg font-outfit text-xl flex flex-col">

        //       <header className="bg-indigo-600 text-white p-6 mb-4 rounded-2xl">
        //         <h1 className="text-xl text-center">Download Sheet Music</h1>
        //       </header>

        //       <main className="w-full flex-grow flex flex-col justify-center">
        //         <form onSubmit={handleSubmit} className="w-full h-full p-4 bg-white rounded-2xl shadow-md flex flex-col justify-around">
        //           <div className="space-y-3 justify-center items-center">
        //             {["instrumento", "id", "music", "tamaño", "numero", "paginas"].map((field) => (
        //               <div key={field}>
        //                 <label htmlFor={field} className="block text-gray-700 text-lg mb-1 capitalize">
        //                   {field}:
        //                 </label>
        //                 <input
        //                   type="text"
        //                   id={field}
        //                   name={field}
        //                   value={formData[field]}
        //                   onChange={handleChange}
        //                   className="w-full px-2 py-1 border border-gray-300 rounded-md text-sm"
        //                 />
        //               </div>
        //             ))}
        //           </div>

        //           <button type="submit" className="w-full  bg-indigo-600 hover:bg-indigo-700 text-white py-1.5 px-3 rounded-md text-xl">
        //             Download
        //           </button>
        //         </form>
        //       </main>
        //     </div>
        //   </section>

        "use client";

import { useState } from "react";

export default function SheetMusicDownloader() {
    const [formData, setFormData] = useState({
        instrumento: "",
        id: "",
        music: "",
        tamaño: "",
        numero: "",
        paginas: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setShowError(false);
        setShowSuccess(false);

        // Set timeout for network issues
        const networkTimeout = setTimeout(() => {
            setIsLoading(false);
            setErrorMessage(
                "No se pudo conectar con el servidor. Verifique su conexión a internet."
            );
            setShowError(true);
        }, 15000);

        try {
            const response = await fetch("http://127.0.0.1:5000/descargar_zip", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Clear timeout since we got a response
            clearTimeout(networkTimeout);
            setIsLoading(false);

            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.error || "Ocurrió un error.");
                setShowError(true);
                throw new Error(errorData.error || "Error desconocido");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${formData.instrumento}_partituras.zip`;
            a.click();
            window.URL.revokeObjectURL(url);

            setShowSuccess(true);
        } catch (error) {
            clearTimeout(networkTimeout);
            console.error("Error:", error);
            setIsLoading(false);

            if (!navigator.onLine) {
                setErrorMessage("Error. No hay conexión.");
            } else {
                setErrorMessage(
                    "No se pudo descargar la partitura. Error de conexión."
                );
            }
            setShowError(true);
        }
    };

    return (
        <section className="font-outfit bg-transparent w-full h-auto flex items-center justify-center overflow-hidden">
            <div
                className="max-w-lg mx-auto relative overflow-hidden z-10 bg-gray-900 p-8 rounded-3xl shadow-md 
        before:w-24 before:h-24 before:absolute before:bg-[#2dd4bf]/40 before:rounded-full before:-z-10 before:blur-2xl 
        after:w-32 after:h-32 after:absolute after:bg-[#5154ee]/40 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
            >
                <h2 className="text-2xl font-ovo text-light mb-6">Download Sheet Music</h2>
                
                {showSuccess && (
                    <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-xl text-green-300">
                        La partitura se ha descargado exitosamente.
                    </div>
                )}
                
                {showError && (
                    <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-xl text-red-300">
                        {errorMessage}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} className="font-ovo">
                    <div className="mb-4">
                        <label className="block text-md font-medium text-gray-300" htmlFor="instrumento">Instrument:</label>
                        <input
                            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-xl text-light focus:outline-none focus:ring-1 focus:ring-purple-600"
                            type="text"
                            name="instrumento"
                            id="instrumento"
                            value={formData.instrumento}
                            placeholder="e.g., Oboe 1"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-md font-medium text-gray-300" htmlFor="id">ID:</label>
                        <input
                            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-xl text-light focus:outline-none focus:ring-1 focus:ring-purple-600"
                            type="text"
                            name="id"
                            id="id"
                            value={formData.id}
                            placeholder="e.g., 5184-107"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-md font-medium text-gray-300" htmlFor="music">Type of score:</label>
                        <input
                            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-xl text-light focus:outline-none focus:ring-1 focus:ring-purple-600"
                            type="text"
                            name="music"
                            id="music"
                            value={formData.music}
                            placeholder="e.g., MP or MS"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-md font-medium text-gray-300" htmlFor="tamaño">Size:</label>
                        <input
                            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-xl text-light focus:outline-none focus:ring-1 focus:ring-purple-600"
                            type="text"
                            name="tamaño"
                            id="tamaño"
                            value={formData.tamaño}
                            placeholder="e.g., 1200 - 3000"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-md font-medium text-gray-300" htmlFor="numero">Number:</label>
                        <input
                            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-xl text-light focus:outline-none focus:ring-1 focus:ring-purple-600"
                            type="text"
                            name="numero"
                            id="numero"
                            value={formData.numero}
                            placeholder="e.g., 5"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-md font-medium text-gray-300" htmlFor="paginas">Pages:</label>
                        <input
                            className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-xl text-light focus:outline-none focus:ring-1 focus:ring-purple-600"
                            type="text"
                            name="paginas"
                            id="paginas"
                            value={formData.paginas}
                            placeholder="e.g., 1-5"
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="flex justify-center items-center mt-8">
                        <button
                            className="w-full text-xl bg-gradient-to-r from-[#2dd4bf] via-[#6e70e6] to-[#5154ee] text-light px-4 py-2 font-outfit rounded-xl hover:opacity-90 hover:scale-99 transition duration-200 ease-in-out disabled:opacity-50"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? "Descargando..." : "Download"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}