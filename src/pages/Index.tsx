
import { ArrowRight, CreditCard, LineChart, PiggyBank, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sage-50 to-white">
        <div className="container px-4 py-32 mx-auto">
          <div className="flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-1.5 text-sm font-medium text-sage-700 bg-sage-100 rounded-full mb-8"
            >
              Your finances, simplified
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Track all your expenses
              <br />
              <span className="text-sage-500">in one place</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Connect all your bank accounts and financial apps to get a complete view of your spending habits. Smart insights help you save more.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group flex items-center gap-2 px-8 py-4 text-white bg-sage-500 rounded-full hover:bg-sage-600 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to manage your money
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features that help you take control of your finances
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card hover-card p-6 rounded-2xl"
              >
                <feature.icon className="w-12 h-12 text-sage-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-sage-50">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-sage-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to take control of your finances?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of users who are already saving money with Trace
            </p>
            <button className="group flex items-center gap-2 px-8 py-4 text-white bg-sage-500 rounded-full hover:bg-sage-600 transition-colors mx-auto">
              Start Saving Today
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: Wallet,
    title: "All Accounts",
    description: "Connect all your financial accounts in one secure dashboard",
  },
  {
    icon: LineChart,
    title: "Smart Analytics",
    description: "Get insights into your spending patterns and habits",
  },
  {
    icon: PiggyBank,
    title: "Save Money",
    description: "Set and track savings goals with automated recommendations",
  },
  {
    icon: CreditCard,
    title: "Bill Tracking",
    description: "Never miss a payment with automated bill reminders",
  },
];

const stats = [
  {
    value: "10M+",
    label: "Transactions Tracked",
  },
  {
    value: "$2.5B",
    label: "Money Saved",
  },
  {
    value: "500K+",
    label: "Happy Users",
  },
];

export default Index;
