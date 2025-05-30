"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// const mockLogin = (username: string, password: string) => {
//   // Mock authentication logic
//   return username === "user" && password === "password";
// };

export default function Home() {
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
   const [email, setEmail] = useState("")
  
  //  const handleLogin = () => {
  //   if (mockLogin(username, password)) {
  //     router.push("/feed");
  //   } else {
  //     setError("Invalid username or password \n Hint: try 'user' and 'password'");
  //   }
  // };
  const handleLogin = () => {
    // Dummy logic — replace with real auth
    if (email === "admin@yahoo.com" && password === "password") {
      console.log("✅ Logged in!")
            router.push("/feed");

    } else {
      setError("Invalid email or password. \n Hint: try 'admin@yahoo.com' and 'password'")
    }
  }

  return (
    <div className="flex m-5 flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}

              <Button type="submit" className="w-full">
                Login
              </Button>
              
            </div>
            {/* <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div> */}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}






//   return (
//     <div className="login-page">
//       <h1>Login</h1>
//       <div className="login-form">
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleLogin}>Login</button>
//         {error && <p className="error">{error}</p>}
//       </div>
//     </div>
//   );
// }
