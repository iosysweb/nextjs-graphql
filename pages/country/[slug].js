import { useRouter } from "next/router";

const Country = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <p>Country: {slug}</p>
      <div>
        Click <span onClick={() => router.push("/country")}>Back</span> to read more
      </div>
    </div>
  );
};

export default Country;
