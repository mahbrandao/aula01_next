import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">Meu site</div>
      <nav className="nav-links">
        <Link href="/" className="nav-link">Início</Link>
        <Link href="/sobre" className="nav-link">Sobre</Link>
        <Link href="/meusPlanos" className="nav-link">Meus Planos</Link>
      </nav>
    </header>
  );
}
