export default function PlayerSelect({ label, value, onChange }) {
  return (
    <div className="players">
      <h2>{label}</h2>
      <select value={value} onChange={onChange}>
        <option value="0"> 👋🏻 Seleccione</option>
        <option value="1"> 🪨 Piedra ✊🏻</option>
        <option value="2"> 📄 Papel ✋🏻</option>
        <option value="3"> ✂️ Tijera ✌🏻</option>
        <option value="4"> 🦎 Lagarto 🦎</option>
        <option value="5"> 🖖🏻 Spock 🖖🏻</option>
      </select>
    </div>
  );
}
