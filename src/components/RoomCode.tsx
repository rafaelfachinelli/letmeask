import copyImg from "../assets/images/copy.svg";

export function RoomCode() {
  return (
    <button>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #ajfg098q32hgp923r8hg</span>
    </button>
  );
}
