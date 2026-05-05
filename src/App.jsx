d:\trae-cn\20260504\A\awwwards-portfolio\preview.htmlimport React, { useEffect, useState } from "react";

const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-screen min-h-screen overflow-x-auto bg-gray-100">
      {!isReady && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
          <p className="mb-4 text-xl tracking-widest animate-pulse">
            Loading...
          </p>
          <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
            <div
              className="absolute top-0 left-0 h-full transition-all duration-300 bg-white animate-pulse"
              style={{ width: "100%" }}
            ></div>
          </div>
        </div>
      )}
      <div
        className={`${
          isReady ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-6xl font-bold text-gray-800 mb-8">
            3D Portfolio Website
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            项目已成功运行！
          </p>
          <p className="text-lg text-gray-500">
            正在逐步添加组件...
          </p>
          <div className="mt-12 p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              项目信息
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>✅ React 18.3.1</li>
              <li>✅ TailwindCSS 3.4.17</li>
              <li>✅ Vite 6.4.2</li>
              <li>✅ Three.js 0.167.1</li>
              <li>✅ GSAP 3.13.0</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
