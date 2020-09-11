import Link from "next/link";
export const NotLoginModal = () => {
  return (
    <div className="modalContainer">
      <div className="substance">
        <h2>NOT SIGN IN</h2>
        <Link href="/login">
          <a>LOGIN PAGE</a>
        </Link>
      </div>
      <style jsx>{`
        .substance {
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
        }
        .modalContainer {
          position: absolute;
          width: 100vw;
          height: 75%;
          top: 50px;
          left: 0;
          z-index: 10;
          background: #ffffffd6;
          display: grid;
          place-items: center;
        }
        a {
          background: gray;
          color: white;
          padding: 15px 25px;
          box-shadow: 4px 5px 9px lightgray;
          border-radius: 5px;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};
