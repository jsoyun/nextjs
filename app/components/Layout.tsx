function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <li>home</li>
      </nav>
      {children}
    </div>
  );
}
export default Layout;
