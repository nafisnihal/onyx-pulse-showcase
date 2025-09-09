import { Badge } from '@/components/ui/badge'
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react'

export const Footer = () => {
  const footerLinks = {
    Products: [
      { label: "ONYX Device", href: "#onyx" },
      { label: "PULSE System", href: "#pulse" },
    ],
    Support: [
      { label: "Help Center", href: "#help" },
      { label: "User Guides", href: "#guides" },
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  };

  const socialLinks = [
    {
      icon: (
        <Instagram className="w-5 h-5 bg-gradient-to-tr from-pink-500 via-purple-500 to-yellow-500 rounded-full" />
      ),
      href: "#instagram",
      label: "Instagram",
    },
    {
      icon: <Twitter className="w-5 h-5 text-[#1DA1F2]" />,
      href: "#twitter",
      label: "Twitter",
    },
    {
      icon: <Facebook className="w-5 h-5 text-blue-700" />,
      href: "#facebook",
      label: "Facebook",
    },
    {
      icon: <Youtube className="w-5 h-5 text-[#FF0000]" />,
      href: "#youtube",
      label: "YouTube",
    },
  ];

  return (
    <footer className="gradient-secondary border-t border-border/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 ">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="text-3xl font-bold ">INFLAVE</div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Crafting the future of premium vaping experiences through
                innovative technology, elegant design, and uncompromising
                quality.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@inflave.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+* (***) *** ****</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-medium text-lg">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-smooth flex items-center group"
                    >
                      {link.label}
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-end items-center absolute bottom-16 right-7">
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground text-sm mr-4">
              Follow us:
            </span>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-3 bg-card hover:bg-card/80 rounded-xl border border-border/50 hover:border-primary/50 transition-smooth group"
                aria-label={social.label}
              >
                <div className="group-hover:text-primary transition-colors">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Legal Notice */}
      </div>
      <div className="mb-8  border-t border-border/20 text-center">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl mx-auto">
          WARNING: This product contains nicotine. Nicotine is an addictive
          chemical. This product is intended for use by adults 21 years of age
          or older. Keep out of reach of children and pets. Not for sale to
          minors.
        </p>
      </div>
    </footer>
  );
}