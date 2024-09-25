// Komponen Header
const Header = () => {
    return (
      <header className="header">
        <h1>Buat Header Menggunakan JSX</h1>
        <p>Tutorial JSX Sederhana</p>
      </header>
    );
  };
  
  // Komponen Table
  const Table = () => {
    return (
      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th>Nama</th>
            <th>Gender</th>
            <th>Jurusan</th>
            <th>Whatsapp</th>
            <th>Alamat</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(5)].map((_, colIndex) => (
                <td key={colIndex}>
                  Baris {rowIndex + 1} Kolom {colIndex + 1}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  // Komponen utama (App)
  const App = () => {
    return (
      <div>
        <Header />
        <Table />
      </div>
    );
  };
  
  // Render App ke DOM
  ReactDOM.render(<App />, document.getElementById("App"));