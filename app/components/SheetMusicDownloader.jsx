"use client";

import { useState, useEffect } from "react";

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

    useEffect(() => {
        let timeoutId;

        if (showSuccess || showError) {
            timeoutId = setTimeout(() => {
                setShowSuccess(false);
                setShowError(false);
            }, 5000); // 5 segundos
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [showSuccess, showError]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setShowError(false);
        setShowSuccess(false);

        const networkTimeout = setTimeout(() => {
            setErrorMessage(
                "No se pudo conectar con el servidor. Verifique su conexión a internet."
            );
            setShowError(true);
            setIsLoading(false);
        }, 15000);

        try {
            const response = await fetch("https://backend-downloader-2bk5.onrender.com/descargar_zip", {
            // const response = await fetch("http://127.0.0.1:5000/descargar_zip", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            clearTimeout(networkTimeout);

            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage(errorData.error || "Ocurrió un error.");
                setShowError(true);
                setIsLoading(false);
                return;
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${formData.instrumento || "partitura"}_partituras.zip`;
            a.click();
            window.URL.revokeObjectURL(url);

            setIsLoading(false);
            setShowSuccess(true);
        } catch (error) {
            console.error("Error:", error);
            clearTimeout(networkTimeout);
            
            setIsLoading(false);

            if (!navigator.onLine) {
                setErrorMessage("Error. No hay conexión.");
            } else {
                setErrorMessage("No se pudo descargar la partitura. Error de conexión.");
            }
            
            setShowError(true);
        }
    };
    
    return (
        <>
            {/* Modal de éxito */}
            {showSuccess && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-dark/20 backdrop-blur-2xl">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-green-500 max-w-xl mx-4">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <p className="text-green-300 font-medium font-outfit">La partitura se ha descargado exitosamente.</p>
                        </div>
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="mt-4 bg-green-600 hover:bg-green-700 text-white font-outfit px-4 py-2 rounded-lg w-full transition-colors"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            {/* Modal de error */}
            {showError && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-dark/20 backdrop-blur-2xl">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-red-500 max-w-xl mx-4">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            </svg>
                            <p className="text-red-300 font-medium font-outfit">{errorMessage}</p>
                        </div>
                        <button
                            onClick={() => setShowError(false)}
                            className="mt-4 bg-red-600 hover:bg-red-700 text-white font-outfit px-4 py-2 rounded-lg w-full transition-colors"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            <section className="font-outfit bg-transparent w-full min-h-screen flex items-center justify-center overflow-hidden sm:mt-0 mt-22">
                <div
                    className="max-w-lg mx-auto relative overflow-hidden z-10 bg-gray-900 p-8 rounded-3xl shadow-md 
                    before:w-24 before:h-24 before:absolute before:bg-[#2dd4bf]/40 before:rounded-full before:-z-10 before:blur-2xl 
                    after:w-32 after:h-32 after:absolute after:bg-[#5154ee]/40 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
                >
                    <h1 className="text-2xl font-ovo text-light mb-6">Download Sheet Music</h1>

                    <form onSubmit={handleSubmit} className="font-ovo">
                        <div className="mb-4">
                            <label className="block text-md font-medium text-gray-300" htmlFor="instrumento">Parts - Score:</label>
                            <input
                                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-xl text-light focus:outline-none focus:ring-1 focus:ring-purple-600"
                                type="text"
                                name="instrumento"
                                id="instrumento"
                                value={formData.instrumento}
                                placeholder="e.g.,  Oboe 1 or Beethoven: Symphony No. 5"
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
                                placeholder="e.g.,  MP or MS"
                                onChange={handleChange}
                                required
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
                                placeholder="e.g.,  5"
                                onChange={handleChange}
                                required
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
                                placeholder="e.g.,  5184-107"
                                onChange={handleChange}
                                required
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
                                placeholder="e.g.,  1200 - 3000"
                                onChange={handleChange}
                                required
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
                                placeholder="e.g.,  1-5"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="flex justify-center items-center mt-8">
                        <button
                                className={`w-full text-xl px-4 py-2 font-outfit rounded-xl transition duration-200 ease-in-out ${
                                    isLoading 
                                        ? "bg-lighthover/20 text-lighthover flex items-center justify-center animate-pulse" 
                                        : "bg-light/5 border-1 text-light hover:text-lighthover hover:opacity-90 hover:scale-99"
                                }`}
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-lighthover" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Downloading...
                                    </div>
                                ) : "Download"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}