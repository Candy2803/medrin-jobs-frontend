import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: March 15, 2024</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose max-w-none"
        >
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using Medrin Jobs, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Accounts</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must not share your account credentials with others</li>
              <li>We reserve the right to suspend or terminate accounts that violate our terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Job Postings</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Job postings must be accurate and comply with all applicable laws</li>
              <li>We reserve the right to remove job postings that violate our policies</li>
              <li>Employers are responsible for the content of their job postings</li>
              <li>Job postings must not discriminate based on protected characteristics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="text-gray-600 mb-4">
              For employer accounts:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Payment is required for premium features and job postings</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>We may modify our fees with prior notice</li>
              <li>Subscription plans auto-renew unless cancelled</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-600">
              All content on Medrin Jobs, including logos, text, and graphics, is protected by intellectual property rights. You may not use our content without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600">
              Medrin Jobs is not responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>The accuracy of job postings</li>
              <li>The conduct of users</li>
              <li>Employment decisions made through our platform</li>
              <li>Any damages arising from use of our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
            <p className="text-gray-600">
              For questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 text-gray-600">
              <p>Email: legal@medrinjobs.com</p>
              <p>Address: Ngong Lane Plaza, First Floor, Room 103, Ngong Road, Nairobi, Kenya</p>
              <p>Phone: +254712345678</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;