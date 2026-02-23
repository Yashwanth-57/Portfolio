import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import Particles from "./Particles";

export default function Feedback() {
  // State for user input
  const [form, setForm] = useState({ name: "", message: "", rating: 5 });
  const [hover, setHover] = useState(null);

  // State for all feedbacks (initial pre-loaded reviews)
  const [feedbacks, setFeedbacks] = useState([
    {
      name: "John Doe",
      rating: 5,
      message:
        "Yashwanth's portfolio is incredible! Super clean, animated, and professional.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      message:
        "Highly skilled full-stack developer. His projects are optimized and visually stunning!",
    },
  ]);

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbacks([form, ...feedbacks]); // Add new review at top
    setForm({ name: "", message: "", rating: 5 });
  };

  return (
    <section
      id="feedback"
      className="min-h-screen px-6 py-24 flex flex-col items-center bg-gradient-to-b from-[#050816] to-[#0f172a]"
    >
              {/* className="min-h-screen flex items-center px-6 py-28 bg-gradient-to-b from-[#050816] to-[#0f172a] relative overflow-hidden" */}

        <Particles count={30} color="bg-pink-500/30" />
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        ⭐ Give & See Feedback ⭐
      </motion.h2>

      {/* Feedback Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl mb-12 shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full mb-4 p-3 border rounded bg-white/10 text-white placeholder-gray-300"
          required
        />

        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full mb-4 p-3 border rounded bg-white/10 text-white placeholder-gray-300"
          required
        />

        {/* Star Rating */}
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`text-2xl cursor-pointer ${
                (hover || form.rating) >= star ? "text-yellow-400" : "text-gray-500"
              }`}
              onClick={() => setForm({ ...form, rating: star })}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(null)}
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-500 text-white p-3 rounded-full transition shadow-lg"
        >
          Submit Feedback
        </button>
      </motion.form>

      {/* Display Reviews */}
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
        {feedbacks.map((fb, idx) => (
          <motion.div
            key={idx}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full md:w-80 hover:scale-105 transition-transform shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            {/* Stars */}
            <div className="flex mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  className={`${
                    star <= fb.rating ? "text-yellow-400 animate-pulse" : "text-gray-500"
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-300 mb-4">{fb.message}</p>
            <h3 className="text-white font-semibold">{fb.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
