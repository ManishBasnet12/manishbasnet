import Image from "next/image";

const loading = () => {
  return (
    <div
      style={{
        color: "white",
        position: "fixed",
        inset: "0",
        background: "black",
        zIndex: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "130px" }}>
        <Image
          src="/loadingmainlogo.png"
          width={100}
          height={100}
          alt="/loadingmainlogo"
        />
      </div>
    </div>
  );
};

export default loading;
