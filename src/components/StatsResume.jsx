import { motion } from "framer-motion";

export default function StatsResume() {
  const stats = [
    { label: "Projects", value: 12 },
    { label: "Years of Experience", value: 1 },
    { label: "Clients", value: 5 },
    { label: "Live Deployments", value: 3 }
  ];

  return (
    <section
      id="stats"
      className="relative py-28  overflow-hidden px-4"
    >
      {/* Parallax Background Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-[180px] top-[-150px] left-[-200px] rounded-full animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-[150px] bottom-[-100px] right-[-150px] rounded-full animate-pulse"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stats & Resume
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="text-4xl md:text-5xl font-bold text-purple-400">
                {stat.value}+
              </p>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="https://www.overleaf.com/download/project/69520647cca7d5b1217b2077/build/19c73779969-2ecd2255e81e02b4/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-c3d-d-f-cg1m&enable_pdf_caching=true&popupDownload=true&editorId=1ee4f58e-42d5-4500-9ef0-8448ac538355"
          target="_blank"
          className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-purple-600/40 hover:scale-105 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}
