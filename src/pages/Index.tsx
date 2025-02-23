import { ArrowRight, ChartLine, CreditCard, LineChart, PiggyBank, Wallet } from "lucide-react";
import { motion } from "framer-motion";
const Index = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sage-200 via-sage-50 to-white">
        <div className="container px-4 py-32 mx-auto">
          <div className="flex flex-col items-center text-center">
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5
          }} className="mb-12">
              <div className="inline-flex items-center gap-2 text-2xl font-bold">
                <ChartLine className="w-8 h-8 text-sage-500" strokeWidth={1.5} />
                <span className="text-gray-900">Trace</span>
              </div>
            </motion.div>
            <motion.span initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="px-4 py-1.5 text-sm font-medium text-sage-700 bg-sage-100 rounded-full mb-8">
              Your finances, simplified
            </motion.span>
            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Track all your expenses
              <br />
              <span className="text-sage-500">in one place</span>
            </motion.h1>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="text-xl text-gray-600 mb-8 max-w-2xl">
              Connect all your bank accounts and financial apps to get a complete view of your spending habits. Smart insights help you save more.
            </motion.p>
            <motion.button initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="group flex items-center gap-2 px-8 py-4 text-white bg-sage-500 rounded-full hover:bg-sage-600 transition-colors">
              Join Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-[96px]">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to manage your money
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features that help you take control of your finances
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => <motion.div key={feature.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} className="glass-card hover-card p-6 rounded-2xl">
                <feature.icon className="w-12 h-12 text-sage-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to take control of your finances?
            </h2>
            <p className="text-xl text-gray-600 mb-8">Join us and start saving money with Trace</p>
            <button className="group flex items-center gap-2 px-8 py-4 text-white bg-sage-500 rounded-full hover:bg-sage-600 transition-colors mx-auto">
              Start Saving Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>;
};
const features = [{
  icon: Wallet,
  title: "All Accounts",
  description: "Connect all your financial accounts in one secure dashboard"
}, {
  icon: LineChart,
  title: "Smart Analytics",
  description: "Get insights into your spending patterns and habits"
}, {
  icon: PiggyBank,
  title: "Save Money",
  description: "Set and track savings goals with automated recommendations"
}];
const stats = [{
  value: "10M+",
  label: "Transactions Tracked"
}, {
  value: "$2.5B",
  label: "Money Saved"
}, {
  value: "500K+",
  label: "Happy Users"
}];
export default Index;