export default function TermsPage() {
  return (
    <div className="section-padding py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-bebas text-5xl text-secondary mb-8">
          Terms of <span className="text-gradient">Service</span>
        </h1>
        
        <div className="prose prose-lg font-barlow text-gray-600 space-y-6">
          <p className="text-xl">
            Welcome to Super Mario&apos;s Emporium. By using our website and purchasing from us, you agree to these terms.
          </p>

          <section>
            <h2 className="font-bebas text-2xl text-secondary mt-8 mb-4">1. Products & Availability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All products are subject to availability. Stock changes frequently.</li>
              <li>Product images are for illustration. Actual items may vary slightly.</li>
              <li>We describe all items honestly, including any defects or wear.</li>
              <li>Prices are in GBP and include VAT where applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bebas text-2xl text-secondary mt-8 mb-4">2. Orders & Payment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Orders are confirmed once payment is received.</li>
              <li>We accept card payments, PayPal, and cryptocurrency.</li>
              <li>Crypto payments are final and non-refundable to the same wallet.</li>
              <li>We reserve the right to cancel orders if items become unavailable.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bebas text-2xl text-secondary mt-8 mb-4">3. Delivery</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>UK delivery typically takes 2-5 business days.</li>
              <li>International shipping times vary by destination.</li>
              <li>Risk of loss transfers to you upon delivery.</li>
              <li>Collection available by appointment.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bebas text-2xl text-secondary mt-8 mb-4">4. Returns & Refunds</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>14-day return policy for most items in original condition.</li>
              <li>Items marked &quot;Final Sale&quot; cannot be returned.</li>
              <li>Refunds processed within 5 business days of receiving the return.</li>
              <li>See our <a href="/returns" className="text-primary hover:underline">Returns Policy</a> for full details.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bebas text-2xl text-secondary mt-8 mb-4">5. Limitation of Liability</h2>
            <p>
              We provide products &quot;as is&quot; and make no warranties beyond what is stated in the product description. 
              Our liability is limited to the purchase price of the item.
            </p>
          </section>

          <section>
            <h2 className="font-bebas text-2xl text-secondary mt-8 mb-4">6. Contact</h2>
            <p>
              Questions about these terms? <a href="/contact" className="text-primary hover:underline">Contact us</a> and we&apos;ll be happy to help.
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
