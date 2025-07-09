import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/pages/home-page"), {
  ssr: true,
});

export default function Page() {
  return <HomePage />;
}
