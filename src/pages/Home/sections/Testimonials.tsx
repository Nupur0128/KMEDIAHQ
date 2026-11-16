import { Quote } from "lucide-react";

const testimonials = [
  {
    label: "Client feedback",
    quote:
      "Add an approved client quote about the experience of working with KMEDIAHQ.",
    by: "Client name",
    role: "Company / role",
  },
  {
    label: "Project outcome",
    quote:
      "Add a verified testimonial describing the content delivered and its impact.",
    by: "Client name",
    role: "Company / role",
  },
  {
    label: "Partnership",
    quote:
      "Add an approved quote about communication, creative quality or consistency.",
    by: "Client name",
    role: "Company / role",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#050d0e] py-20 sm:py-24 lg:py-28 text-white">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB84A]">
            Words from our partners
          </p>

          <h2 className="mt-3 sm:mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
            Good work is better{" "}
            <span className="font-serif italic text-[#FFB84A]">
              when it works together.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-white/45">
            Replace the editorial placeholders below with approved client
            testimonials before publishing.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid min-w-0 gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <article
              key={i}
              className="flex min-w-0 flex-col justify-between rounded-2xl border border-white/10 bg-[#030809]/75 p-6 sm:p-8 transition duration-300 hover:border-white/20"
            >
              <div>
                <Quote className="mb-5 sm:mb-6 text-[#FFB84A]" size={24} />

                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#FFB84A]">
                  {item.label}
                </p>

                <blockquote className="mt-3 text-sm sm:text-base leading-relaxed text-white/65">
                  “{item.quote}”
                </blockquote>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 sm:pt-5">
                <p className="text-sm font-semibold">{item.by}</p>
                <p className="mt-0.5 text-xs text-white/40">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
