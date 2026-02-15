import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="bg-black text-white font-sans">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-neutral-800">
        <h1 className="text-2xl font-bold">Driven Detail Automotive</h1>
        <div className="space-x-6 text-gray-300">
          <a href="#home" className="hover:text-white">Home</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#booking" className="hover:text-white">Booking</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black to-neutral-900">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
          Driven Detail Automotive
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mb-8">
          Precision. Shine. Driven. Professional automotive cleaning that restores your vehicle inside and out.
        </p>
        <a
          href="#booking"
          className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Book Now
        </a>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-8 bg-black">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* BASIC */}
          <div className="bg-neutral-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Basic Clean – $30</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Exterior hand wash</li>
              <li>Wheel clean</li>
              <li>Interior vacuum</li>
              <li>Dashboard wipe</li>
            </ul>
          </div>

          {/* FULL */}
          <div className="bg-neutral-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Full Clean – $45</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Everything in Basic</li>
              <li>Interior deep clean</li>
              <li>Window polish</li>
              <li>Tyre shine</li>
            </ul>
          </div>

          {/* PREMIUM */}
          <div className="bg-neutral-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Premium Clean – $60</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Everything in Full</li>
              <li>Full interior shampoo</li>
              <li>Paint protection wax</li>
            </ul>
          </div>

        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-20 bg-neutral-950">
        <h2 className="text-4xl font-bold text-center mb-12">
          Book Your Appointment
        </h2>

        <div className="max-w-xl mx-auto bg-neutral-900 p-8 rounded-2xl space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 rounded-lg bg-black border border-gray-700"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 rounded-lg bg-black border border-gray-700"
          />

          <input
            type="text"
            placeholder="Preferred Date (dd/mm/yyyy)"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-4 rounded-lg bg-black border border-gray-700"
          />

          <p className="text-gray-400 text-center text-sm">
            Pay securely online or in cash on arrival.
          </p>

          <div className="space-y-4 pt-6">

            <a
              href="https://buy.stripe.com/test_3cI00l8V57GBh16bJnbV601"
              target="_blank"
              className="block text-center bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Book Basic Clean
            </a>

            <a
              href="https://buy.stripe.com/test_eVq9AV5ITe4Z7qw4gVbV602"
              target="_blank"
              className="block text-center bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Book Full Clean
            </a>

            <a
              href="https://buy.stripe.com/test_9B66oJ0ozaSN5iocNrbV603"
              target="_blank"
              className="block text-center bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Book Premium Clean
            </a>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-black text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-400">
          Email: DrivenDetailAutomotive@gmail.com
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 border-t border-neutral-800">
        © {new Date().getFullYear()} Driven Detail Automotive
      </footer>

    </div>
  );
}
