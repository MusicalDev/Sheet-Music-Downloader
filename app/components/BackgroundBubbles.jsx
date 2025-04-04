export default function BackgroundBubbles() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-800">
            <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Contenedor central para todas las burbujas */}
                <div className="relative w-[1000px] h-[1000px]">
                    {/* Primera burbuja */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50">
                        <div className="circle-obj h-[900px] w-[700px] rounded-[40rem] mix-blend-multiply"></div>
                    </div>

                    {/* Segunda burbuja */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50">
                        <div className="circle-obj2 h-[600px] w-[600px] rounded-[40rem] mix-blend-multiply"></div>
                    </div>

                    {/* Tercera burbuja */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50">
                        <div className="circle-obj3 h-[600px] w-[600px] rounded-[40rem] mix-blend-multiply"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}