export default function PrivacyPage() {
  return (
    <div className="section-padding py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-bebas text-5xl text-secondary mb-8">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        
        <div className="prose prose-lg font-barlow text-gray-600 space-y-6">
          <p className="text-xl">
            Your privacy matters to us. Here&apos;s how we handle your information at Super Mario&apos;s Emporium.
          </p>

          <section>
            <h2 className="font-bebas text-2xl text-secondary mt-8 mb-4">What We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Order Information:</strong> Name, email, address, phone number for delivery</li>
              <li><strong>Payment Details:</strong> Processed securely by PayPal/Stripe (we don&apos;t store card numbers)</li>
              <li><strong>Newsletter:</strong> Email address if you sign up for stock alerts</li>
              <li><strong>Website Usage:</strong> Anonymous analytics to improve our site</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bebas text-2xl text-secondary mt-8 mb-4">How We Use It</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and deliver your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Send stock drop notifications (if subscribed)</li>
              <li>Respond to your questions and support requests</li>
              <li>Improve our website and product offerings</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bebas text-2xl text-secondary mt-8 mb-4">We Never</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sell your personal information to third parties</li>
              <li>Send spam or share your email with marketers</li>
              <li>Store your payment card details on our servers</li>
              <li>Track you across other websites</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bebas text-2xl text-secondary mt-8 mb-4">Your Rights</h2>
            <p>You can:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request a copy of your data</li>
              <li>Ask us to delete your information</li>
              <li>Unsubscribe from emails at any time</li>
              <li>Opt out of analytics tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bebas text-2xl text-secondary mt-8 mb-4">Cookies</h2>
            <p>
              We use essential cookies to make the site work (like your shopping cart). 
              We also use anonymous analytics to understand how people use the site. 
              No advertising or tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="font-bebas text-2xl text-secondary mt-8 mb-4">Contact</h2>
            <p>
              Questions about privacy? <a href="/contact" className="text-primary hover:underline">Contact us</a> — we&apos;re happy to explain anything.
            </p>
          </section>

          <p className="text-sm text-gray-400 mt-12">
            Last updated: March 2026
          </p>
        </div>
      </div>
    </div>
  )
}
