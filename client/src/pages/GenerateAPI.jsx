import React, { useState } from "react";
import GeneratorForm from "../components/GeneratorForm";
import OutputPreview from "../components/OutputPreview";
import { generateFakeApi } from "../utils/generator";
import { motion } from "framer-motion";

export default function GenerateAPI() {
  const [result, setResult] = useState(null);

  async function handleGenerate(apiName, resources) {
    const r = await generateFakeApi(apiName, resources);
    setResult(r);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10"
    >
      {/* Left: Generator Form */}
      <div className="
        bg-white/80 dark:bg-gray-800/80
        backdrop-blur-2xl 
        border border-gray-200 dark:border-gray-700
        rounded-2xl 
        shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.6)]
        p-6 
        hover:scale-[1.01] transition-transform duration-300
      ">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-4">
          Configure Your Fake API
        </h2>
        <GeneratorForm onGenerate={handleGenerate} />
      </div>

      {/* Right: Output Preview */}
      <div className="
        lg:col-span-2 
        bg-grey/80 dark:bg-gray-900/90
        backdrop-blur-2xl 
        border border-gray-200 dark:border-gray-700
        rounded-2xl 
        shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.6)]
        p-6 
        hover:scale-[1.01] transition-transform duration-300
      ">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-4">
          Output Preview
        </h2>
        <OutputPreview result={result} />
      </div>
    </motion.div>
  );
}
