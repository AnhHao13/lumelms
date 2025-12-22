import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Trang chủ", href: "/" },
    { name: "Khóa học", href: "/courses" },
    { name: "Dashboard", href: "/admin" },
    { name: "Đăng nhập", href: "/login" },
  ];

  const resources = [
    { name: "Tài liệu", href: "#" },
    { name: "Hướng dẫn", href: "#" },
    { name: "Blog", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  const support = [
    { name: "Liên hệ", href: "#" },
    { name: "Hỗ trợ", href: "#" },
    { name: "Chính sách bảo mật", href: "#" },
    { name: "Điều khoản sử dụng", href: "#" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={Logo} alt="LumeLSM Logo" className="size-9" />
              <span className="font-bold text-lg">LumeLSM</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Nền tảng học tập trực tuyến hàng đầu, mang đến trải nghiệm học tập tương tác và hiệu quả. 
              Khám phá các khóa học chất lượng cao mọi lúc, mọi nơi.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="size-4" />
                <span>support@lumelsm.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="size-4" />
                <span>+84 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="size-4" />
                <span>Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Liên kết nhanh</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Tài nguyên</h3>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">Hỗ trợ</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="size-5" />
                </Link>
              );
            })}
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {currentYear} LumeLSM. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}

