import { useRef } from "react";

export default function App() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-white/10 backdrop-blur-md bg-black/60 sticky top-0 z-50">
        <h1 className="text-xl font-bold tracking-widest bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
          Driven Detail Automotive
        </h1>

        <div className="flex gap-8 text-sm text-gray-300">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</button>
          <button onClick={() => scrollTo(servicesRef)}>Services</button>
          <button onClick={() => scrollTo(bookingRef)}>Booking</button>
          <button onClick={() => scrollTo(contactRef)}>Contact</button>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="h-[90vh] flex items-center justify-center text-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-6xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
            Driven Detail Automotive
          </h2>

          <p className="text-gray-300 mb-10 text-lg">
            Precision. Shine. Driven. Restoring your vehicle to showroom condition.
          </p>

          <button
            onClick={() => scrollTo(bookingRef)}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-gray-200 via-white to-gray-200 text-black font-bold hover:scale-105 active:scale-95 transition duration-300 shadow-xl"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section ref={servicesRef} className="py-28 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-20 bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
          Our Services
        </h3>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Basic Clean",
              price: "$30",
              stripe: "https://buy.stripe.com/test_3cI00l8V57GBh16bJnbV601",
              details: [
                "Exterior hand wash",
                "Wheel rinse",
                "Tyre clean",
                "Hand dry finish"
              ]
            },
            {
              title: "Full Clean",
              price: "$45",
              stripe: "https://buy.stripe.com/test_eVq9AV5ITe4Z7qw4gVbV602",
              details: [
                "Exterior wash",
                "Interior vacuum",
                "Dashboard wipe",
                "Windows cleaned",
                "Tyre shine"
              ]
            },
            {
              title: "Premium Clean",
              price: "$60",
              stripe: "https://buy.stripe.com/test_9B66oJ0ozaSN5iocNrbV603",
              details: [
                "Full interior deep clean",
                "Exterior wash & dry",
                "Tyre shine",
                "Interior conditioning",
                "Detailed finish inspection"
              ]
            }
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:shadow-white/10 hover:-translate-y-2 transition duration-500"
            >
              <h4 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                {service.title}
              </h4>

              <p className="text-xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                {service.price}
              </p>

              <ul className="text-gray-300 mb-8 space-y-2 text-sm">
                {service.details.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>

              <div className="space-y-3">
                <button
                  onClick={() => scrollTo(bookingRef)}
                  className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 transition"
                >
                  Book & Pay Cash
                </button>

                <a
                  href={service.stripe}
                  target="_blank"
                  className="w-full inline-block py-3 rounded-xl bg-gradient-to-r from-gray-200 via-white to-gray-200 text-black font-semibold hover:scale-105 transition text-center"
                >
                  Pay Online
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING FORM */}
      <section ref={bookingRef} className="py-28 px-6 text-center border-t border-white/10">
        <h3 className="text-4xl font-bold mb-12 bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
          Book Your Appointment
        </h3>

        <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-black border border-white/10"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 rounded-xl bg-black border border-white/10"
          />
          <input
            type="date"
            className="w-full p-4 rounded-xl bg-black border border-white/10"
          />

          <p className="text-gray-400 text-sm">
            Payment available via cash or online via Stripe.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section ref={contactRef} className="py-24 text-center border-t border-white/10">
        <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
          Contact Us
        </h3>

        <p className="text-gray-300 mb-2">Flat Bush, Auckland</p>
        <p className="text-gray-300 mb-2">027 428 1640</p>
        <p className="text-gray-300">DrivenDetailAutomotive@gmail.com</p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 border-t border-white/10">
        © {new Date().getFullYear()} Driven Detail Automotive
      </footer>

    </div>
  );
}
