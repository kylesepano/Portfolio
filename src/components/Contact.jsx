import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const bounce = { type: "spring", stiffness: 300, damping: 15 };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio message from ${form.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Check your connection and try again.");
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={bounce}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Let's <span className="text-violet-400">Talk</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={bounce}
            className="space-y-6"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              Have a project in mind or just want to say hi? Drop me a message
              and I'll get back to you soon!
            </p>
            {[
              { icon: Mail, label: "Email", value: personalInfo.email },
              {
                icon: MapPin,
                label: "Location",
                value: "Cagayan de Oro, Philippines",
              },
            ].map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...bounce, delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl"
              >
                <div className="p-3 bg-violet-500/20 rounded-xl">
                  <Icon size={20} className="text-violet-400" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">{label}</div>
                  <div className="text-gray-200">{value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...bounce, delay: 0.1 }}
            className="space-y-4"
          >
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl
                         text-gray-200 placeholder-gray-500 outline-none
                         focus:border-violet-500/50 focus:bg-violet-500/5 transition"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl
                         text-gray-200 placeholder-gray-500 outline-none
                         focus:border-violet-500/50 focus:bg-violet-500/5 transition"
            />
            <textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl
                         text-gray-200 placeholder-gray-500 outline-none resize-none
                         focus:border-violet-500/50 focus:bg-violet-500/5 transition"
            />

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-sm px-2">
                <AlertCircle size={16} />
                {errorMsg}
              </div>
            )}

            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{
                scale: status === "sending" ? 1 : 1.05,
                y: status === "sending" ? 0 : -2,
              }}
              whileTap={{ scale: status === "sending" ? 1 : 0.95 }}
              transition={bounce}
              className="w-full flex items-center justify-center gap-2 px-8 py-4
                         font-semibold rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500
                         shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-shadow
                         disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" && "Sending..."}
              {status === "success" && (
                <>
                  <CheckCircle size={20} /> Message Sent!
                </>
              )}
              {(status === "idle" || status === "error") && (
                <>
                  <Send size={20} /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
