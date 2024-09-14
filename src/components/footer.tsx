import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Bell } from "lucide-react";

const FooterLink = ({
  href,
  children,
}: {
  href: string | null;
  children: React.ReactNode;
}) => {
  if (!href) {
    throw new Error("FooterLink requires a valid href prop");
  }

  if (!children) {
    throw new Error("FooterLink requires a valid children prop");
  }

  return (
    <a href={href} className="text-gray-300 hover:text-white transition-colors">
      {children}
    </a>
  );
};

const SocialIcon = ({
  href,
  icon: Icon,
}: {
  href: string | null;
  icon: React.ElementType | null | undefined;
}) => {
  if (!href) {
    throw new Error("SocialIcon requires a valid href prop");
  }

  if (!Icon) {
    throw new Error("SocialIcon requires a valid icon prop");
  }

  return (
    <a href={href} className="text-gray-300 hover:text-white transition-colors">
      <Icon size={24} />
    </a>
  );
};

const NotifyNowFooter = () => {
  return (
    <main className="text-white border-t bg-primary container mx-auto px-4 py-16 sm:py-24 lg:py-36 rounded-3xl transition-all hover:shadow-lg shadow-primary/40">
      <footer>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bell className="h-6 w-6" />
                <span className="text-xl font-bold">NotifyNow</span>
              </div>
              <p className="text-sm text-gray-300">
                Empowering businesses with seamless notification solutions.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <FooterLink href="#">Features</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Pricing</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Integrations</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Documentation</FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <FooterLink href="#">About Us</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Careers</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Blog</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Contact</FooterLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <FooterLink href="#">Privacy Policy</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Terms of Service</FooterLink>
                </li>
                <li>
                  <FooterLink href="#">Cookie Policy</FooterLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-50 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white mb-4 md:mb-0">
              © {new Date().getFullYear()} NotifyNow. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" icon={Facebook} />
              <SocialIcon href="#" icon={Twitter} />
              <SocialIcon href="#" icon={Linkedin} />
              <SocialIcon href="#" icon={Instagram} />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default NotifyNowFooter;
