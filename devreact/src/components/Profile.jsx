const profile = {
  name: "John Cena",
  imageURL:
    "https://img.freepik.com/premium-vector/wrestler-john-cena-vector-illustration-flat-2_764382-112542.jpg",
  imageSize: 200,
};

function Profile() {
  return (
    <>
      <h1>{profile.name}</h1>
      <img
        src={profile.imageURL}
        alt={"photo of" + profile.name}
        title={profile.name}
        style={{
          height: profile.imageSize,
          width: profile.imageSize,
          borderRadius: "50%",
        }}
      />
    </>
  );
}

export default Profile;
