const PresentationPage = () => {
  return (
    <>
      <section
        className="text-center py-20 bg-gradient-to-r from-purple-600 to-pink-500 text-white fade-in"
        id="about"
      >
        <h1 className="text-4xl font-bold mb-4">
          Event Ticket Booking Web App
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Browse, preview, and book your favorite events in style – from
          concerts to comedy, all in one platform.
        </p>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <section className="fade-in">
          <h2 className="text-2xl font-semibold mb-4">
            <i className="ri-information-line"></i> Project Overview
          </h2>
          <p>
            Our Event Ticket Booking application was built with a focus on user
            experience, responsive design, and ease of use. It allows users to
            explore upcoming events, view quick previews, and purchase tickets
            with an interactive UI powered by Tailwind CSS and vanilla
            JavaScript.
          </p>
        </section>

        <section id="features" className="fade-in">
          <h2 className="text-2xl font-semibold mb-4">
            <i className="ri-settings-3-fill"></i> Key Features
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>{" "}
              Modern responsive design with Tailwind CSS
            </li>
            <li>
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>{" "}
              Interactive modals and animations
            </li>
            <li>
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>{" "}
              Live price updates with dynamic summaries
            </li>
            <li>
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>{" "}
              Checkout experience with feedback validation
            </li>
            <li>
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>{" "}
              Smooth navigation and user interactions
            </li>
          </ul>
        </section>

        <section id="demo" className="fade-in">
          <h2 className="text-2xl font-semibold mb-4">
            <i className="ri-macbook-fill"></i> Live Demo
          </h2>
          <a
            href="https://ticketproevent.netlify.app/"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
          >
            🔗 Launch Application
          </a>
        </section>

        <section id="reflection" className="fade-in">
          <h2 className="text-2xl font-semibold mb-4">
            <i className="ri-lightbulb-fill"></i> Reflection and Future Work
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>{" "}
              <strong>What worked well:</strong> Tailwind CSS greatly
              accelerated UI development. Vanilla JavaScript enabled flexible
              interactivity without heavy frameworks.
            </li>
            <li>
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>{" "}
              <strong>Challenges:</strong> Dynamically managing event modals and
              checkout summaries for different event types.
            </li>
            <li>
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>{" "}
              <strong>Future improvements:</strong> Add user authentication
              (sign up, login), and develop an admin panel to manage events
              dynamically from backend.
            </li>
          </ul>
        </section>

        <section id="technical" className="fade-in">
          <h2 className="text-2xl font-semibold mb-4">
            <i className="ri-tools-fill"></i> Technical Implementation
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>{" "}
              <strong>Frontend:</strong> Built with React, using TypeScript for
              type safety and maintainability, and styled using Tailwind CSS for
              fast, responsive design.
            </li>
            <li>
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>{" "}
              <strong>Backend:</strong> Implemented with Supabase, providing
              authentication, real-time database updates, and API services
              seamlessly.
            </li>
            <li>
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>{" "}
              <strong>Database:</strong> Powered by PostgreSQL, enabling
              structured and relational data storage for events, users, and
              bookings.
            </li>
            <li>
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>{" "}
              <strong>Deployment:</strong> Application deployed and hosted via
              Netlify, ensuring continuous deployment and scalability.
            </li>
            <li>
              <i className="ri-checkbox-circle-fill text-green-500 mr-2"></i>{" "}
              <strong>Architecture Decisions:</strong> Modular component-based
              structure in React, separating UI elements, data services, and
              business logic for better maintainability.
            </li>
          </ul>
        </section>

        <section id="hours" className="fade-in">
          <h2 className="text-2xl font-semibold mb-4">
            <i className="fas fa-clock"></i> 📊 Work Hours Log
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-300 text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3">Date</th>
                  <th className="border p-3">Time Spent</th>
                  <th className="border p-3">Task</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">2.4.2025</td>
                  <td className="border p-3">3h</td>
                  <td className="border p-3">Defined use cases</td>
                </tr>
                <tr>
                  <td className="border p-3">4.4.2025</td>
                  <td className="border p-3">2h</td>
                  <td className="border p-3">
                    Built initial event browsing page
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">6.4.2025</td>
                  <td className="border p-3">4h</td>
                  <td className="border p-3">
                    Created ticket booking functionality
                  </td>
                </tr>
                <tr>
                  <td className="border p-3">10.4.2025</td>
                  <td className="border p-3">5h</td>
                  <td className="border p-3">
                    Integrated checkout and summary
                  </td>
                </tr>
                <tr className="font-bold">
                  <td className="border p-3">Total</td>
                  <td className="border p-3">63h</td>
                  <td className="border p-3">Full project build</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  )
}

export default PresentationPage
