
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
    <section className="w-full box-border bg-[#050d0e] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div
        className="mx-auto w-full min-w-0"
        style={{
          maxWidth: "1250px",
          marginInline: "auto",
        }}
      >
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#FFB84A]">
            Words from our partners
          </p>

          <h2 className="mt-5 font-heading text-4xl font-medium tracking-[-.045em] sm:text-5xl">
            Good work is better{" "}
            <span className="font-serif italic text-[#FFB84A]">
              when it works together.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/45">
            Replace the editorial placeholders below with approved client
            testimonials before publishing.
          </p>
        </div>

        <div className="mt-14 grid min-w-0 gap-4 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <article
              key={i}
              className="min-w-0 rounded-2xl border border-white/10 bg-[#030809]/65 p-7"
            >
              <Quote className="mb-8 text-[#FFB84A]" size={25} />

              <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#FFB84A]">
                {item.label}
              </p>

              <blockquote className="mt-4 min-h-28 text-base leading-8 text-white/65">
                “{item.quote}”
              </blockquote>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold">{item.by}</p>
                <p className="mt-1 text-xs text-white/35">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
