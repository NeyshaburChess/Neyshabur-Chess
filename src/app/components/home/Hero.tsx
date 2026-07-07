"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto py-20 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gold-400 mb-4">
          هیات شطرنج شهرستان نیشابور
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          برگزاری مسابقات، آموزش حرفه‌ای و توسعه شطرنج در نیشابور.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-gold-500 text-navy-950 font-semibold">
            مسابقات پیش‌رو
          </button>
          <button className="px-6 py-3 rounded-full border border-gold-500 text-gold-400">
            عضویت و ثبت‌نام
          </button>
        </div>
      </motion.div>
    </section>
  );
}