import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter()
  return <h1>Success: {JSON.stringify(query)}</h1>
}