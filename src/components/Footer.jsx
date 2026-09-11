export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <p>&copy; {year} Meriem ES-SADIK. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
