import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Laptop, Smartphone, Wifi } from "lucide-react";

export default function TechForSeniors() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tech Help for Seniors in Cincinnati, Ohio
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Trusted in-home tech support for seniors throughout Cincinnati and
          Hamilton County.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Cincinnati Senior Tech Support Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">
              <Laptop className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Computer Help</h3>
              <p>
                Virus removal, email setup, printer troubleshooting, and
                in-home computer support.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">
              <Smartphone className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">
                Phone & Tablet Help
              </h3>
              <p>
                iPhone, Android, and tablet lessons designed for seniors.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">
              <Wifi className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">
                WiFi & Smart Home Setup
              </h3>
              <p>
                Secure WiFi installation and smart device configuration.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Cincinnati Pricing Packages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="rounded-2xl shadow-lg border">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-2xl font-semibold">Basic Visit</h3>
                <p className="text-4xl font-bold">$99</p>
                <ul className="text-sm text-gray-600 space-y-2 mt-4">
                  <li>✔ 1 Hour In-Home Visit</li>
                  <li>✔ Device Troubleshooting</li>
                  <li>✔ Basic Virus Scan</li>
                  <li>✔ Email & Password Help</li>
                  <li>✔ Friendly Step-by-Step Guidance</li>
                </ul>
                <Button
                  className="w-full mt-4 rounded-2xl"
                  onClick={() =>
                    (window.location.href = "tel:5135551234")
                  }
                >
                  Call to Book
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-xl border-2 border-blue-600">
              <CardContent className="p-8 text-center space-y-4">
                <span className="bg-blue-600 text-white text-xs px-4 py-1 rounded-full mx-auto inline-block">
                  MOST POPULAR
                </span>
                <h3 className="text-2xl font-semibold">Device Setup</h3>
                <p className="text-4xl font-bold">$179</p>
                <ul className="text-sm text-gray-600 space-y-2 mt-4">
                  <li>✔ New Computer / Phone Setup</li>
                  <li>✔ Printer & WiFi Connection</li>
                  <li>✔ Software Installation</li>
                  <li>✔ Security & Updates Configured</li>
                  <li>✔ 30 Days Email Support</li>
                </ul>
                <Button
                  className="w-full mt-4 rounded-2xl"
                  onClick={() =>
                    (window.location.href =
                      "mailto:help@techforseniors.com")
                  }
                >
                  Email to Book
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-lg border">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-2xl font-semibold">
                  Monthly Tech Plan
                </h3>
                <p className="text-4xl font-bold">$299/mo</p>
                <ul className="text-sm text-gray-600 space-y-2 mt-4">
                  <li>✔ Unlimited Phone Support</li>
                  <li>✔ 2 In-Home Visits Per Month</li>
                  <li>✔ Priority Scheduling</li>
                  <li>✔ Ongoing Security Monitoring</li>
                  <li>✔ Family Tech Assistance Included</li>
                </ul>
                <Button
                  className="w-full mt-4 rounded-2xl"
                  onClick={() =>
                    (window.location.href =
                      "mailto:help@techforseniors.com")
                  }
                >
                  Contact to Subscribe
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <div className="space-y-4 text-lg">
            <div className="flex items-center justify-center gap-3">
              <Phone />
              <span>(513) 555-1234</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail />
              <span>help@techforseniors.com</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-600 text-white text-center py-6">
        <p>
          © {new Date().getFullYear()} Tech Help for Seniors Cincinnati. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}
